import { getSql } from "@/lib/db";
import { projects, type Project } from "@/lib/site";
import { isLocalAdminBypassAllowed, LOCAL_ADMIN_USER_ID } from "@/lib/admin-access.server";

const ADMIN_EMAIL = "dat206kd@gmail.com";

type ProjectRow = {
  project_data: Project;
  is_published: boolean;
};

export type ManagedProject = {
  project: Project;
  isPublished: boolean;
};

export type ContactMessage = {
  id: string;
  name: string;
  email: string;
  message: string;
  isRead: boolean;
  isArchived: boolean;
  createdAt: string;
};

async function isAdmin(userId: string) {
  if (userId === LOCAL_ADMIN_USER_ID && isLocalAdminBypassAllowed()) {
    return true;
  }

  const sql = await getSql();
  const rows = await sql<{ id: string }>`
    select id
    from "user"
    where id = ${userId}
      and lower(email) = ${ADMIN_EMAIL}
      and "emailVerified" = true
    limit 1
  `;
  return rows.length === 1;
}

async function requireAdmin(userId: string) {
  if (!(await isAdmin(userId))) {
    throw new Error("Tài khoản này không có quyền quản trị.");
  }
}

async function getManagedRows(ownerUserId?: string) {
  const sql = await getSql();
  if (ownerUserId) {
    return sql<ProjectRow>`
      select project_data, is_published
      from admin_projects
      where owner_user_id = ${ownerUserId}
      order by updated_at desc
    `;
  }
  return sql<ProjectRow>`
    select project_data, is_published
    from admin_projects
  `;
}

function mergeProjects(rows: ProjectRow[], includeHidden: boolean): ManagedProject[] {
  const overrides = new Map(rows.map((row) => [row.project_data.id, row]));
  const result: ManagedProject[] = [];

  for (const project of projects) {
    const saved = overrides.get(project.id);
    if (saved) {
      if (includeHidden || saved.is_published) {
        result.push({
          project: saved.project_data,
          isPublished: saved.is_published,
        });
      }
      overrides.delete(project.id);
    } else {
      result.push({ project, isPublished: true });
    }
  }

  for (const saved of overrides.values()) {
    if (includeHidden || saved.is_published) {
      result.push({
        project: saved.project_data,
        isPublished: saved.is_published,
      });
    }
  }

  return result;
}

export async function getPublishedProjects() {
  return mergeProjects(await getManagedRows(), false).map(({ project }) => project);
}

export async function getAdminDashboard(userId: string) {
  const localAdmin = userId === LOCAL_ADMIN_USER_ID && isLocalAdminBypassAllowed();
  if (!localAdmin && !(await isAdmin(userId))) {
    return { authorized: false as const, projects: [], messages: [] };
  }

  const sql = await getSql();
  const projectRows = await getManagedRows(userId);
  const messages = localAdmin
    ? await sql<ContactMessage>`
      select
        id,
        name,
        email,
        message,
        is_read as "isRead",
        is_archived as "isArchived",
        cast(created_at as text) as "createdAt"
      from contact_messages
      where lower(recipient_email) = ${ADMIN_EMAIL}
      order by created_at desc
      limit 200
    `
    : await sql<ContactMessage>`
      select
        m.id,
        m.name,
        m.email,
        m.message,
        m.is_read as "isRead",
        m.is_archived as "isArchived",
        cast(m.created_at as text) as "createdAt"
      from contact_messages m
      inner join "user" u on lower(u.email) = lower(m.recipient_email)
      where u.id = ${userId} and lower(u.email) = ${ADMIN_EMAIL}
      order by m.created_at desc
      limit 200
    `;

  return {
    authorized: true as const,
    projects: mergeProjects(projectRows, true),
    messages,
  };
}

export async function saveAdminProject(userId: string, project: Project) {
  await requireAdmin(userId);
  const sql = await getSql();
  const rows = await sql<{ id: string }>`
    insert into admin_projects (id, owner_user_id, project_data, is_published, updated_at)
    values (${project.id}, ${userId}, ${JSON.stringify(project)}, true, CURRENT_TIMESTAMP)
    on conflict (id) do update set
      project_data = excluded.project_data,
      is_published = true,
      updated_at = CURRENT_TIMESTAMP
    where admin_projects.owner_user_id = excluded.owner_user_id
    returning id
  `;
  if (rows.length !== 1) {
    throw new Error("Không thể lưu sản phẩm này. Hãy tải lại trang và thử lại.");
  }
}

export async function setAdminProjectPublished(
  userId: string,
  project: Project,
  isPublished: boolean,
) {
  await requireAdmin(userId);
  const sql = await getSql();
  const rows = await sql<{ id: string }>`
    insert into admin_projects (id, owner_user_id, project_data, is_published, updated_at)
    values (${project.id}, ${userId}, ${JSON.stringify(project)}, ${isPublished}, CURRENT_TIMESTAMP)
    on conflict (id) do update set
      project_data = excluded.project_data,
      is_published = excluded.is_published,
      updated_at = CURRENT_TIMESTAMP
    where admin_projects.owner_user_id = excluded.owner_user_id
    returning id
  `;
  if (rows.length !== 1) {
    throw new Error("Không thể cập nhật trạng thái sản phẩm.");
  }
}

export async function setContactMessageState(
  userId: string,
  id: string,
  state: "read" | "unread" | "archive" | "restore",
) {
  await requireAdmin(userId);
  const sql = await getSql();
  if (state === "read" || state === "unread") {
    if (userId === LOCAL_ADMIN_USER_ID && isLocalAdminBypassAllowed()) {
      await sql`
        update contact_messages
        set is_read = ${state === "read"}
        where id = ${id} and lower(recipient_email) = ${ADMIN_EMAIL}
      `;
      return;
    }
    await sql`
      update contact_messages
      set is_read = ${state === "read"}
      where id = ${id}
        and recipient_email = (
          select email from "user" where id = ${userId} and lower(email) = ${ADMIN_EMAIL}
        )
    `;
    return;
  }

  if (userId === LOCAL_ADMIN_USER_ID && isLocalAdminBypassAllowed()) {
    await sql`
      update contact_messages
      set is_archived = ${state === "archive"}
      where id = ${id} and lower(recipient_email) = ${ADMIN_EMAIL}
    `;
    return;
  }

  await sql`
    update contact_messages
    set is_archived = ${state === "archive"}
    where id = ${id}
      and recipient_email = (
        select email from "user" where id = ${userId} and lower(email) = ${ADMIN_EMAIL}
      )
  `;
}

export async function submitContactMessage(input: {
  name: string;
  email: string;
  message: string;
}) {
  const sql = await getSql();
  await sql`
    insert into contact_messages (id, recipient_email, name, email, message)
    values (
      ${crypto.randomUUID()},
      ${ADMIN_EMAIL},
      ${input.name},
      ${input.email},
      ${input.message}
    )
  `;
}

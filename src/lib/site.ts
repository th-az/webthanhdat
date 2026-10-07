export const site = {
  name: "THÀNH ĐẠT",
  fullName: "Nguyễn Công Thành Đạt",
  nickname: "Đạt",
  title: "Web Developer & AI Project Builder",
  tagline: "WEB DEVELOPER · AI · CREATIVE",
  script: "Portfolio",
  domain: "thanhdat2806.id.vn",
  location: "Hà Nội",
  hometown: "Thái Bình",
  school: "Học viện Công nghệ Bưu chính Viễn thông (PTIT)",
  major: "Quản trị kinh doanh",
  intro:
    "Sinh viên ngành Quản trị kinh doanh tại Học viện Công nghệ Bưu chính Viễn thông (PTIT), yêu thích công nghệ, thiết kế website và ứng dụng AI vào các sản phẩm thực tế. Mình tập trung xây dựng những sản phẩm số có giao diện hiện đại, trực quan và thân thiện với người dùng. Bên cạnh đó, mình đang phát triển các dự án AI chạy local trên máy tính cá nhân.",
  slogan: "Digital Creator. Designed for making.",
  usp: "Kết hợp tư duy kinh doanh với web hiện đại và AI chạy local — ra sản phẩm đẹp, rõ ràng, dùng được ngay.",
};

export const nav = [
  { href: "/", label: "TRANG CHỦ" },
  { href: "/about", label: "GIỚI THIỆU" },
  { href: "/projects", label: "DỰ ÁN" },
  { href: "/skills", label: "KỸ NĂNG" },
  { href: "/contact", label: "LIÊN HỆ" },
] as const;

export const identityBars = [
  { label: "Web Craft", value: 90 },
  { label: "Local AI", value: 82 },
  { label: "UI / UX", value: 86 },
  { label: "Business", value: 78 },
] as const;

export const audience = {
  age: "20+",
  gender: "Nam",
  location: "Hà Nội · quê Thái Bình",
  school: "PTIT — Quản trị kinh doanh",
  mindset: "Thích sản phẩm đẹp, logic rõ, AI thực tế",
  education: "Sinh viên đại học, tự học web & AI",
  occupation: "Web Developer · AI Project Builder",
} as const;

export const audienceNotes = [
  "Xem website như mặt tiền của một ý tưởng — không chỉ là trang giới thiệu.",
  "Ưu tiên giao diện hiện đại, trực quan, thân thiện trước khi thêm tính năng.",
  "Đưa AI vào sản phẩm theo hướng chạy local, chủ động, không phụ thuộc đám mây.",
  "Kết hợp tư duy kinh doanh với kỹ thuật để ra quyết định rõ ràng.",
] as const;

export type Project = {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  stack: string[];
  demo: string;
  github: string;
  status: string;
  image: string;
  imagePos: string;
  video?: string;
  category: "ai" | "web" | "business";
  features: string[];
};

export const projects: Project[] = [
  {
    id: "datai",
    name: "ĐạtAI",
    subtitle: "Local AI Assistant",
    description:
      "Trợ lý AI cá nhân chạy trực tiếp trên máy tính Windows, hỗ trợ trò chuyện với AI, đọc và phân tích tài liệu PDF/DOCX và tương tác thông qua giao diện web.",
    stack: ["Python", "Flask", "Ollama", "Qwen", "REST API", "HTML", "CSS", "JavaScript"],
    demo: "Localhost / chưa public",
    github: "Chưa public",
    status: "In build",
    image: "/images/project1.jpg",
    imagePos: "center",
    video: "/videos/intro1.mp4",
    category: "ai",
    features: [
      "Chạy 100% offline trên máy tính Windows cá nhân, đảm bảo bảo mật dữ liệu.",
      "Tích hợp mô hình ngôn ngữ lớn (Qwen qua Ollama) với khả năng phản hồi thông minh.",
      "Tự động đọc, phân tích và trích xuất nội dung từ tài liệu PDF và DOCX.",
      "Giao diện Web UI tối giản, trực quan, dễ sử dụng cho học tập và nghiên cứu.",
    ],
  },
  {
    id: "dorm",
    name: "Ký túc xá PTIT",
    subtitle: "Hệ thống quản lý",
    description:
      "Dự án xây dựng hệ thống hỗ trợ sinh viên đăng ký ký túc xá và giúp cán bộ quản trị quản lý phòng, sinh viên, đăng ký và thanh toán.",
    stack: ["HTML", "CSS", "JavaScript", "Database", "Web Development"],
    demo: "Chưa public",
    github: "Chưa public",
    status: "Prototype",
    image: "/images/project2.jpg",
    imagePos: "center",
    video: "/videos/intro2.mp4",
    category: "web",
    features: [
      "Giao diện đăng ký phòng trực tuyến dành riêng cho sinh viên PTIT.",
      "Bảng điều khiển quản trị viên quản lý danh sách phòng, sinh viên và giường trống.",
      "Theo dõi lịch sử đóng phí, tình trạng thanh toán và hợp đồng lưu trú.",
      "Báo cáo và thống kê tự động về tỷ lệ lấp đầy phòng theo kỳ học.",
    ],
  },
  {
    id: "portfolio",
    name: "THÀNH ĐẠT",
    subtitle: "Personal Portfolio",
    description:
      "Website portfolio cá nhân giới thiệu bản thân, kỹ năng và các dự án với phong cách Luxury Editorial hiện đại, tối giản và tập trung mạnh vào trải nghiệm thị giác.",
    stack: ["HTML", "CSS", "JavaScript", "Tailwind CSS", "Responsive Design", "TanStack"],
    demo: "thanhdat2806.id.vn",
    github: "Chưa public",
    status: "Live",
    image: "/images/project3.jpg",
    imagePos: "center",
    video: "/videos/intro3.mp4",
    category: "web",
    features: [
      "Phong cách Luxury Editorial với tông màu đỏ rượu (Wine) và kem (Cream) sang trọng.",
      "Hiệu ứng 3D Parallax và Tilt card tương tác mượt mà theo chuyển động chuột.",
      "Kiến trúc đa trang (Multi-page) tối ưu tốc độ tải và trải nghiệm người dùng.",
      "Hoàn toàn responsive trên mọi kích thước màn hình từ điện thoại đến desktop.",
    ],
  },
  {
    id: "showcase",
    name: "Product Showcase",
    subtitle: "Website giới thiệu sản phẩm",
    description:
      "Website giới thiệu sản phẩm theo phong cách editorial/luxury, tập trung vào hình ảnh, bố cục, typography và câu chuyện thương hiệu thay vì giá bán hoặc đánh giá.",
    stack: ["HTML", "CSS", "JavaScript", "Tailwind CSS", "UI/UX"],
    demo: "Chưa public",
    github: "Chưa public",
    status: "Concept",
    image: "/images/product.jpg",
    imagePos: "center",
    category: "web",
    features: [
      "Bố cục tạp chí thời trang cao cấp với typography có tỷ lệ và nhịp điệu hoàn hảo.",
      "Tập trung làm nổi bật câu chuyện thương hiệu và chi tiết thủ công của sản phẩm.",
      "Tối ưu hóa hình ảnh độ phân giải cao với hiệu ứng chuyển cảnh mượt mà.",
      "Trải nghiệm cuộn trang tạo cảm giác khám phá như đang đọc một ấn phẩm in ấn.",
    ],
  },
  {
    id: "tiktok",
    name: "TikTok Shop",
    subtitle: "Business Model",
    description:
      "Dự án học tập phân tích mô hình kinh doanh TikTok Shop và đề xuất các giải pháp cải thiện hoạt động thương mại điện tử.",
    stack: ["PowerPoint", "Canva", "Figma", "Business Model Analysis"],
    demo: "Dự án học tập",
    github: "—",
    status: "Study",
    image: "/images/workspace.jpg",
    imagePos: "center",
    category: "business",
    features: [
      "Phân tích hành trình khách hàng (Customer Journey) từ xem video đến hoàn tất đơn hàng.",
      "Đánh giá mô hình thu phí hoa hồng, vận hành logistics và chiến lược livestream bán hàng.",
      "Đề xuất các giải pháp tối ưu tỷ lệ chuyển đổi cho nhà bán hàng vừa và nhỏ.",
      "Tổng hợp bài học ứng dụng cho sinh viên ngành Quản trị kinh doanh PTIT.",
    ],
  },
];

export const pillars = [
  {
    title: "Web Craft",
    text: "Giao diện editorial, typography có nhịp, layout chịu được nhìn lâu.",
    image: "/images/project3.jpg",
  },
  {
    title: "Local AI",
    text: "Trợ lý chạy trên máy thật, đọc PDF/DOCX, không đẩy dữ liệu ra ngoài.",
    image: "/images/project1.jpg",
  },
  {
    title: "Business Lens",
    text: "Mỗi sản phẩm đều trả lời được: ai dùng, vì sao dùng, bước tiếp theo là gì.",
    image: "/images/project2.jpg",
  },
] as const;

export const funnel = [
  {
    stage: "01  DISCOVERY",
    title: "Lắng nghe brief",
    text: "Làm rõ người dùng, mục tiêu và ràng buộc trước khi mở Figma hay editor.",
  },
  {
    stage: "02  DIRECTION",
    title: "Định hình thẩm mỹ",
    text: "Chọn tone, type, layout — luxury editorial, tối giản, tập trung thị giác.",
  },
  {
    stage: "03  BUILD",
    title: "Thiết kế & lập trình",
    text: "HTML, CSS, JS, Tailwind, Python/Flask khi cần AI hoặc logic thật.",
  },
  {
    stage: "04  LAUNCH",
    title: "Ra mắt & tinh chỉnh",
    text: "Responsive, tương tác mượt, sẵn sàng demo hoặc đưa lên domain.",
  },
] as const;

export const engagement = [
  {
    title: "Làm việc trực tiếp",
    text: "Trao đổi ngắn, ra quyết định nhanh. Ưu tiên prototype nhìn được hơn slide dài.",
  },
  {
    title: "Vòng lặp ngắn",
    text: "Mỗi tuần một bản nhìn được: layout, tương tác, hoặc luồng AI local.",
  },
] as const;

export const roadmap = [
  {
    kicker: "Q3",
    title: "ĐạtAI v1",
    text: "Chat local + đọc PDF/DOCX trên Windows, giao diện web gọn.",
  },
  {
    kicker: "Q4",
    title: "KTX PTIT",
    text: "Hoàn thiện đăng ký phòng, quản trị và thanh toán.",
  },
  {
    kicker: "2026",
    title: "Product work",
    text: "Website editorial cho thương hiệu nhỏ, tập trung câu chuyện.",
  },
] as const;

export const stack = {
  development: [
    "HTML5",
    "CSS3",
    "JavaScript",
    "Tailwind CSS",
    "Responsive Web Design",
    "UI/UX Design",
    "Animation & Interaction",
    "Python",
    "Flask",
    "REST API",
  ],
  ai: [
    "Generative AI",
    "Local AI",
    "Ollama",
    "Qwen",
    "AI Assistant",
    "AI Coding Tools",
    "Document AI",
    "PDF/DOCX Processing",
  ],
  tools: [
    "VS Code",
    "Git / GitHub",
    "Figma",
    "Canva",
    "PowerPoint",
    "Antigravity",
    "Lovable",
  ],
  business: [
    "Business Analysis",
    "E-commerce",
    "Business Model",
    "Project Planning",
    "Requirements Analysis",
  ],
} as const;

export const personas = [
  {
    name: "The Builder",
    role: "Web Developer",
    text: "Tự tay dựng layout, tương tác và hệ thống nhìn được trên trình duyệt.",
    image: "/images/portrait1.jpg",
    pos: "center",
  },
  {
    name: "The Analyst",
    role: "Business Student",
    text: "Đọc mô hình, tách yêu cầu, biến ý tưởng thành phạm vi làm được.",
    image: "/images/portrait2.jpg",
    pos: "center",
  },
  {
    name: "The Tinkerer",
    role: "Local AI",
    text: "Chạy model trên máy cá nhân, xử lý tài liệu, không phụ thuộc cloud.",
    image: "/images/portrait3.jpg",
    pos: "top",
  },
  {
    name: "The Stylist",
    role: "Editorial UI",
    text: "Ưu tiên thị giác: type, khoảng trắng, ảnh, nhịp trang như tạp chí.",
    image: "/images/portrait4.jpg",
    pos: "top",
  },
] as const;

export const nextSteps = [
  { n: "01", title: "Introductory call", text: "Nói ngắn về ý tưởng, phạm vi, thẩm mỹ." },
  { n: "02", title: "Assets transfer", text: "Nhận brief, ảnh, nội dung, ràng buộc kỹ thuật." },
  { n: "03", title: "Optimize & build", text: "Thiết kế layout, code, gắn AI khi cần." },
  { n: "04", title: "Content & launch", text: "Tinh chỉnh chữ, ảnh, tương tác — rồi demo." },
] as const;

export const mosaic = [
  { src: "/images/portrait1.jpg", pos: "center" },
  { src: "/images/project1.jpg", pos: "center" },
  { src: "/images/portrait2.jpg", pos: "center" },
  { src: "/images/project2.jpg", pos: "center" },
  { src: "/images/portrait3.jpg", pos: "top" },
  { src: "/images/hero.jpg", pos: "center" },
  { src: "/images/portrait4.jpg", pos: "top" },
  { src: "/images/project3.jpg", pos: "center" },
] as const;

import { site } from "@/lib/site";

/** Editorial QR-style mark. The live URL sits under it so it stays useful. */
export function QrMark() {
  const cells = QR_PATTERN;
  return (
    <div className="flex flex-col items-center gap-4">
      <svg
        viewBox="0 0 29 29"
        className="aspect-square w-full max-w-[280px] bg-paper text-ink"
        role="img"
        aria-label={`Mã liên kết tới ${site.domain}`}
      >
        {cells.map((row, y) =>
          row.map((on, x) =>
            on ? (
              <rect
                key={`${x}-${y}`}
                x={x}
                y={y}
                width={1}
                height={1}
                fill="currentColor"
              />
            ) : null,
          ),
        )}
      </svg>
      <p className="text-center font-display text-xs tracking-[0.2em] text-cream/80">
        SCAN TO VIEW LIVE SITE
      </p>
      <p className="text-center font-display text-sm tracking-[0.18em] text-cream">
        {site.domain.toUpperCase()}
      </p>
    </div>
  );
}

function finder(size: number, x0: number, y0: number, grid: number[][]) {
  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      const edge = x === 0 || y === 0 || x === size - 1 || y === size - 1;
      const inner = x >= 2 && x <= size - 3 && y >= 2 && y <= size - 3;
      grid[y0 + y][x0 + x] = edge || inner ? 1 : 0;
    }
  }
}

function buildPattern() {
  const n = 29;
  const grid = Array.from({ length: n }, () => Array(n).fill(0));
  finder(7, 1, 1, grid);
  finder(7, n - 8, 1, grid);
  finder(7, 1, n - 8, grid);
  const seed = "thanhdat2806.id.vn-portfolio";
  for (let y = 1; y < n - 1; y++) {
    for (let x = 1; x < n - 1; x++) {
      if (grid[y][x]) continue;
      const inFinder =
        (x < 9 && y < 9) || (x > n - 10 && y < 9) || (x < 9 && y > n - 10);
      if (inFinder) continue;
      const i = y * n + x;
      const c = seed.charCodeAt(i % seed.length);
      grid[y][x] = (c + x * 3 + y * 5) % 4 === 0 ? 0 : 1;
    }
  }
  return grid;
}

const QR_PATTERN = buildPattern();

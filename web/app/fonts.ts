import localFont from "next/font/local";

export const unbounded = localFont({
  src: [
    { path: "./fonts/unbounded-latin-500-normal.woff2", weight: "500" },
    { path: "./fonts/unbounded-latin-600-normal.woff2", weight: "600" },
    { path: "./fonts/unbounded-latin-700-normal.woff2", weight: "700" },
  ],
  variable: "--font-unbounded",
  display: "swap",
});

export const hanken = localFont({
  src: [
    { path: "./fonts/hanken-grotesk-latin-400-normal.woff2", weight: "400" },
    { path: "./fonts/hanken-grotesk-latin-500-normal.woff2", weight: "500" },
    { path: "./fonts/hanken-grotesk-latin-600-normal.woff2", weight: "600" },
  ],
  variable: "--font-hanken",
  display: "swap",
});

export const martian = localFont({
  src: [
    { path: "./fonts/martian-mono-latin-400-normal.woff2", weight: "400" },
    { path: "./fonts/martian-mono-latin-500-normal.woff2", weight: "500" },
  ],
  variable: "--font-martian",
  display: "swap",
});

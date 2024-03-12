import { Quicksand } from "next/font/google";
import "./globals.css";

const quicksand = Quicksand({ subsets: ["latin"], weight: ["300", "400", "500", "700"] });

export const metadata = {
  title: "Lancer Media",
  description: "Lancer Media là đối tác MCN chính thức với nền tảng Tiktok. Quản lý và nhận booking talent và idol đa nền tảng. Nhận booking studio và thiết bị livestream game, livestream bán hàng đa nền tảng.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={quicksand.className}>{children}</body>
    </html>
  );
}

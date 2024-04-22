import { Inter } from "next/font/google";
import { UserProvider } from "@auth0/nextjs-auth0/client";
import { PageLayout } from "@/components/layout/shared/pageLayout";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Lancer Media - Trang quản lý dịch vụ",
  description: "Trang quản lý dịch vụ Lancer Media",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <UserProvider>
          <PageLayout>{children}</PageLayout>
        </UserProvider>
      </body>
    </html>
  );
}

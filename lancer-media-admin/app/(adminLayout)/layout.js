import "./globals.css";
import MainLayout from "@/components/layout/shared/mainLayout";

export default async function Layout({ children }) {
  return (
  <html lang="en">
    <body suppressHydrationWarning={true}>
      <MainLayout>{children}</MainLayout>
    </body>
  </html>);
}

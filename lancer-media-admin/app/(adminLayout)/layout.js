import "./globals.css";
import MainLayout from "@/ui/mainLayout";

export default async function Layout({ children }) {
  return (
  <html lang="en">
    <body suppressHydrationWarning={true}>
      <MainLayout>{children}</MainLayout>;
    </body>
  </html>);
}

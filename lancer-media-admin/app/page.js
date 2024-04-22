import { LoginButton } from "@/components/button/loginButton";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {/* <!-- Left column container with background--> */}
      <div className="flex w-full flex-wrap items-center justify-center lg:justify-between">
        <div className="shrink-1 mb-12 grow-0 items-center flex flex-col justify-center md:mb-0 md:w-9/12 md:shrink-0 lg:w-6/12 xl:w-6/12">
          <Image
            src="/lancerLogo.jpg"
            alt="Logo"
            className="w-64 h-64 mr-2"
            width={200}
            height={200}
          />
          <span className="text-2xl">Lancer Media</span>
        </div>

        {/* <!-- Right column container --> */}
        <div className="mb-12 md:mb-0 md:w-8/12 lg:w-5/12 xl:w-5/12">
          <form>
            <div className="mb-6 flex items-center justify-between">
              <h3>Trang quản lý của Lancer Media</h3>
            </div>

            {/* Login button */}
            <div className="text-center lg:text-left">
              <LoginButton></LoginButton>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}

import Navigation from "@/app/ui/Common/nav";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Lancer Media</title>
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <Navigation />
      </main>
    </>
  );
}

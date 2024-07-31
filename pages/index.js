import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Main } from "@/components/Main";

export default function Home() {
  return (
    <main className="dark:bg-gray-800 bg-white font-sans flex flex-col gap-[69px]">

      <div className="flex flex-col gap-[100px]">
      <Header />
      <Main />
      </div>
      <Footer />
    </main>
  );
}

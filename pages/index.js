import { Header } from "@/components/Header";
import { Main } from "@/components/Main";

export default function Home() {
  return (
    <main className="dark:bg-gray-800 bg-gray-100">
      <Header />
      <Main />
    </main>
  );
}

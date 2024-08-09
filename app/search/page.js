import Script from "next/script";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import "/styles/globals.css";

export default async function Page() {
  return (
    <main>
      <Header />
      <div className="container mx-auto">
        <Script
          async
          src="https://cse.google.com/cse.js?cx=86f4cc97a59b34bad"
        />
        <div className="gcse-search"></div>
      </div>
      <Footer />
    </main>
  );
}

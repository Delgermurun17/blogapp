import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import Link from "next/link";

export default function Custom404() {
    return (
        <div>
            <Header />
            <div className="flex flex-col items-center md:flex-row justify-center gap-10 h-[60svh]">
                <div className="text-black font-normal text-7xl">404</div>
                <div className="border w-[370px] md:w-0 h-0 md:h-[156px]"></div>
                <div className="p-[8px_0px] w-[392px] gap-5 flex flex-col md:items-start items-center">
                    <div className="">Page Not Found</div>
                    <div className="">We're sorry, This page is unknown or does not exist the page you are looking for.</div>
                    <div className="">
                        <Link target="_self" href="/" ><button className="w-[130px] h-10 rounded-md p-[10px_16px] bg-[#4B6BFB] font-medium text-sm text-center text-white active:scale-95 duration-300 hover:bg-[#3f5ee7]">Back To Home</button></Link>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
  }
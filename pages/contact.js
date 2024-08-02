import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

export default function contact(){
    return (
        <div className="flex flex-col gap-[100px]">
            <Header />
            <div className="mx-8">
            <div className="max-w-[628px] mx-auto gap-5 flex flex-col">
                <div className="font-semibold text-4xl text-black">Contact Us</div>
                <div className="font-jakarta font-normal text-base text-[#696A75]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</div>
                </div>
                <div className="mt-[30px] mb-[49px]">
                <div className="p-[10px_0px] flex gap-[50px] flex-col md:flex-row justify-center items-center">
                    <div className="rounded-xl border-gray-400 border w-[294px] p-4 h-[133px] flex flex-col gap-2.5"><h2 className="font-semibold text-[24px] text-black leading-10">Address</h2><div className="font-normal text-[18px] leading-[26px] text-[#696A75]">1328 Oak Ridge Drive, Saint Louis, Missouri</div></div>
                    <div className="rounded-xl border-gray-400 border w-[294px] p-4 h-[133px] flex flex-col gap-2.5"><h2 className="font-semibold text-[24px] text-black leading-10">Contact</h2><div className="font-normal text-[18px] leading-[26px] text-[#696A75]">313-332-8662 <br></br> info@email.com</div></div>
                </div>
            </div>
            <div className="bg-gray-100 flex flex-col gap-6 rounded-[10px] max-w-[643px] mx-auto p-[29px_0px_44px_35px] pr-[29px]">
                <h2 className="font-bold">Leave a Message</h2>
                <div className="flex flex-col gap-5 max-w-[478px]">
                    <div className="flex gap-7 flex-col md:flex-row">
                        <input type="text" className="outline-none text-base-content rounded-[5px] p-[7px_27px_8px_18px] border border-gray-400" placeholder="Your Name"/>
                        <input type="text" className="outline-none text-base-content rounded-[5px] p-[7px_27px_8px_18px] border border-gray-400" placeholder="Your Email"/>
                    </div>
                    <div>
                        <input type="text" className="outline-none text-base-content rounded-[5px] p-[5.5px_20px_5.5px_18px] border border-gray-400 w-full" placeholder="Subject"/>
                    </div>
                    <div>
                        <textarea  className="p-[14px_20px_8px_18px] rounded-[5px] border border-gray-400 w-full h-[134px] bg-white outline-none resize-none" placeholder="Write a message"/>
                    </div>
                    <div>
                        <button className="p-[10px_16px] bg-[#4B6BFB] rounded-md font-medium text-sm font-sans text-white mt-[9px] active:scale-95 duration-300 hover:bg-[#3f5ee7]">Send Message</button>
                    </div>
                </div>
            </div></div>
            <Footer />
        </div>
    )
}
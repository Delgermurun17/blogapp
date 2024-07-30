import { Header } from "@/components/Header";

export default function contact(){
    return (
        <div>
            <Header />
            <div className="w-[628px] mx-auto">
                <div>Contact Us</div>
                <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</div>
                </div>
                <div className="mt-[30px] mb-[49px]">
                <div className="flex justify-between w-[638px] mx-auto">
                    <div className="rounded-xl border-gray-400 border w-[294px] p-4 h-[133px]"><h2>Address</h2><div>1328 Oak Ridge Drive, Saint Louis, Missouri</div></div>
                    <div className="rounded-xl border-gray-400 border w-[294px] p-4 h-[133px]"><h2>Contact</h2><div>313-332-8662 info@email.com</div></div>
                </div>
            </div>
            <div className="bg-gray-100 flex flex-col gap-6 rounded-[10px] w-[643px] mx-auto p-[29px_0px_44px_35px]">
                <h2 className="font-bold">Leave a Message</h2>
                <div className="flex flex-col gap-5 w-[478px]">
                    <div className="flex gap-7">
                        <input type="text" className="outline-none text-base-content rounded-[5px] p-[7px_27px_8px_18px] border border-gray-400" placeholder="Your Name"/>
                        <input type="text" className="outline-none text-base-content rounded-[5px] p-[7px_27px_8px_18px] border border-gray-400" placeholder="Your Email"/>
                    </div>
                    <div>
                        <input type="text" className="outline-none text-base-content rounded-[5px] p-[5.5px_20px_5.5px_18px] border border-gray-400 w-full" placeholder="Subject"/>
                    </div>
                    <div>
                        <input type="text"  className="outline-none text-base-content rounded-[5px] p-[14px_20px_8px_18px] border border-gray-400 w-full h-[134px]" placeholder="Write a message"/>
                    </div>
                    <div>
                        <button className="p-[10px_16px] bg-[#4B6BFB] rounded-md font-medium text-sm font-sans text-white mt-[9px]">Send Message</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
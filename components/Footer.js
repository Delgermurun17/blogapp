import Link from "next/link";
import { Footeritem } from "./Footeritem";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import Image from "next/image";
import "@fontsource/plus-jakarta-sans"

export function Footer(){
    return (
        <div className="h-[490px] border border-t-[#E8E8EA] bg-[#F6F6F7] flex items-center font-jakarta">
            <div className="container mx-auto flex flex-col gap-[25px]">
                <div className="flex gap-5 h-60">
                    <div className="w-[289px] flex flex-col gap-6">
                        <div className="flex flex-col gap-3">
                            <div className="">About</div>
                            <div className="font-normal text-base text-[#696A75]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</div>
                        </div>
                        <div>
                            <Footeritem fItem="Email : info@jstemplate.net"/>
                            <Footeritem fItem="Phone : 880 123 456 789"/>
                        </div>
                    </div>
                    <div className="w-[521px] h-[88px] flex justify-center">
                        <div className="flex flex-col justify-between">
                        <Link target="_self" href="/"><Footeritem fItem="Home"/></Link>
                        <Link href={"blog"}><Footeritem fItem="Blog"/></Link>
                        <Link href={"contact"}><Footeritem fItem="Contact"/></Link>
                        </div>
                    </div>
                    <div className="w-36 flex justify-between text-[#6D6E76]">
                        <Link target="_blank" href={"https://facebook.com"}><FaFacebook /></Link>
                        <Link target="_blank" href={"https://twitter.com"}><FaTwitter />  </Link>
                        <Link target="_blank" href={"https://instagram.com"}><FaInstagram /></Link>
                        <Link target="_blank" href={"https://linkedin.com"}><FaLinkedin /></Link>
                    </div>
                </div>
                <div className="flex items-center justify-between gap-5 h-24 border-[#DCDDDF] border-t">
                    <div className="flex gap-2.5 items-center">
                        <div><Image src={"/footericon.svg"} width={48} height={48}/></div>
                        <div>
                            <div className="font-normal text-xl text-[#141624]">Meta<span className="font-extrabold">Blog</span></div>
                            <Footeritem fItem="© All Rights Reserved."/>
                        </div>
                    </div>
                    <div className="flex items-center justify-end gap-4 h-6">
                        <Footeritem fItem="Terms of Use"/>
                        <div className="border-r h-6 border-[#E8E8EA]"></div>
                        <Footeritem fItem="Privacy Policy"/>
                        <div className="border-r h-6 border-[#E8E8EA]"></div>
                        <Footeritem fItem="Cookie Policy"/>
                    </div>
                </div>
            </div>
        </div>
    )
}
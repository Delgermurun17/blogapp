import Image from "next/image";
import { NavItem } from "./NavItem";
import Link from "next/link";
import { Menubar } from "./Menubar";
import { IoClose } from "react-icons/io5";
import { LuMenu } from "react-icons/lu";
import { useState } from "react";

export function Header(){

    const [open, setOpen] = useState(false);

    function openMenu(){
      setOpen(true)
    }
  
    function closeMenu(){
      setOpen(false)
    }

    return (
    <div className="">
        <div className="h-[100px] flex items-center mx-8">
            <div className="flex justify-between items-center container m-auto"><div>
                <Link target="_self" href="/">
                <div className="hidden md:block"><Image width={158} height={36} src={"logo.svg"}/></div>
                <div className="md:hidden"><Image width={135} height={26} src={"logo.svg"}/></div>
                </Link>
            </div>
            <div className="hidden md:block">
            <div className="flex gap-3">
            <Link target="_self" href="/">
                <NavItem nav="Home"/>
            </Link>
                <Link href={"blog"}> <NavItem nav="Blog"/></Link>
                <Link href={"contact"}><NavItem nav="Contact"/></Link>
            </div>
            </div>
            <div className="hidden md:block">
                <input type="text" className="outline-none text-base-content bg-base-200 w-28 placeholder:font-work" placeholder="Search"/>
            </div>
            <div className="md:hidden size-9 flex justify-center items-center"><LuMenu onClick={openMenu} className="size-6"/>
        <div className={open ? "block" : "hidden"}>
        <div className="relative">
          <div onClick={closeMenu} className="fixed inset-0 bg-gray-400 dark:bg-white"></div>
          <div className="fixed top-0 bottom-0 right-0 w-[320px] text-black dark:text-white bg-white dark:bg-black shadow-lg">
            <div className="flex justify-between m-4">

              <div className="size-9 flex justify-center items-center">
                <IoClose onClick={closeMenu} className="size-6 text-gray-600"/>
              </div>
            </div>
            <div>
              <div className="border-y dark:border-gray-800 border-gray-100">
              <Link target="_self" href="/"><div className="ml-4 my-4"><Menubar menuItem="Home"/></div></Link>
              <Link href={"blog"}><div className="ml-4 mb-4"><Menubar menuItem="Blog"/></div></Link>
              <Link href={"contact"}><div className="ml-4 "><Menubar menuItem="Contact"/></div></Link>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
      </div>
        </div>
    </div>
    )
}
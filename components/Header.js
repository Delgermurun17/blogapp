"use client";

import Image from "next/image";
import { NavItem } from "./NavItem";
import Link from "next/link";
import { Menubar } from "./Menubar";
import { IoClose } from "react-icons/io5";
import { LuMenu } from "react-icons/lu";
import { useState } from "react";
import { GrSearch } from "react-icons/gr";

export function Header() {
  const [open, setOpen] = useState(false);

  function openMenu() {
    setOpen(true);
  }

  function closeMenu() {
    setOpen(false);
  }

  return (
    <div className="mx-8">
      <div className="h-[100px] flex items-center max-w-[1230px] m-auto">
        <div className="flex justify-between items-center container m-auto">
          <div>
            <Link target="_self" href="/">
              <div className="hidden md:block">
                <Image alt="Logo" width={158} height={36} src={"/logo.svg"} />
              </div>
              <div className="md:hidden">
                <Image alt="Logo" width={135} height={26} src={"/logo.svg"} />
              </div>
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="flex gap-3">
              <Link target="_self" href="/">
                <NavItem nav="Home" />
              </Link>
              <Link href={"/blog"}>
                {" "}
                <NavItem nav="Blog" />
              </Link>
              <Link href={"/contact"}>
                <NavItem nav="Contact" />
              </Link>
            </div>
          </div>
          <div className="hidden md:block w-[166px] h-9">
            <div className="bg-[#F4F4F5] p-[8px_8px_8px_16px] rounded-[5px] flex items-center gap-3">
              <form action="/search" className="">
                <input
                  type="search"
                  name="q"
                  className="outline-none text-sm font-normal bg-[#F4F4F5] w-[114px] placeholder:font-work"
                  placeholder="Search"
                />
              </form>
              <div className="size-4">
                <GrSearch />
              </div>
            </div>
          </div>
          <div className="md:hidden size-9 flex justify-center items-center">
            <LuMenu onClick={openMenu} className="size-6" />
            <div className={open ? "block" : "hidden"}>
              <div className="relative">
                <div
                  onClick={closeMenu}
                  className="fixed inset-0 bg-gray-400 dark:bg-white"
                ></div>
                <div className="fixed top-0 bottom-0 right-0 w-[320px] text-black dark:text-white bg-white dark:bg-black shadow-lg">
                  <div className="flex justify-between m-4">
                    <div className="size-9 flex justify-center items-center">
                      <IoClose
                        onClick={closeMenu}
                        className="size-6 text-gray-600"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="border-y dark:border-gray-800 border-gray-100">
                      <Link target="_self" href="/">
                        <div className="ml-4 my-4">
                          <Menubar menuItem="Home" />
                        </div>
                      </Link>
                      <Link href={"/blog"}>
                        <div className="ml-4 mb-4">
                          <Menubar menuItem="Blog" />
                        </div>
                      </Link>
                      <Link href={"/contact"}>
                        <div className="ml-4 ">
                          <Menubar menuItem="Contact" />
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

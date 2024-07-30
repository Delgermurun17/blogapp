import Image from "next/image";
import { NavItem } from "./NavItem";
import Link from "next/link";

export function Header(){
    return (
        <div className="flex justify-between items-center">
            <div>
                <Link target="_self" href="/">
                <div className="hidden md:block"><Image width={158} height={36} src={"logo.svg"}/></div>
                <div className="md:hidden"><Image width={135} height={26} src={"logo.svg"}/></div>
                </Link>
            </div>
            <div className="flex space-x-3">
            <Link target="_self" href="/">
                <NavItem nav="Home"/>
            </Link>
                <Link href={"blog"}> <NavItem nav="Blog"/></Link>
                <Link href={"contact"}><NavItem nav="Contact"/></Link>
            </div>
            <div className="">
                <input type="text" className="outline-none text-base-content bg-base-200 w-28 placeholder:font-work" placeholder="Search"/>
            </div>
        </div>
    )
}
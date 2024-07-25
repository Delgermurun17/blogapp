import Image from "next/image";
import { NavItem } from "./navItem";

export function Header(){
    return (
        <div className="flex justify-between items-center">
            <div>
                <div className="hidden md:block"><Image width={158} height={36} src={"logo.svg"}/></div>
                <div className="md:hidden"><Image width={135} height={26} src={"logo.svg"}/></div>
            </div>
            <div className="flex">
                <NavItem nav="Home"/>
                <NavItem nav="Blog"/>
                <NavItem nav="Contact"/>
            </div>
            <div className="">
                <input type="text" className="outline-none text-base-content bg-base-200 w-28 placeholder:font-work" placeholder="Search"/>
            </div>
        </div>
    )
}
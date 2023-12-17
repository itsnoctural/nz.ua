import Image from "next/image"
import { NavbarItem } from "./NavbarItem"
import { Button } from "../button/Button"
import { LockIcon } from "@/assets/icons/LockIcon"

export const Navbar = () => {
    return (
        <nav className="flex w-full items-center justify-center">
            <header className="flex w-full flex-nowrap items-center justify-between max-w-6xl py-10">
                <div className="flex items-center gap-x-6">
                    <Image src={"/logo-bw.svg"} height={40} width={40} alt="" priority/>
                    <span className="text-sm">nz.ua</span>
                </div>

                <div className="flex items-center gap-x-12">
                    <ul className="gap-x-10 hidden xl:flex">
                        <NavbarItem href="#" isActive>Головна</NavbarItem>
                        <NavbarItem href="#features" isActive={false}>Можливості</NavbarItem>
                        <NavbarItem href="#looks" isActive={false}>Про сайт</NavbarItem>
                        <NavbarItem href="#support" isActive={false}>Підтримка</NavbarItem>
                    </ul>

                    <Button>
                        <LockIcon/>
                        Увійти
                        <span className="hidden md:flex">до кабінету</span>
                    </Button>
                </div>
            </header>
        </nav>
    )
}
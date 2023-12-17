import Image from "next/image"
import { Button } from "../button/Button"
import { LockIcon } from "@/assets/icons/LockIcon"
import { ExternalLink } from "../external/ExternalLink"

export const Footer = () => {
    return (
        <footer className="flex justify-center w-full bg-black pt-20 pb-8">
            <div className="flex flex-col w-full max-w-6xl gap-y-6 md:gap-y-10 lg:gap-y-16">
                <div className="flex justify-center md:justify-between">
                    <div className="flex items-center gap-x-6">
                        <div className="flex gap-x-4">
                            <Image src={"/icons/logo.svg"} width={40} height={40} alt=""/>
                            <Image src={"/icons/tryzub-white.svg"} width={40} height={40} alt=""/>
                        </div>

                        <span className="text-neutral-500 text-sm">ТОВ “Нові Знання”</span>
                    </div>

                    <div className="hidden md:flex">
                        <Button>
                            <LockIcon/>
                            Увійти до кабінету
                        </Button>
                     </div>
                </div>
                
                <p className="text-neutral-500 text-sm text-center">Створено на платформі <ExternalLink href="https://isuo.org/">ІСУО</ExternalLink> © 2011</p>
            </div>
        </footer>
    )
}
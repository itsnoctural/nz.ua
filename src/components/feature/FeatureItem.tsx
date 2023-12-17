import Image from "next/image"

interface FeatureItemProps {
    children: React.ReactNode;
    href: string;
    iconSrc: string;
    width: number;
    height: number
}

export const FeatureItem = ({children, iconSrc, href, width, height}: FeatureItemProps) => {
    return (
        <a href={href} className="flex flex-col items-center gap-y-4 hover:-translate-y-1 transition-transform duration-300">
            <Image src={iconSrc} width={width} height={height} alt=""/>
            <span className="text-sm text-center">{children}</span>
        </a>
    )
}
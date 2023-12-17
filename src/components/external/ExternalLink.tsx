export const ExternalLink = ({children, href}: {children: React.ReactNode, href: string}) => {
    return (
        <a className="text-[#004bc8]" href={href} target="_blank">
            {children}
        </a>
    )
}
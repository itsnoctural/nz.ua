export const NavbarItem = ({children, href, isActive}: {children: React.ReactNode, href: string, isActive: boolean}) => {
    return (
        <li className={`after:w-full${isActive ? "" : " after:max-w-0"} hover:after:max-w-full after:h-0.5 after:block after:bg-black after:transition-[max-width] after:duration-300`}>
            <a className="text-sm text-[#090e36]" href={href}>{children}</a>
        </li>
    )
}
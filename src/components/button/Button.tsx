export const Button = ({children, colorStyles}: {children: React.ReactNode, colorStyles?: string}) => {
    return (
        <button className={`flex items-center gap-x-3 py-2.5 px-7 rounded-full text-sm transition-all duration-300 ${colorStyles ? colorStyles : "bg-black text-white hover:bg-white hover:text-[#090e36]"}`}>
            {children}
        </button>
    )
}
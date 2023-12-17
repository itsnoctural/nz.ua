interface AccordionItemProps {
    children: React.ReactNode,
    title: string,
    isActive?: boolean,
    classNames?: string,
    onClick: () => void,
}

export const AccordionItem = ({title, children, isActive, classNames, onClick}: AccordionItemProps) => {
    return (
        <div className={`${classNames ? classNames : "w-96"}`}>
            <h2>
                <button className="flex w-full h-full items-center py-4" onClick={onClick}>
                    <div className={`flex-1 flex flex-col text-start after:h-0.5 ${isActive ? "after:w-full after:bg-[linear-gradient(260.51deg,#b9ec9a_0%,#abb1f9_50.78%,#ef8393_100%)]" : ""}`}>
                        <span className="pb-1 text-[#090e36]">{title}</span>
                    </div>
                </button>
            </h2>

            <div className={`text-sm text-neutral-700 max-h-0${isActive ? " max-h-52" : ""} overflow-hidden transition-[max-height] duration-300 whitespace-pre-line`}>{children}</div>
        </div>
    )
}
export const Title = ({children, classNames}: {children: React.ReactNode, classNames: string}) => {
    return (
        <p className={`text-lg sm:text-3xl md:text-4xl lg:text-5xl xl:text-[56px] xl:leading-[72px]"${classNames ? " " + classNames : ""}`}>{children}</p>
    )
}
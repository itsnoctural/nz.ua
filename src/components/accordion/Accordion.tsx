import { AccordionItem } from "./AccordionItem";

export const Accordion = ({items, currentItem, classNames, setItem}: {items: {title: string, content: React.ReactNode}[], currentItem: number, classNames?: string, setItem: (index: number) => void}) => {
    return (
        <div className="flex flex-col gap-y-2">
            {items.map((v, i) => (
                <AccordionItem key={i} title={v.title} isActive={currentItem == i} classNames={classNames} onClick={() => setItem(i)}>
                    {v.content}
                </AccordionItem>
            ))}
        </div>
    )
}
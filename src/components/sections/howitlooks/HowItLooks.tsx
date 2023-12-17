'use client';

import { useState } from "react";
import { Accordion } from "../../accordion/Accordion"
import Image from "next/image";

export const HowItLooks = () => {
    const [item, setItem] = useState(0)

    const items = [
        {
          title: "Журнали",
          content: "Надають можливості зручного створення уроків, виставлення оцінок та аналізу успішності учнів, класів, школи.",
          image: "/images/journal.webp",
        },
        {
          title: "Щоденники",
          content: "Надають учням та їхнім батькам постійний доступ до всієї історії отриманих оцінок та домашніх завдань. Надають можливість аналізу успішності за тривалим періодом.",
          image: "/images/diary.webp",
        },
        {
          title: "Звіти",
          content: "Гнучкі механізми аналізу та графічного відображення навчальних досягнень учня, класу, школи, роботи вчителя.",
          image: "/images/report.webp",
        },
        {
          title: "Дистанційне навчання",
          content: "Можливості працювати дистанційно, задавати, виконувати та перевіряти роботи онлайн.",
          image: "/images/distance.webp",
        },
    ]

    return (
        <>
            <Accordion items={items} currentItem={item} setItem={setItem} classNames="w-80 sm:w-96"/>
            <Image src={items[item].image} alt="" width={648} height={424}/>
        </>
    )
}
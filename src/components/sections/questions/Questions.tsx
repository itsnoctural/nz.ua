'use client';

import { useState } from "react";
import { Accordion } from "../../accordion/Accordion"
import { ExternalLink } from "@/components/external/ExternalLink";

export const Questions = () => {
    const [item, setItem] = useState(0)

    const items = [
        {
          title: "Як почати користуватись порталом?",
          content: <>
                <b>Учні та батьки</b> можуть отримати логін і пароль у свого класного керівника або у вчителя інформатики.

                <br/>
                <br/> 

                <b>Вчителі та класні керівники</b> отримують логіни і паролі у куратора школи.
                
                <br/>
                <br/> 

                <b>Куратор школи</b> заходить на портал із тим же самим логіном та паролем, що і на портал <ExternalLink href="https://isuo.org/">ІСУО isuo.org</ExternalLink>.
            </>
        },
        {
          title: "Скільки це коштує?",
          content: "Користування порталом \"Нові Знання\" є безкоштовним як для закладів освіти, так і для батьків та учнів.",
        },
        {
          title: "Як захищена інформація?",
          content: <>Платформа має відповідний позитивний <ExternalLink href="https://isuo.org/upload/atestat.jpg">висновок</ExternalLink> (<ExternalLink href="https://www.kmu.gov.ua/npas/deyaki-pitannya-zabezpechennya-provadzhennya-gospodarskoyi-diyalnosti-v-umovah-voyennogo-stanu-314">дію подовжено до кінця війни</ExternalLink>) Держспецзв&apos;язку з комплексної системи захисту інформації (КСЗІ) — сукупність організаційних і інженерних заходів, програмно-апаратних засобів, які забезпечують захист інформації.</>
        },
        {
          title: "Чи є інструкції?",
          content: <>З переліком інструкцій та відеоуроків можна ознайомитись на сторінці <ExternalLink href="https://nz.ua/page/support">nz.ua/page/support</ExternalLink></>
        },
    ]

    return <Accordion items={items} currentItem={item} classNames="w-80 sm:w-[460px]" setItem={setItem}/>
}
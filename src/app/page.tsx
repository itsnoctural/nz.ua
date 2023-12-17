import { DownIcon } from "@/assets/icons/DownIcon";
import { Button } from "@/components/button/Button";
import { FeatureItem } from "@/components/feature/FeatureItem";
import { HowItLooks } from "@/components/sections/howitlooks/HowItLooks";
import { Navbar } from "@/components/navbar/Navbar";
import Image from "next/image";
import { Questions } from "@/components/sections/questions/Questions";
import { MailIcon } from "@/assets/icons/MailIcon";
import { Footer } from "@/components/footer/Footer";
import { Title } from "@/components/title/Title";
import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Нові знання - Електронні щоденники та журнали',
  robots: {
    index: false
  }
}

export default function Home() {
  return (
    <>
      <main className="flex flex-col items-center justify-center w-full gradient px-4 xl:px-0">
        <Navbar/>

        <div className="flex flex-col max-w-6xl gap-y-8">
          <Title classNames="text-[#090e36]">
            Електронні класні журнали та щоденники з можливостями дистанційного навчання
          </Title>

          <div className="flex-row lg:flex justify-between">
            <div className="flex flex-col items-center gap-y-6 justify-start"> 
              <Button>Реєстрація школи</Button>

              <a className="hidden lg:flex" href="#features">
                <DownIcon/>
              </a>
            </div>

            <Image src={"/images/features.webp"} width={755} height={388} priority alt=""/>
          </div>
        </div>
      </main>

      <section className="flex justify-center bg-white py-20 px-4 xl:px-0" id="features">
        <div className="flex flex-col w-full max-w-6xl gap-y-16">
          <Title classNames="text-[#090e36]">Можливості</Title>
          <div className="grid grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 gap-y-20 gap-x-32">
            <FeatureItem href={"#"} iconSrc={"/icons/report.svg"} width={48} height={60}>Звіти</FeatureItem>
            <FeatureItem href={"#"} iconSrc={"/icons/magazine.svg"} width={64} height={64}>Щоденник</FeatureItem>
            <FeatureItem href={"#"} iconSrc={"/icons/clipboard.svg"} width={64} height={64}>Відвідуваність</FeatureItem>
            <FeatureItem href={"#"} iconSrc={"/icons/homework.svg"} width={64} height={64}>Домашні завдання</FeatureItem>
            <FeatureItem href={"#"} iconSrc={"/icons/calendar.svg"} width={65} height={64}>Розклад</FeatureItem>
            <FeatureItem href={"#"} iconSrc={"/icons/webcam.svg"} width={64} height={64}>Дистанційне навчання</FeatureItem>
            <FeatureItem href={"#"} iconSrc={"/icons/diploma.svg"} width={64} height={64}>Нова Українська школа</FeatureItem>
            <FeatureItem href={"#"} iconSrc={"/icons/diagram.svg"} width={64} height={64}>Діаграми</FeatureItem>
          </div>
        </div>
      </section>

      <section className="flex justify-center bg-[#f4f8fe] py-20 px-4 xl:px-0" id="looks">
        <div className="flex flex-col w-full max-w-6xl gap-y-8 xl:gap-y-16">
            <Title classNames="text-[#090e36]">Як це виглядає</Title>
            <div className="flex-row lg:flex justify-between">
              <HowItLooks/>
            </div>
        </div>
      </section>

      <section className="flex justify-center bg-white py-20 px-4 xl:px-0">
        <div className="flex flex-col xl:flex-row w-full max-w-6xl gap-y-8 xl:gap-y-16">
            <div className="flex flex-col gap-y-12">
              <Title classNames="text-[#090e36]">Питання які часто задаються</Title>

              <a className="hidden xl:flex" href="#support">
                <DownIcon/>
              </a>
            </div>

            <div className="flex justify-between">
              <Questions/>
            </div>
        </div>
      </section>

      <section className="flex justify-center bg-black px-4 xl:px-0" id="support">
        <div className="flex-row lg:flex w-full max-w-6xl gap-y-16 justify-between">
            <div className="flex flex-col w-full lg:w-6/12 gap-y-8 xl:gap-y-16 py-20">
              <Title classNames="text-white">Залишились питання?</Title>

              <div>
                <Button colorStyles="border-white border bg-white text-black hover:bg-transparent hover:text-white">
                  <MailIcon/>
                  Надіслати питання
                </Button>
              </div>
            </div>

            <div>
              <Image src={"/images/support.webp"} width={445} height={381} alt=""/>
            </div>
        </div>
      </section>

      <Footer/>
    </>
  )
}

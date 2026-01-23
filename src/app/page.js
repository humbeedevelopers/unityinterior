"use client"
import CoreOfferings from "@/components/CoreOfferings/CoreOffering"
import CountDown from "@/components/CountDown/CountDown"
import Faqs from "@/components/FaqsSection/Faqs"
import Form from "@/components/Form/Form"
import Hero from "@/components/Hero/Hero"
import KnowledgeSpace from "@/components/KnowledgeSlider/KnowledgeSlider"
import LeadingVision from "@/components/LeadingVision/LeadingVision"
import Marquee from "@/components/Marquee/Marquee"
import NumbersSec from "@/components/NumbersSection/NumbersSec"
import TextEffect from "@/components/TextEffectSection/TextEffect"
import TruelyMatters from "@/components/TruelyMatters/TruelyMatters"
const Page = () => {
  return (
    <main>
      <Hero />
      <Marquee />
      <TextEffect />
      
      {/* <CoreOfferings /> */}
      <NumbersSec />
      <TruelyMatters />
      <LeadingVision />
      <CountDown />
      <KnowledgeSpace />
      <Form />
      <Faqs />

    </main>
  )
}

export default Page
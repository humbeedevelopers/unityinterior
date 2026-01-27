"use client"
import CoreOfferings from "@/components/CoreOfferings/CoreOffering"
import CountDown from "@/components/CountDown/CountDown"
import Experience from "@/components/ExperienceSec/Experience"
import Faqs from "@/components/FaqsSection/Faqs"
import Form from "@/components/Form/Form"
import Hero from "@/components/Hero/Hero"
import KnowledgeSpace from "@/components/KnowledgeSlider/KnowledgeSlider"
import LeadingVision from "@/components/LeadingVision/LeadingVision"
import Marquee from "@/components/Marquee/Marquee"
import NumbersSec from "@/components/NumbersSection/NumbersSec"
import ProjectSlider from "@/components/ProjectSlider/ProjectSlider"
import TextEffect from "@/components/TextEffectSection/TextEffect"
import ThreeSlider from "@/components/Threeslider/Threeslider"
import TruelyMatters from "@/components/TruelyMatters/TruelyMatters"
const Page = () => {
  return (
    <main>
      <Hero />
      <Marquee />
      <TextEffect />
      <CoreOfferings />
      <Experience />
     
      <NumbersSec />
      <TruelyMatters />
      <LeadingVision />
       
       <ThreeSlider />
      <ProjectSlider />
      <CountDown />
      <Form />
      <KnowledgeSpace />
      <Faqs />

    </main>
  )
}

export default Page
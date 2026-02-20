"use client"
import CoreOfferings from "@/components/CoreOfferings/CoreOfferingCards"
import CountDown from "@/components/CountDown/CountDown"
import Experience from "@/components/ExperienceSec/Experience"
import Faqs from "@/components/FaqsSection/Faqs"
import Form from "@/components/Form/Form"
import Hero from "@/components/Hero/Hero"
import HomeTimeline from "@/components/HomeTimeline/HomeTimeline"
import KnowledgeSpace from "@/components/KnowledgeSlider/KnowledgeSlider"
import LeadingVision from "@/components/LeadingVision/LeadingVision"
import Marquee from "@/components/Marquee/Marquee"
import NumbersSec from "@/components/NumbersSection/NumbersSec"
import ProjectSlider from "@/components/ProjectSlider/ProjectSlider"
import TextEffect from "@/components/TextEffectSection/TextEffect"
import ThreeSlider from "@/components/Threeslider/Threeslider"
import TruelyMatters from "@/components/TruelyMatters/TruelyMatters"
// import Stairs from "@/animations/Stairs/index"
const Page = () => {
  return (
    <main>
      {/* <Stairs /> */}
      <Hero />
      <Marquee />
      <TextEffect />
      <Experience />
      <CoreOfferings />
      <HomeTimeline />
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

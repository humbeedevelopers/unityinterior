"use client"
import CoreOfferings from "@/components/CoreOfferings/CoreOfferingCards"
import CountDown from "@/components/CountDown/CountDown"
import Experience from "@/components/ExperienceSec/Experience"
import Faqs from "@/components/FaqsSection/Faqs"
import Form from "@/components/Form/Form"
import Hero from "@/components/Hero/Hero"
import HomeCards from "@/components/HomeCards/HomeCards"
import Formula from "@/components/HomeFormula/Formula"
import HomeTimeline from "@/components/HomeTimeline/HomeTimeline"
import KnowledgeSpace from "@/components/KnowledgeSlider/KnowledgeSlider"
import LeadingVision from "@/components/LeadingVision/LeadingVision"
import Marquee from "@/components/Marquee/Marquee"
import NumbersSec from "@/components/NumbersSection/NumbersSec"
import ProjectSlider from "@/components/ProjectSlider/ProjectSlider"
// import TestimonialSlider from "@/components/TestimonialSlider/TestimonialSlider"
import TextEffect from "@/components/TextEffectSection/TextEffect"
import ThreeSlider from "@/components/Threeslider/Threeslider"
import TruelyMatters from "@/components/TruelyMatters/TruelyMatters"
const Page = () => {
  return (
    <main>
      <Hero />
      {/* <TestimonialSlider /> */}
      <Marquee />
      <TextEffect />
      <Experience />
     
      
       <CoreOfferings />
       <HomeTimeline />
      {/* <Formula /> */}

      {/* <HomeCards
        heading="During Execution"
        cards={[
          {
            title: <>Co<br />ordination</>,
            description:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          },
          {
            title: <>Site<br />Visits</>, 
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          },
          {
            title: <>Material<br />Selection</>,
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          },
          {
            title: <>Artefact<br />Selection</>,
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          },
        ]}
      /> */}
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

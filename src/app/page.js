"use client"
import CoreOfferings from "@/components/CoreOfferings/CoreOffering"
import CountDown from "@/components/CountDown/CountDown"
import Hero from "@/components/Hero/Hero"
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
      <CountDown />

    </main>
  )
}

export default Page
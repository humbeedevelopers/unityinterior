"use client"
import CoreOfferings from "@/components/CoreOfferings/CoreOffering"
import Marquee from "@/components/Marquee/Marquee"
import NumbersSec from "@/components/NumbersSection/NumbersSec"
import TextEffect from "@/components/TextEffectSection/TextEffect"
const Page = () => {
  return (
    <main>
      
      <Marquee />
      <TextEffect />
      
      <CoreOfferings />
      <NumbersSec />

    </main>
  )
}

export default Page
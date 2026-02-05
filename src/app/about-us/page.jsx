"use client"
import { useEffect } from "react";
import Image from "next/image";
import ImgMain from "@/images/AboutTabImg.png";
import StoryBanner from "@/images/AboutStory.png";
// import Hero from "@/components/Hero/Hero"
import CountDown from "@/components/CountDown/CountDown"
import Faqs from "@/components/FaqsSection/Faqs"
import Form from "@/components/Form/Form"
import LeadingVision from "@/components/LeadingVision/LeadingVision"
import TestimonialSlider from "@/components/TestimonialSlider/TestimonialSlider"
import ThreeSlider from "@/components/Threeslider/Threeslider"
import HeroAbout from "@/components/HeroAbout/HeroAbout";
import AboutTab from "@/components/AboutUsTab/AboutTab";
import AboutStory from "@/components/AboutUsStory/AboutStory";
import AboutUsMasterpiece from "@/components/AboutUsMasterpiece/AboutUsMasterpiece";

const AboutUs = () => {
    useEffect(() => {
        document.title =
            "About Us | Unity Interior";
    });
    return (
        <div>
            <HeroAbout />
            <AboutStory
                title="OUR STORY"
                paragraphs={[
                    'We started the journey in 2018 with an idea to provide best interior designing and architectural services.In 2021, we achieved an milestone as Unity Interiors named as Top Creative and Design Companies Globally.',
                    'We have done tremendous work in 3 BHK and 4 BHK interior designing. We have designed, built and design interior of apartments, villas and very short span we have designed couple of offices Pan India.'
                ]}
                imageSrc={StoryBanner}
                imageAlt="About story image"
                showKnowMore
                onKnowMore={() => console.log('Know more clicked')}
            />
            <AboutTab
                title="LOREM IPSUM IS SIMPLY DUMMY TEXT OF THE PRINTING AND"
                tabs={[
                    {
                        label: 'MISSION',
                        heading: 'Mission Statement',
                        description:
                            'At here, our mission is to become a leading architectural firm in creative design solutions that resolve our clients’ social, environmental & economic needs. Leading not in terms of doing bigger projects, it is always about helping more and more individuals.',
                        image: ImgMain,
                    },
                    {
                        label: 'VISION',
                        heading: 'Vision Statement',
                        description:
                            'At here, our mission is to become a leading architectural firm in creative design solutions that resolve our clients’ social, environmental & economic needs. Leading not in terms of doing bigger projects, it is always about helping more and more individuals.',
                        image: ImgMain,
                    },
                    {
                        label: 'VALUES',
                        heading: 'Our Core Values',
                        description:
                            'At here, our mission is to become a leading architectural firm in creative design solutions that resolve our clients’ social, environmental & economic needs. Leading not in terms of doing bigger projects, it is always about helping more and more individuals.',
                        image: ImgMain,
                    },
                ]}
            />
            <TestimonialSlider />
            
            {/* <AboutUsMasterpiece /> */}
            <CountDown />
            <ThreeSlider />
            <Form />
            <Faqs />

        </div>
    )
}
export default AboutUs;
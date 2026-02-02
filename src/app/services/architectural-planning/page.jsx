"use client"
import { useEffect } from "react";
import Image from "next/image";
import ImgMain from "@/images/Heroservice.png";
import HoverImage from "@/images/hoveredimg.png";
// import Hero from "@/components/Hero/Hero"
import CountDown from "@/components/CountDown/CountDown"
import Faqs from "@/components/FaqsSection/Faqs"
import Form from "@/components/Form/Form"
import TestimonialSlider from "@/components/TestimonialSlider/TestimonialSlider"
import ThreeSlider from "@/components/Threeslider/Threeslider"
import ServiceDetails from "@/components/ServiceDetails/ServiceDetails";
import HeroService from "@/components/HeroService/HeroService";
import HomeCards from "@/components/HomeCards/HomeCards";
import ServiceHoverCards from "@/components/ServiceHoverCards/ServiceHoverCards";

const InteriorDesign = () => {
    useEffect(() => {
        document.title =
            "Architectural Planning | Unity Interior";
    });
    return (
        <div>
            <HeroService
                title="Architectural Planning service"
                description="Lorem ipsum is simply dummy text of the printing and typesetting industry."
                image={ImgMain}
            />
            <ServiceDetails
                title="Service Details"
                primaryDescription="Unity Interiors offers comprehensive Architectural Planning services to bring your vision of a perfect space to life. With our expertise in architectural design and meticulous attention to detail, we ensure that every aspect of your project is carefully considered and thoughtfully executed."
                secondaryDescription="Our architectural planning process begins with a deep understanding of your goals, requirements, and aesthetic preferences. Our team of experienced architects collaborates closely with you to develop a design concept that aligns with your vision. We meticulously analyze the available space, taking into account factors such as site conditions, building regulations, and functionality."
            />
            <HomeCards
                heading="Why Choose Us?"
                cards={[
                    {
                        title: "Expertise and Experience",
                        description:
                            "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",

                    },
                    {
                        title: "Tailored Designs",
                        description: "We deliver projects without delays or hidden costs.",
                    },
                    {
                        title: "Attention to Detail",
                        description: "Our team consists of experienced industry experts.",
                    },
                    {
                        title: "Collaborative Approach",
                        description: "Your success is our priority.",
                    },
                ]}
            />
            <ServiceHoverCards
                title="Lorem Ipsum Is Simply Dummy Text Of The Printing And"
                description="We have done tremendous work in 3 BHK and 4 BHK interior designing. We have designed, built and design interior of bungalows as well. Over a very short span, we have designed couple of offices in Pan India. Take a look at projects we have done."
                imageSrc={HoverImage}
                imageSrc1={HoverImage}
                buttonText="Contact Us"
                onButtonClick={() => console.log("CTA Clicked")}
            />
            <ThreeSlider />
            <TestimonialSlider />
            <CountDown />
            <Form />
            <Faqs />

        </div>
    )
}
export default InteriorDesign;
"use client"
import { useEffect } from "react";
import Image from "next/image";
import ImgMain from "@/images/Heroservice.png";
// import Hero from "@/components/Hero/Hero"
import CountDown from "@/components/CountDown/CountDown"
import Faqs from "@/components/FaqsSection/Faqs"
import Form from "@/components/Form/Form"
import TestimonialSlider from "@/components/TestimonialSlider/TestimonialSlider"
import ThreeSlider from "@/components/Threeslider/Threeslider"
import ServiceDetails from "@/components/ServiceDetails/ServiceDetails";
import HeroService from "@/components/HeroService/HeroService";
import HomeCards from "@/components/HomeCards/HomeCards";

const InteriorDesign = () => {
    useEffect(() => {
        document.title =
            "Interior Design | Unity Interior";
    });
    return (
        <div>
            <HeroService
                title="Interior Design Service"
                description="Lorem ipsum is simply dummy text of the printing and typesetting industry."
                image={ImgMain}
            />
            <ServiceDetails
                title="Service Details"
                primaryDescription="Unity Interiors offers exceptional interior design services, tailored to meet the unique needs and preferences of our clients. With a commitment to creativity, functionality, and attention to detail, we transform spaces into stunning and personalized environments that inspire and delight."
                secondaryDescription="We have done tremendous work in 3 BHK and 4 BHK interior designing. We have designed, built and design interior of bungalows as well. Over a very short span, we have designed couple of offices in Pan India. Take a look at projects we have done."
            />
            <HomeCards
                heading="Why Choose Us?"
                cards={[
                    {
                        title: "Functional Design Approach",
                        description:
                            "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
                       
                    },
                    {
                        title: "On Time and On Budget",
                        description: "We deliver projects without delays or hidden costs.",
                    },
                    {
                        title: "Highly Professional Staff",
                        description: "Our team consists of experienced industry experts.",
                    },
                    {
                        title: "Real Focus on Satisfaction",
                        description: "Your success is our priority.",
                    },
                ]}
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
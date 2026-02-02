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
            "3d Visualization | Unity Interior";
    });
    return (
        <div>
            <HeroService
                title="3D Visualization service"
                description="Lorem ipsum is simply dummy text of the printing and typesetting industry."
                image={ImgMain}
            />
            <ServiceDetails
                title="Service Details"
                primaryDescription="Unity Interiors provides top-notch 3D visualization services to bring your design concepts to life with stunning realism. Our team of skilled 3D artists and designers utilizes advanced software and techniques to create immersive visualizations that allow you to fully envision your project."
                secondaryDescription="With our 3D visualization services, you can explore and evaluate your designs from every angle before they are brought to reality. Our photorealistic renders capture the finest details, textures, and lighting, giving you a true-to-life representation of your envisioned space."
            />
            <HomeCards
                heading="Why Choose Us?"
                cards={[
                    {
                        title: "Financial Responsibility to Our Clients",
                        description:
                            "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",

                    },
                    {
                        title: "Highly professional staff",
                        description: "We deliver projects without delays or hidden costs.",
                    },
                    {
                        title: "Quality and Value to the Projects We Deliver",
                        description: "Our team consists of experienced industry experts.",
                    },
                    {
                        title: "Following the global design tendency.",
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
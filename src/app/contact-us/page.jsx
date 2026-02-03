"use client"
import { useEffect } from "react";
import Image from "next/image";
import ImgMain from "@/images/Heroservice.png";
import HeroAbout from "@/components/HeroAbout/HeroAbout";
import ContactUsInfo from "@/components/ContactUsInfo/ContactUsInfo";
import ContactUsMap from "@/components/ContactUsMap/ContactUsMap";
import HeroService from "@/components/HeroService/HeroService";

const AboutUs = () => {
    useEffect(() => {
        document.title =
            "Contact Us | Unity Interior";
    });
    return (
        <div>
            <HeroService
                title="Contact Us"
                description="Lorem ipsum is simply dummy text of the printing and typesetting industry."
                image={ImgMain}
            />
            <ContactUsInfo />
            <ContactUsMap />

        </div>
    )
}
export default AboutUs;
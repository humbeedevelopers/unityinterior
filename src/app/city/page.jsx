"use client"
import { useEffect } from "react";
import Image from "next/image";
import ImgMain from "@/images/Heroservice.png";
import ContactUsMap from "@/components/ContactUsMap/ContactUsMap"
// import HeroService from "@/components/HeroService/HeroService";
import ContactUsHero from "@/components/ContactUsHero/ContactUsHero";
import CityHero from "@/components/CityHero/CityHero";
import Form from "@/components/Form/Form";
import Formula from "@/components/HomeFormula/Formula";
import CityInfo from "@/components/CityInfo/CityInfo";

const CityPages = () => {
    useEffect(() => {
        document.title =
            "City | Unity Interior";
    });
    return (
        <div>
            <CityHero />
            <CityInfo />
            <Formula />
            <Form />

        </div>
    )
}
export default CityPages;
// "use client"
// import { useEffect } from "react";
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


export const metadata = {
    title: "3d Visualization | Unity Interior",
};
async function getHomePageData() {
    const res = await fetch(
        "https://unityinteriorsadmin.humbeestudio.xyz/wp-json/wp/v2/pages?slug=home&acf_format=standard",
        // { cache: "no-store" } // or revalidate: 60
        { next: { revalidate: 60 } }
    );

    if (!res.ok) {
        throw new Error("Failed to fetch homepage data");
    }

    const data = await res.json();
    return data[0];
}
async function getMediaById(id) {
    const res = await fetch(
        `https://unityinteriorsadmin.humbeestudio.xyz/wp-json/wp/v2/media/${id}`,
        // { cache: "no-store" }
    );

    if (!res.ok) return null;

    const media = await res.json();
    return media.source_url;
}

async function getFaqs() {

    const res = await fetch(
        "https://unityinteriorsadmin.humbeestudio.xyz/wp-json/wp/v2/faqs?acf_format=standard",
        { next: { revalidate: 60 } }
    );

    if (!res.ok) {
        throw new Error("Failed to fetch FAQs");
    }

    return res.json();
}
export default async function Visualization() {
    const pageData = await getHomePageData();
    const faqs = await getFaqs();
    // const InteriorDesign = () => {
    const acf = pageData?.acf || {};
    const countdownRaw = pageData?.acf?.countdown_section;

    const countdownData = {
        heading: countdownRaw?.heading,
        subHeading: countdownRaw?.sub_heading,
        stats: [
            countdownRaw?.stat_1,
            countdownRaw?.stat_2,
            countdownRaw?.stat_3,
        ].filter(Boolean),
    };
    // ===============================
    // THREE SLIDER DATA
    // ===============================

    const threeSliderRaw = acf?.three_slider_section || {};

    const threeSliderHeading = threeSliderRaw?.section_heading;
    const threeSliderSubHeading = threeSliderRaw?.section_sub_heading;

    const threeSlides = [];

    for (const [key, value] of Object.entries(threeSliderRaw)) {
        if (key.startsWith("slide_") && typeof value === "object") {
            let imageUrl = "";

            // Case 1: Image Array
            if (typeof value.image === "object" && value.image?.url) {
                imageUrl = value.image.url;
            }

            // Case 2: Image ID
            if (typeof value.image === "number") {
                imageUrl = await getMediaById(value.image);
            }

            if (imageUrl && value.title) {
                threeSlides.push({
                    id: threeSlides.length + 1,
                    image: imageUrl,
                    title: value.title,
                    desc: value.description,
                });
            }
        }
    }


    const testimonialRaw = acf?.testimonial_section || {};
    const testimonials = [];

    for (const [key, item] of Object.entries(testimonialRaw)) {
        if (!item?.client_name) continue;

        let imageUrl = "";

        // If ACF return format = Image Array
        if (typeof item.client_image === "object" && item.client_image?.url) {
            imageUrl = item.client_image.url;
        }

        // If ACF return format = Image ID
        if (typeof item.client_image === "number") {
            imageUrl = await getMediaById(item.client_image);
        }

        testimonials.push({
            id: testimonials.length + 1,
            description: item.client_description,
            name: item.client_name,
            location: item.client_location,
            image: imageUrl || null,
        });
    }
    return (
        <div>
            <HeroService
                title="3D Visualization service"
                description="Photorealistic renders that let you see, feel, and refine your space — long before it's ever built."
                image={ImgMain}
            />
            <ServiceDetails
                title="Service Details"
                primaryDescription="Unity Interiors provides top-notch 3D visualization services to bring your design concepts to life with stunning realism. Our team of skilled 3D artists and designers uses advanced software and techniques to create immersive visualizations that let you fully envision your project — from layout and lighting to textures and finishes"
                secondaryDescription="With our 3D visualization services, you can explore and evaluate your design from every angle before it's brought to reality. Our photorealistic renders capture the finest details — textures, lighting, materials, and proportions — giving you a true-to-life representation of your envisioned space and the confidence to make decisions before execution begins"
            />
            <ServiceHoverCards
                title="Ready To Transform Your Space?"
                description="From residential homes to commercial spaces, we've planned and designed projects of every scale — each grounded in functionality and brought to life with creative precision. Our work spans bungalows, apartments, and offices across India. Take a look at the projects we've shaped, planned, and proudly delivered"
                imageSrc={HoverImage}
                imageSrc1={HoverImage}
                buttonText="We've created photorealistic 3D visualizations for 3 BHK and 4 BHK apartments, luxury bungalows, and commercial offices across India. From concept renders to walkthroughs, our work helps clients experience their spaces before they're built. Take a look at the projects we've brought to life in stunning detail"
            // onButtonClick={() => console.log("CTA Clicked")}
            />
            <HomeCards
                heading="Why Choose Us?"
                cards={[
                    {
                        title: "Financial Responsibility to Our Clients",
                        description:
                            "We treat your budget like our own — delivering high-quality 3D visualization services with full transparency, fair pricing, and zero hidden costs at every stage",

                    },
                    {
                        title: "Highly professional staff",
                        description: "Our team of skilled 3D artists and visualizers brings technical precision and creative vision — turning your design ideas into renders that feel real, refined, and ready",
                    },
                    {
                        title: "Quality and Value to the Projects We Deliver",
                        description: "Every render we deliver is held to a higher standard — sharp detail, accurate lighting, and lifelike finishes that add real value to your design decisions",
                    },
                    {
                        title: "Following the global design tendency.",
                        description: "YWe stay current with global design and visualization trends — using the latest tools, techniques, and styles to keep our work modern, refined, and world-class",
                    },
                ]}
            />

            <ThreeSlider
                // heading={threeSliderHeading}
                // subHeading={threeSliderSubHeading}
                slides={threeSlides}
            />
            <TestimonialSlider testimonials={testimonials} />
            <CountDown data={countdownData} />
            <Form />
            <Faqs faqs={faqs} />

        </div>
    )
}
// export default InteriorDesign;
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
    title: "Architectural Planning | Unity Interior",
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
export default async function ArchitecturalPlanning() {
    const pageData = await getHomePageData();
    const faqs = await getFaqs();
    const acf = pageData?.acf || {};
    // const ArchitecturalPlanning = () => {
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
                title="Architectural Planning service"
                description="Thoughtful planning that lays the foundation for spaces designed to live, work, and grow beautifully with you"
                image={ImgMain}
            />
            <ServiceDetails
                title="Service Details"
                primaryDescription="Unity Interiors offers comprehensive architectural planning services that bring your vision of a perfect space to life. With deep expertise in design and a meticulous eye for detail, we ensure every aspect of your project is carefully considered, intentionally crafted, and thoughtfully executed from start to finish"
                secondaryDescription="Our architectural planning process begins with a deep understanding of your goals, requirements, and aesthetic preferences. Our team of experienced architects collaborates closely with you to develop a design concept that aligns with your vision. We carefully analyse the available space — considering site conditions, building regulations, and functionality — to create plans that are both practical and beautifully resolved"
            />
            <ServiceHoverCards
                title="Ready To Transform Your Space?"
                description="Our team brings years of experience in architectural planning and design, ensuring that every project is executed with the highest level of professionalism and skill."
                imageSrc={HoverImage}
                imageSrc1={HoverImage}
                buttonText="From residential homes to commercial spaces, we've planned and designed projects of every scale — each grounded in functionality and brought to life with creative precision. Our work spans bungalows, apartments, and offices across India. Take a look at the projects we've shaped, planned, and proudly delivered."
            // onButtonClick={() => console.log("CTA Clicked")}
            />
            <HomeCards
                heading="Why Choose Us?"
                cards={[
                    {
                        title: "Expertise and Experience",
                        description:
                            "Backed by over a decade of hands-on experience, our team brings deep architectural knowledge, refined judgement, and proven expertise to every project we take on",
                    },
                    {
                        title: "Tailored Designs",
                        description: "Every plan we create is shaped around you — your space, your lifestyle, and your goals. No templates, no shortcuts, just thoughtful design built around your needs",
                    },
                    {
                        title: "Attention to Detail",
                        description: "From the largest layout to the smallest dimension, we obsess over the details — because precision in planning is what makes great architecture feel effortless",
                    },
                    {
                        title: "Collaborative Approach",
                        description: "We design with you, not just for you. Our process is built on open communication, shared ideas, and a partnership that lasts from the first sketch to the final handover",
                    }
                ]}
            />

            <ThreeSlider
                // heading={threeSliderHeading}
                // subHeading={threeSliderSubHeading}
                slides={threeSlides}
            />
            <TestimonialSlider testimonials={testimonials}/>
            <CountDown data={countdownData} />
            <Form />
            <Faqs faqs={faqs} />

        </div>
    )
}
// export default InteriorDesign;
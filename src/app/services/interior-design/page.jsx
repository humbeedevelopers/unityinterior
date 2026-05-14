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
import Formula from "@/components/HomeFormula/Formula";
import RelatedProjectSlider from "@/components/RelatedProjectSlider/RelatedProjectSlider";


export const metadata = {
    title: "Interior Design | Unity Interior",
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


// related project slider 
async function getRelatedProjects() {
    const res = await fetch(
        "https://unityinteriorsadmin.humbeestudio.xyz/wp-json/wp/v2/projects?acf_format=standard&per_page=100",
        // https://unityinteriorsadmin.humbeestudio.xyz/wp-json/wp/v2/projects?project_category_slug=interior-design&acf_format=standard&per_page=100
        { next: { revalidate: 60 } }
    );

    if (!res.ok) {
        throw new Error("Failed to fetch projects");
    }

    const data = await res.json();

    return data.map((p) => {
        const mainImage =
            p.acf?.project_images?.main_image?.url ||
            p.acf?.main_image?.url ||
            "";

        return {
            id: p.id,
            slug: p.slug,
            title: p.title?.rendered || "",
            location: p.acf?.project_location || "",
            image: mainImage,
        };
    });
}
// async function getMediaById(id) {
//      console.log("Fetching media ID:", id);

//     const res = await fetch(
//         `https://unityinteriorsadmin.humbeestudio.xyz/wp-json/wp/v2/media/${id}`,
//         // { cache: "no-store" }
//     );

//     if (!res.ok) return null;

//     const media = await res.json();
//      console.log("Media URL:", media.source_url);
//     return media.source_url;
// }


async function getMediaById(id) {
    //   console.log("Fetching media ID:", id);

    const res = await fetch(
        `https://unityinteriorsadmin.humbeestudio.xyz/wp-json/wp/v2/media/${id}`
    );

    if (!res.ok) {
        // console.log("Media fetch failed:", id);
        return null;
    }

    const media = await res.json();
    //   console.log("Media URL:", media.source_url);

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


export default async function InteriorDesign() {
    const pageData = await getHomePageData();
    const faqs = await getFaqs();
    const relatedProjects = await getRelatedProjects();
    console.log("RELATED PROJECTS LENGTH:", relatedProjects.length);
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
    // console.log("TESTIMONIALS DEBUG:");
    // testimonials.forEach((t, i) => {
    //     console.log(`Testimonial ${i + 1}:`, {
    //         name: t.name,
    //         image: t.image,
    //     });
    // });

    // const InteriorDesign = ({ relatedProjects }) => {
    // useEffect(() => {   
    //     document.title =
    //         "Interior Design | Unity Interior";
    // });
    return (
        <div>
            <HeroService
                title="Interior Design Service"
                description="Each space we design is a reflection of thoughtful planning and personal understanding, created to feel right, function well, and stand the test of time."
                image={ImgMain}
            />
            <ServiceDetails
                title="Service Details"
                primaryDescription="At Unity Interiors, we craft interiors that are as functional as they are beautiful. Tailored to suit how you live, work, and unwind, our designs blend creativity, comfort, and detail — transforming everyday spaces into personalised environments that feel honest, inspiring, and unmistakably yours."
                secondaryDescription="With extensive experience designing 3 BHK and 4 BHK apartments, luxury bungalows, and commercial offices across India, we've shaped a wide range of spaces — each delivered with care, precision, and a sharp eye for detail. Explore our work to see the difference design intent makes."
            />
            <ServiceHoverCards
                title="Ready To Transform Your Space?"
                description="From compact apartments to expansive bungalows, our team has shaped homes that reflect the people who live in them. Every space we design is built around your lifestyle, your taste, and the way you want to feel at home."
                imageSrc={HoverImage}
                imageSrc1={HoverImage}
                buttonText="Whether you're starting from scratch or reimagining an existing space, we're here to guide you through every step — from the first idea to the final reveal. Get in touch and let's create something timeless together."
            // onButtonClick={() => console.log("CTA Clicked")}
            />
            <HomeCards
                heading="Why Choose Us?"
                cards={[
                    {
                        title: "Functional Design Approach",
                        description:
                            "We design for the way you actually live. Every layout, finish, and detail is chosen with purpose — balancing beauty with everyday practicality",
                    },
                    {
                        title: "On Time and On Budget",
                        description: "We respect your time and investment. Our projects are delivered on schedule and within budget, with full transparency at every stage",
                    },
                    {
                        title: "Highly Professional Staff",
                        description: "Our team of designers, planners, and craftsmen bring years of experience, sharp attention to detail, and a deep commitment to quality",
                    },
                    {
                        title: "Real Focus on Satisfaction",
                        description: "Your happiness defines our success. We listen, refine, and deliver spaces you'll love living in — long after the project is complete",
                    },
                ]}
            />
            <Formula />



            <ThreeSlider
                // heading={threeSliderHeading}
                // subHeading={threeSliderSubHeading}
                slides={threeSlides}
            />
            <TestimonialSlider
                testimonials={testimonials}
            />
            <RelatedProjectSlider
                projects={relatedProjects}
            />
            {/* <TestimonialSlider /> */}
            <CountDown data={countdownData} />
            <Form />
            <Faqs faqs={faqs} />

        </div>
    )
}
// export default InteriorDesign;   
// "use client"
// import { useEffect } from "react";
import Image from "next/image";
import ImgMain from "@/images/AboutTabImg.png";
import ImgHero from "@/images/Heroservice.png";
import StoryBanner from "@/images/AboutStory.png";
import CountDown from "@/components/CountDown/CountDown"
import Faqs from "@/components/FaqsSection/Faqs"
import Form from "@/components/Form/Form"
import TestimonialSlider from "@/components/TestimonialSlider/TestimonialSlider"
import ThreeSlider from "@/components/Threeslider/Threeslider"
import HeroAbout from "@/components/HeroAbout/HeroAbout";
import AboutTab from "@/components/AboutUsTab/AboutTab";
import AboutStory from "@/components/AboutUsStory/AboutStory";
import AboutUsMasterpiece from "@/components/AboutUsMasterpiece/AboutUsMasterpiece";
import HeroService from "@/components/HeroService/HeroService";

export const metadata = {
    title: "About Us | Unity Interior",
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

// const AboutUs = () => {
export default async function AboutUs() {
    const pageData = await getHomePageData();
    const acf = pageData?.acf || {};
    const faqs = await getFaqs();

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
    // useEffect(() => {
    //     document.title =
    //         "About Us | Unity Interior";
    // });

    const threeSliderRaw = acf?.three_slider_section || {};

    // const threeSliderHeading = threeSliderRaw?.section_heading;
    // const threeSliderSubHeading = threeSliderRaw?.section_sub_heading;

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
            {/* <HeroAbout /> */}
            <HeroService
                title="About US"
                description="Lorem ipsum is simply dummy text of the printing and typesetting industry."
                image={ImgHero}
            />
            <AboutStory
                title="THE STORY BEHIND UNITY INTERIORS"
                paragraphs={[
                    'We started the journey in 2018 with an idea to provide best interior designing and architectural services.In 2021, we achieved an milestone as Unity Interiors named as Top Creative and Design Companies Globally.',
                    'We have done tremendous work in 3 BHK and 4 BHK interior designing. We have designed, built and design interior of apartments, villas and very short span we have designed couple of offices Pan India.'
                ]}
                imageSrc={StoryBanner}
                imageAlt="About story image"
                showKnowMore
            // onKnowMore={() => console.log('Know more clicked')}
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
            <TestimonialSlider testimonials={testimonials} />

            <AboutUsMasterpiece />
            <CountDown data={countdownData} />
            <ThreeSlider
                // heading={threeSliderHeading}
                // subHeading={threeSliderSubHeading}
                slides={threeSlides}
            />
            <Form actionWord="BUILD" />
            <Faqs faqs={faqs} />

        </div>
    )
}
// export default AboutUs;
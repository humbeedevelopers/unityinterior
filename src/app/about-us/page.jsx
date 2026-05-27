import CountDown from "@/components/CountDown/CountDown";
import Faqs from "@/components/FaqsSection/Faqs";
import Form from "@/components/Form/Form";
import TestimonialSlider from "@/components/TestimonialSlider/TestimonialSlider";
import ThreeSlider from "@/components/Threeslider/Threeslider";
import HeroService from "@/components/HeroService/HeroService";
import AboutTab from "@/components/AboutUsTab/AboutTab";
import AboutStory from "@/components/AboutUsStory/AboutStory";
import AboutUsMasterpiece from "@/components/AboutUsMasterpiece/AboutUsMasterpiece";

export const metadata = {
    title: "About Us | Unity Interior",
};

// ─── Data fetchers ────────────────────────────────────────────────────────────

async function getAboutPageData() {
    const res = await fetch(
        "https://websiteadmin.unityinteriors.com/wp-json/wp/v2/about-us-page?slug=about-us&acf_format=standard",
        { next: { revalidate: 60 } }
    );
    if (!res.ok) throw new Error("Failed to fetch about page data");
    const data = await res.json();
    return data[0] ?? null;
}

async function getHomePageData() {
    const res = await fetch(
        "https://websiteadmin.unityinteriors.com/wp-json/wp/v2/pages?slug=home&acf_format=standard",
        { next: { revalidate: 60 } }
    );
    if (!res.ok) throw new Error("Failed to fetch homepage data");
    const data = await res.json();
    return data[0];
}

async function getMediaById(id) {
    if (!id) return null;
    if (typeof id === "object") return id?.url ?? null;
    if (typeof id === "string") {
        if (id.startsWith("http")) return id;
    }
    const res = await fetch(
        `https://websiteadmin.unityinteriors.com/wp-json/wp/v2/media/${id}`
    );
    if (!res.ok) return null;
    const media = await res.json();
    return media.source_url ?? null;
}

async function getFaqs() {
    const res = await fetch(
        "https://websiteadmin.unityinteriors.com/wp-json/wp/v2/faqs?acf_format=standard",
        { next: { revalidate: 60 } }
    );
    if (!res.ok) throw new Error("Failed to fetch FAQs");
    return res.json();
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default async function AboutUs() {
    const [aboutData, homeData, faqs] = await Promise.all([
        getAboutPageData(),
        getHomePageData(),
        getFaqs(),
    ]);

    const acf = aboutData?.acf || {};
    const homeAcf = homeData?.acf || {};

    // Resolve all media IDs in parallel
    const [
        heroImageUrl,
        storyImageUrl,
        missionImageUrl,
        visionImageUrl,
        valueImageUrl,
        ektaImageUrl,
    ] = await Promise.all([
        getMediaById(acf.hero_image),
        getMediaById(acf.story_behind_unity_image),
        getMediaById(acf.mission_statement_image),
        getMediaById(acf.vision_statement_image),
        getMediaById(acf.value_statement_image),
        getMediaById(acf.ekta_image_section_image),
    ]);

    // Countdown (from home page)
    const countdownRaw = homeAcf?.countdown_section;
    const countdownData = {
        heading: countdownRaw?.heading,
        subHeading: countdownRaw?.sub_heading,
        stats: [countdownRaw?.stat_1, countdownRaw?.stat_2, countdownRaw?.stat_3].filter(Boolean),
    };

    // Three Slider (from home page)
    const threeSliderRaw = homeAcf?.three_slider_section || {};
    const threeSlides = [];
    for (const [key, value] of Object.entries(threeSliderRaw)) {
        if (key.startsWith("slide_") && typeof value === "object") {
            const imageUrl = typeof value.image === "object"
                ? value.image?.url
                : await getMediaById(value.image);
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

    // Testimonials (from home page)
    const testimonialRaw = homeAcf?.testimonial_section || {};
    const testimonials = [];
    for (const [, item] of Object.entries(testimonialRaw)) {
        if (!item?.client_name) continue;
        const imageUrl = typeof item.client_image === "object"
            ? item.client_image?.url
            : await getMediaById(item.client_image);
        testimonials.push({
            id: testimonials.length + 1,
            description: item.client_description,
            name: item.client_name,
            location: item.client_location,
            image: imageUrl || null,
        });
    }

    // Mission / Vision / Values tabs
    const tabs = [
        {
            label: "MISSION",
            heading: "Mission Statement",
            description: acf.mission_statement,
            image: missionImageUrl,
        },
        {
            label: "VISION",
            heading: "Vision Statement",
            description: acf.vision_statement,
            image: visionImageUrl,
        },
        {
            label: "VALUES",
            heading: "Our Core Values",
            description: acf.value_statement,
            image: valueImageUrl,
        },
    ].filter((t) => t.image);

    return (
        <div>
            <HeroService
                title={acf.page_header || "About Us"}
                description={acf.short_description}
                image={heroImageUrl}
            />
            <AboutStory
                title="THE STORY BEHIND UNITY INTERIORS"
                paragraphs={[
                    acf.story_behind_unity_para_1,
                    acf.story_behind_unity_para_2,
                ].filter(Boolean)}
                imageSrc={storyImageUrl}
                imageAlt="The story behind Unity Interiors"
                showKnowMore
            />
            {tabs.length > 0 && (
                <AboutTab
                    title={acf.misssion_vision_section_header}
                    tabs={tabs}
                />
            )}
            <TestimonialSlider testimonials={testimonials} />
            <AboutUsMasterpiece
                firstWord={acf.ekta_image_section_first_word}
                titlePart1={acf.ekta_image_section_second_word_part_1}
                titlePart2={acf.ekta_image_section_second_word_part_2}
                description={acf.ekta_image_section_short_para}
                image={ektaImageUrl}
            />
            <CountDown data={countdownData} />
            <ThreeSlider slides={threeSlides} />
            <Form actionWord="BUILD" />
            <Faqs faqs={faqs} />
        </div>
    );
}

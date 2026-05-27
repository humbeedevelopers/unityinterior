import CountDown from "@/components/CountDown/CountDown";
import Faqs from "@/components/FaqsSection/Faqs";
import Form from "@/components/Form/Form";
import TestimonialSlider from "@/components/TestimonialSlider/TestimonialSlider";
import ThreeSlider from "@/components/Threeslider/Threeslider";
import ServiceDetails from "@/components/ServiceDetails/ServiceDetails";
import HeroService from "@/components/HeroService/HeroService";
import HomeCards from "@/components/HomeCards/HomeCards";
import ServiceHoverCards from "@/components/ServiceHoverCards/ServiceHoverCards";
import Formula from "@/components/HomeFormula/Formula";
import RelatedProjectSlider from "@/components/RelatedProjectSlider/RelatedProjectSlider";

export const metadata = {
    title: "Interior Design | Unity Interior",
};

// ─── Data fetchers ────────────────────────────────────────────────────────────

async function getServicePageData() {
    const res = await fetch(
        "https://websiteadmin.unityinteriors.com/wp-json/wp/v2/service-pages?slug=interior-design-service&acf_format=standard",
        { next: { revalidate: 60 } }
    );
    if (!res.ok) throw new Error("Failed to fetch service page data");
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
        // ACF "Image URL" fields return the URL directly
        if (id.startsWith("http")) return id;
    }
    const res = await fetch(
        `https://websiteadmin.unityinteriors.com/wp-json/wp/v2/media/${id}`
    );
    if (!res.ok) return null;
    const media = await res.json();
    return media.source_url ?? null;
}

async function getRelatedProjects() {
    const res = await fetch(
        "https://websiteadmin.unityinteriors.com/wp-json/wp/v2/projects?project_category_slug=interior-design&acf_format=standard&per_page=100",
        { next: { revalidate: 60 } }
    );
    if (!res.ok) throw new Error("Failed to fetch projects");
    const data = await res.json();
    return data.map((p) => ({
        id: p.id,
        slug: p.slug,
        title: p.title?.rendered || "",
        location: p.acf?.project_location || "",
        image: p.acf?.project_images?.main_image?.url || p.acf?.main_image?.url || "",
    }));
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

export default async function InteriorDesign() {
    const [serviceData, homeData, relatedProjects, faqs] = await Promise.all([
        getServicePageData(),
        getHomePageData(),
        getRelatedProjects(),
        getFaqs(),
    ]);

    const acf = serviceData?.acf || {};
    const homeAcf = homeData?.acf || {};

    // Images (ACF may return an ID or an object depending on field settings)
    const [heroImageUrl, hoverImage1Url, hoverImage2Url] = await Promise.all([
        getMediaById(acf.service_hero_image),
        getMediaById(acf.ready_to_transform_1_hover_image),
        getMediaById(acf.ready_to_transform_2_hover_image),
    ]);

    // Why Choose Us cards
    const whyChooseUsCards = [1, 2, 3, 4]
        .map((n) => ({
            title: acf[`why_choose_us_label_${n}`],
            description: acf[`why_choose_us_value_${n}`],
        }))
        .filter((c) => c.title);

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

    return (
        <div>
            <HeroService
                title={acf.service_name || "Interior Design Service"}
                description={acf.service_short_description}
                image={heroImageUrl}
            />
            <ServiceDetails
                title="Service Details"
                primaryDescription={acf.service_detail_para_1}
                secondaryDescription={acf.service_detail_para_2}
            />
            <ServiceHoverCards
                title="Ready To Transform Your Space?"
                description={acf.ready_to_transform_para_1}
                imageSrc={hoverImage1Url}
                imageSrc1={hoverImage2Url}
                buttonText={acf.ready_to_transform_para_2}
            />
            <HomeCards
                heading="Why Choose Us?"
                cards={whyChooseUsCards}
            />
            <Formula />
            <ThreeSlider slides={threeSlides} />
            <TestimonialSlider testimonials={testimonials} />
            <RelatedProjectSlider projects={relatedProjects} />
            <CountDown data={countdownData} />
            <Form />
            <Faqs faqs={faqs} />
        </div>
    );
}

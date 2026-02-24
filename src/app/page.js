import CoreOfferings from "@/components/CoreOfferings/CoreOfferingCards"
import CountDown from "@/components/CountDown/CountDown"
import Experience from "@/components/ExperienceSec/Experience"
import Faqs from "@/components/FaqsSection/Faqs"
import Form from "@/components/Form/Form"
import Hero from "@/components/Hero/Hero"
import HomeTimeline from "@/components/HomeTimeline/HomeTimeline"
import KnowledgeSpace from "@/components/KnowledgeSlider/KnowledgeSlider"
import LeadingVision from "@/components/LeadingVision/LeadingVision"
import Marquee from "@/components/Marquee/Marquee"
import NumbersSec from "@/components/NumbersSection/NumbersSec"
import ProjectSlider from "@/components/ProjectSlider/ProjectSlider"
import TextEffect from "@/components/TextEffectSection/TextEffect"
import ThreeSlider from "@/components/Threeslider/Threeslider"
import TruelyMatters from "@/components/TruelyMatters/TruelyMatters"

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
    { cache: "no-store" }
  );

  if (!res.ok) return null;

  const media = await res.json();
  return media.source_url;
}

async function getCoreOfferings() {
  const res = await fetch(
    "https://unityinteriorsadmin.humbeestudio.xyz/wp-json/wp/v2/core-offerings?acf_format=standard",
    { next: { revalidate: 60 } }
  );

  if (!res.ok) throw new Error("Failed to fetch core offerings");

  return res.json();
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


export default async function Page() {
  const pageData = await getHomePageData();
  const coreOfferings = await getCoreOfferings();
  const faqs = await getFaqs();

  console.log("=== WORDPRESS PAGE DATA ===");
  console.log(JSON.stringify(pageData, null, 2));


  const acf = pageData?.acf || {};
  const heroImageUrl = acf.hero_image?.url;

  // ===============================
  // CLIENT MARQUEE LOGOS (ACF FREE)
  // ===============================

  // const clientLogos = Object.entries(acf)
  //   .filter(([key, value]) => key.startsWith("client_logo_") && value?.url)
  //   .map(([key, value]) => ({
  //     url: value.url,
  //     alt: value.alt || "Client Logo",
  //     width: value.width,
  //     height: value.height,
  //   }));

  // console.log("Client Logos:", clientLogos);

  // ACF Timeline Items
  const timelineItems = Object.keys(acf)
    .filter(key => key.startsWith("timeline_") && typeof acf[key] === "object")
    .map(key => acf[key])
    .filter(item => item?.title);

  // ACF Execution Items
  console.log("Timeline Items:", timelineItems);

  const executionItems = Object.keys(acf)
    .filter(key => key.startsWith("execution_") && typeof acf[key] === "object")
    .map(key => acf[key])
    .filter(item => item?.title);
  console.log("Execution Items:", executionItems);


  // ===============================
  // KNOWLEDGE SLIDER (HANDLE ID + ARRAY)
  // ===============================

  // const knowledgeItems = Object.entries(acf)
  //   .filter(([key, value]) => key.startsWith("slider_content") && typeof value === "object")
  //   .map(([key, value]) => {
  //     let imageUrl = "";
  //     // Case 1: Image Array
  //     if (typeof value.image === "object" && value.image?.url) {
  //       imageUrl = value.image.url;
  //     }
  //     // Case 2: Image ID (number)
  //     if (typeof value.image === "number") {
  //       imageUrl = `https://unityinteriorsadmin.humbeestudio.xyz/wp-content/uploads/2026/02/KnowlwdgeSliderBanner-1.webp`;
  //     }
  //     return {
  //       description: value?.description || "",
  //       image: imageUrl,
  //     };
  //   })
  //   .filter(item => item.description && item.image);

  // console.log("Knowledge Items:", knowledgeItems);
  const knowledgeItems = [];

  for (const [key, value] of Object.entries(acf)) {
    if (key.startsWith("slider_content") && typeof value === "object") {
      let imageUrl = "";

      if (typeof value.image === "object" && value.image?.url) {
        imageUrl = value.image.url;
      }

      if (typeof value.image === "number") {
        imageUrl = await getMediaById(value.image);
      }

      if (value.description && imageUrl) {
        knowledgeItems.push({
          description: value.description,
          image: imageUrl,
        });
      }
    }
  }

  console.log("Knowledge Items:", knowledgeItems);

  
  return (
    <main>
      <Hero
        title={acf.hero_title}
        description={acf.hero_description}
        imageHero={heroImageUrl}
        buttonText={acf.hero_button_text}
        buttonLink={acf.hero_button_link?.url}
      />

      <Marquee />
      {/* <Marquee logos={clientLogos} /> */}
      <TextEffect text={acf.text_effect_content || ""} />
      <Experience
        years={acf.experience_years}
        title={acf.experience_title}
        divider={acf.experience_divider}
        description={acf.experience_description}
        imageMain={acf.experience_main_image?.url}
        imageTop={acf.experience_top_image?.url}
        imageBottom={acf.experience_bottom_image?.url}
      />
      <CoreOfferings
        offerings={coreOfferings}
      />
      <HomeTimeline
        timelineHeading={acf.timeline_heading}
        timelineItems={timelineItems}
        executionHeading={acf.execution_section_heading}
        executionItems={executionItems}
      />
      {/* <HomeTimeline /> */}
      <NumbersSec
        label={acf.numbers_label}
        subtext={acf.numbers_subtext}
        image={acf.numbers_image?.url}
        card1={{
          number: acf.card1_number,
          title: acf.card1_title,
          description: acf.card1_description,
        }}
        card2={{
          number: acf.card2_number,
          title: acf.card2_title,
          description: acf.card2_description,
        }}
        card3={{
          number: acf.card3_number,
          title: acf.card3_title,
          description: acf.card3_description,
        }}
        card4={{
          number: acf.card4_number,
          title: acf.card4_title,
          description: acf.card4_description,
        }}
      />
      {/* <NumbersSec /> */}
      {/* <TruelyMatters /> */}
      <TruelyMatters
        title={acf.truely_matters_title}
        description={acf.truely_matters_description}
        items={[
          {
            icon: acf.item1_icon?.url,
            title: acf.item1_title,
            description: acf.item1_description,
          },
          {
            icon: acf.item2_icon?.url,
            title: acf.item2_title,
            description: acf.item2_description,
          },
          {
            icon: acf.item3_icon?.url,
            title: acf.item3_title,
            description: acf.item3_description,
          },
        ]}
      />
      <LeadingVision
        bgImage={acf.leading_vision_bg?.url}
        titleLine1={acf.leading_vision_title_line1}
        titleLine2={acf.leading_vision_title_line2}
        image={acf.leading_vision_image?.url}
        description={acf.leading_vision_description}
      />
      {/* <LeadingVision /> */}
      <ThreeSlider />
      <ProjectSlider />
      <CountDown />
      <Form />
      {/* <KnowledgeSpace /> */}
      <KnowledgeSpace
        title={acf.knowledge_section_title}
        items={knowledgeItems}
      />
      <Faqs
      // faqs={faqs}
      />
    </main>
  );
}
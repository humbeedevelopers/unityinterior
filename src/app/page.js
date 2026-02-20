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

// async function getMediaById(id) {
//   const res = await fetch(
//     `https://unityinteriorsadmin.humbeestudio.xyz/wp-json/wp/v2/media/${id}`,
//     { cache: "no-store" }
//   );

//   if (!res.ok) return null;

//   const media = await res.json();
//   return media.source_url;
// }

async function getCoreOfferings() {
  const res = await fetch(
    "https://unityinteriorsadmin.humbeestudio.xyz/wp-json/wp/v2/core-offerings?acf_format=standard",
    { next: { revalidate: 60 } }
  );

  if (!res.ok) throw new Error("Failed to fetch core offerings");

  return res.json();
}


export default async function Page() {
  const pageData = await getHomePageData();
  const coreOfferings = await getCoreOfferings();

  console.log("=== WORDPRESS PAGE DATA ===");
  console.log(JSON.stringify(pageData, null, 2));


  const acf = pageData?.acf || {};
  const heroImageUrl = acf.hero_image?.url;
  // const heroImageUrl = acf.hero_image
  //   ? await getMediaById(acf.hero_image)
  //   : null;
  // console.log("Experience Main Image:", acf.experience_image_main);
  // console.log("Experience Top Image:", acf.experience_image_top);
  // console.log("Experience Bottom Image:", acf.experience_image_bottom);
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
      // offerings={coreOfferings} 
      />
      <HomeTimeline />
      <NumbersSec />
      <TruelyMatters />
      <LeadingVision />
      <ThreeSlider />
      <ProjectSlider />
      <CountDown />
      <Form />
      <KnowledgeSpace />
      <Faqs />
    </main>
  );
}
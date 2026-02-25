// "use client"
// import { useEffect } from "react";
import CityHero from "@/components/CityHero/CityHero";
import Form from "@/components/Form/Form";
import Formula from "@/components/HomeFormula/Formula";
import CityInfo from "@/components/CityInfo/CityInfo";
import CityProjects from "@/components/CityProjects/CityProjects";
import CityDetails from "@/components/CityDetails/CityDetails";



//SEO Meta
export const metadata = {
  title: "City Projects | Unity Interior",
  description: "Explore our interior design projects across different cities by Unity Interior.",
};


//Fetch only projects
async function getAllProjects() {
  const res = await fetch(
    "https://unityinteriorsadmin.humbeestudio.xyz/wp-json/wp/v2/projects?acf_format=standard",
    { next: { revalidate: 60 } }
  );

  const data = await res.json();

  return data.map((p) => {
    const images = [];
    const projectImages = p.acf?.project_images;

    // main image
    if (projectImages?.main_image?.url) {
      images.push(projectImages.main_image.url);
    }

    // gallery images
    for (let i = 1; i <= 6; i++) {
      const img = projectImages?.[`gallery_image_${i}`];
      if (img?.url) {
        images.push(img.url);
      }
    }

    return {
      id: p.id,
      slug: p.slug,
      title: p.title?.rendered?.replace(/<[^>]*>?/gm, "") || "",
      location: p.acf?.project_location || "",
      images,
    };
  });
}

export default async function CityPage() {
    const projects = await getAllProjects();
    
    // useEffect(() => {
    //     document.title =
    //         "City | Unity Interior";
    // });
    return (
        <div>
            <CityHero />
            <CityInfo />
            <CityProjects projects={projects} />
            <CityDetails />
            <Formula />
            <Form />

        </div>
    )
}
// export default CityPages;
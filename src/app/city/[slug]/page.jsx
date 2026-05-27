import CityHero from "@/components/CityHero/CityHero";
import CityInfo from "@/components/CityInfo/CityInfo";
import CityProjects from "@/components/CityProjects/CityProjects";
import CityDetails from "@/components/CityDetails/CityDetails";
import Formula from "@/components/HomeFormula/Formula";
import Form from "@/components/Form/Form";
import { notFound } from "next/navigation";

// ─── Data fetchers ────────────────────────────────────────────────────────────

async function getCityData(slug) {
  const res = await fetch(
    `https://websiteadmin.unityinteriors.com/wp-json/wp/v2/city-page?slug=${slug}&acf_format=standard`,
    { next: { revalidate: 60 } }
  );
  if (!res.ok) return null;
  const data = await res.json();
  return data[0] ?? null;
}

async function getCityProjects(projectIds) {
  if (!projectIds.length) return [];
  const ids = projectIds.join(",");
  const res = await fetch(
    `https://websiteadmin.unityinteriors.com/wp-json/wp/v2/projects?include=${ids}&acf_format=standard&per_page=100`,
    { next: { revalidate: 60 } }
  );
  if (!res.ok) return [];
  const data = await res.json();

  return data.map((p) => {
    const gallery = p.acf?.project_images || {};
    const images = Object.values(gallery)
      .filter((img) => img?.url)
      .slice(0, 5)
      .map((img) => img.url);

    return {
      id: p.id,
      slug: p.slug,
      title: p.title?.rendered || "",
      location: p.acf?.project_location || "",
      images,
    };
  });
}

// ─── Static params (optional — enables SSG for known slugs) ──────────────────

export async function generateStaticParams() {
  const res = await fetch(
    "https://websiteadmin.unityinteriors.com/wp-json/wp/v2/city-page?per_page=100"
  );
  if (!res.ok) return [];
  const data = await res.json();
  return data.map((city) => ({ slug: city.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const city = await getCityData(slug);
  return {
    title: city
      ? `${city.title?.rendered} | Unity Interior`
      : "City | Unity Interior",
  };
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default async function CitySlugPage({ params }) {
  const { slug } = await params;
  const city = await getCityData(slug);
  if (!city) notFound();

  const acf = city.acf || {};

  const projectIds = (acf.projects || []).map((p) => p.ID).filter(Boolean);
  const projects = await getCityProjects(projectIds);

  return (
    <div>
      <CityHero
        title={acf.city_page_title || city.title?.rendered}
        description={acf.city_page_short_para}
        images={acf.hero_section_images || []}
      />
      <CityInfo
        underHeroPara={acf.city_page_under_hero_para}
        manifestoLabel={acf.the_design_manifesto_label}
        para1={acf.the_design_manifesto_para_1}
        para2={acf.the_design_manifesto_para_2}
      />
      <CityProjects projects={projects} />
      <CityDetails
        heading={acf.city_description_heading}
        descriptionHtml={acf.city_description}
      />
      <Formula />
      <Form />
    </div>
  );
}

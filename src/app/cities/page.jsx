import CitiesBanner from "@/components/CitiesBanner/CitiesBanner";
import CitiesList from "@/components/CitiesList/CitiesList";

export const metadata = {
  title: "Cities | Unity Interior",
};

async function getCities() {
  const res = await fetch(
    "https://websiteadmin.unityinteriors.com/wp-json/wp/v2/city-page?per_page=100&acf_format=standard",
    { next: { revalidate: 60 } }
  );
  if (!res.ok) throw new Error("Failed to fetch cities");
  return res.json();
}

export default async function CitiesPage() {
  const cities = await getCities();

  const cityList = cities.map((city) => ({
    id: city.id,
    slug: city.slug,
    title: city.title?.rendered || "",
    image: city.acf?.hero_section_images?.[0] ?? null,
  }));

  // Use the first available hero image for the banner
  const bannerImage = cityList.find((c) => c.image)?.image ?? null;

  return (
    <>
      <CitiesBanner
        title="CITIES"
        subtitle="Explore our interior design projects across cities in India and beyond."
        image={bannerImage}
      />
      <CitiesList cities={cityList} />
    </>
  );
}

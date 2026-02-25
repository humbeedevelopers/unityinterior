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
// import RelatedProjectSlider from "@/components/RelatedProjectSlider/RelatedProjectSlider";


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

// const InteriorDesign = ({ relatedProjects }) => {
    // useEffect(() => {   
    //     document.title =
    //         "Interior Design | Unity Interior";
    // });
    return (
        <div>
            <HeroService
                title="Interior Design Service"
                description="Lorem ipsum is simply dummy text of the printing and typesetting industry."
                image={ImgMain}
            />
            <ServiceDetails
                title="Service Details"
                primaryDescription="Unity Interiors offers exceptional interior design services, tailored to meet the unique needs and preferences of our clients. With a commitment to creativity, functionality, and attention to detail, we transform spaces into stunning and personalized environments that inspire and delight."
                secondaryDescription="We have done tremendous work in 3 BHK and 4 BHK interior designing. We have designed, built and design interior of bungalows as well. Over a very short span, we have designed couple of offices in Pan India. Take a look at projects we have done."
            />
             <ServiceHoverCards
                title="Lorem Ipsum Is Simply Dummy Text Of The Printing And"
                description="We have done tremendous work in 3 BHK and 4 BHK interior designing. We have designed, built and design interior of bungalows as well. Over a very short span, we have designed couple of offices in Pan India. Take a look at projects we have done."
                imageSrc={HoverImage}
                imageSrc1={HoverImage}
                buttonText="Contact Us"
                // onButtonClick={() => console.log("CTA Clicked")}
            />
            <HomeCards
                heading="Why Choose Us?"
                cards={[
                    {
                        title: "Functional Design Approach",
                        description:
                            "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",

                    },
                    {
                        title: "On Time and On Budget",
                        description: "We deliver projects without delays or hidden costs.",
                    },
                    {
                        title: "Highly Professional Staff",
                        description: "Our team consists of experienced industry experts.",
                    },
                    {
                        title: "Real Focus on Satisfaction",
                        description: "Your success is our priority.",
                    },
                ]}
            />
            <Formula />
            
           
            {/* {relatedProjects?.length > 0 && (
                <RelatedProjectSlider projects={relatedProjects} />
            )} */}
            <ThreeSlider />
            <TestimonialSlider />
            <CountDown data={countdownData}/>
            <Form />
            <Faqs faqs={faqs}/>

        </div>
    )
}
// export default InteriorDesign;
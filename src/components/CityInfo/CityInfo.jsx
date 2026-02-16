"use client";
import ParagraphTextReveal from "@/animations/ParagraphTextReveal";
import "./CityInfo.scss";

const CityInfo = () => {
    return (
        <section className="cityInfo">
            <div>
                <h2 className="cityInfo__SubDesc">Lorem Ipsum is simply dummy text of the printing and typesetting industry</h2>
            </div>
            <div className="cityInfo__container">

                <div className="cityInfo__left">
                    <h2 className="cityInfo__title"><ParagraphTextReveal>THE DESIGN MANIFESTO</ParagraphTextReveal></h2>
                    {/* <button className="cityInfo__button">Contact us</button> */}
                </div>

                <div className="cityInfo__middle">
                    <p className="cityInfo__description">
                        This 6000 sq ft home in Kolkata gave us the chance to really
                        experiment with scale and detail. From a 22-foot hand-crafted
                        marble wall in the living room to bold contrasts in the master
                        bedroom and a smart, gold-detailed master bathroom, every space
                        has its own story. The design plays with curves, textures, and
                        light while still feeling warm and comfortable. It's a project
                        that pushed us to try new things, and we love how it all came
                        together.
                    </p>
                </div>

                <div className="cityInfo__right">
                    <div className="cityInfo__textWrapper">
                        <p className="cityInfo__rightText">
                            This 6000 sq ft home in Kolkata gave us the chance to really
                            experiment with scale and detail. From a 22-foot hand-crafted
                            marble wall in the living room to bold contrasts in the master
                            bedroom and a smart, gold-detailed master bathroom, every space
                            has its own story. The design plays with curves, textures, and
                            light while still feeling warm and comfortable. It's a project
                            that pushed us to try new things, and we love how it all came
                            together.</p>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default CityInfo;

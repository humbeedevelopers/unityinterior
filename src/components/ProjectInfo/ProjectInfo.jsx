"use client";

import Image from "next/image";
import "./ProjectInfo.scss";
import ProjectInfoImg from "@/images/projectDummy.png";

const ProjectInfo = () => {
    return (
        <section className="projectInfo">
            <div className="projectInfo__container">
                <div className="projectInfo__left">
                    <h2 className="projectInfo__title">THE SPACE</h2>
                    <button className="projectInfo__button">Contact us</button>
                </div>


                <div className="projectInfo__middle">
                    <p className="projectInfo__description">
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


                <div className="projectInfo__right">
                    <div className="projectInfo__imageWrapper">
                        <Image
                            src={ProjectInfoImg}
                            alt="Project Interior"
                            className="projectInfo__image"
                        />
                    </div>
                </div>

            </div>
        </section>
    );
};

export default ProjectInfo;

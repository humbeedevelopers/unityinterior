"use client";

import Image from "next/image";
import "./ProjectInner.scss";

const ProjectInner = ({ project }) => {
    if (!project) return null;

    const {
        title,
        description,
        client,
        value,
        area,
        gallery = [],
    } = project;
    

    return (
        <section className="ProjectInner">
            <div className="ProjectInner__container">
                {/* Header */}
                <div className="ProjectInner__header">
                    <div className="ProjectInner__left">
                        <p className="ProjectInner__desc">{description}</p>


                    </div>

                    <div className="ProjectInner__meta">

                        <ul>
                            <li>
                                <span>CLIENT:</span>
                                <strong>{client}</strong>
                            </li>
                            <li>
                                <span>VALUE:</span>
                                <strong>{value}</strong>
                            </li>
                            <li>
                                <span>SURFACE AREA:</span>
                                <strong>{area}</strong>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Gallery */}

                <div className="ProjectInner__GallerySection">
                    <h2 className="ProjectInner__title">
                        PROJECT <br /> GALLERY
                    </h2>
                    <div className="ProjectInner__gallery">
                        {gallery.map((img, index) => (
                            <div
                                key={index}
                                className={`ProjectInner__item ProjectInner__item--${index}`}
                            >
                                <Image
                                    src={img}
                                    alt={`${title} image ${index + 1}`}
                                    
                                    fill
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                    className="GalleryImg"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProjectInner;

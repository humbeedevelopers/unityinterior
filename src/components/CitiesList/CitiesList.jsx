"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import "./CitiesList.scss";

const INITIAL_COUNT = 6;

const CitiesList = ({ cities = [] }) => {
  const [visibleCount, setVisibleCount] = useState(INITIAL_COUNT);
  const router = useRouter();

  const visible = useMemo(() => cities.slice(0, visibleCount), [cities, visibleCount]);

  return (
    <section className="citiesList">
      <div className="citiesList__container">

        <div className="citiesList__grid">
          {visible.map((city) => (
            <motion.div
              key={city.id}
              className="citiesList__card"
              onClick={() => router.push(`/city/${city.slug}`)}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="citiesList__image">
                {city.image && (
                  <Image
                    src={city.image.url}
                    alt={city.image.alt || city.title}
                    width={city.image.width || 800}
                    height={city.image.height || 600}
                    className="citiesList__img"
                  />
                )}
              </div>

              <div className="citiesList__info">
                <p className="citiesList__title">{city.title}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {visibleCount < cities.length && (
          <div className="citiesList__loadmore">
            <button onClick={() => setVisibleCount((prev) => prev + 4)}>
              LOAD MORE
            </button>
          </div>
        )}

      </div>
    </section>
  );
};

export default CitiesList;

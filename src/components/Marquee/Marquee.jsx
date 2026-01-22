
import "./Marquee.scss";
import Image from "next/image";
import ShivalikLogo from "@/images/shivalik.png";
const MarqueeSection = () => {
  const CLIENT_LOGOS = [
    { id: 1, name: "Shivalik", src: ShivalikLogo },
    { id: 2, name: "Shivalik", src: ShivalikLogo },
    { id: 3, name: "Shivalik", src: ShivalikLogo },
    { id: 4, name: "Shivalik", src: ShivalikLogo },
    { id: 5, name: "Shivalik", src: ShivalikLogo },
    { id: 6, name: "Shivalik", src: ShivalikLogo },
    { id: 7, name: "Shivalik", src: ShivalikLogo },
  ];

  const rows = [
    { logos: CLIENT_LOGOS.slice(0, 4), delay: "0s" },
    // { logos: CLIENT_LOGOS.slice(4, 8), delay: "-5s" },
    // { logos: CLIENT_LOGOS.slice(8, 12), delay: "-10s" },
  ];

  return (
    <section className="clients">
      <div className="clients__container">
        {/* <header className="clients__header">
          <h2 className="clients__title">
            Believed by <br />
            <span>from Global Brands to Start-ups</span>
          </h2>
        </header> */}

        {/* Animated Logos */}
        <div className="clients__rows">
          {rows.map((row, rowIndex) => (
            <div
              key={rowIndex}
              className="clients__row"
            //   style={{
            //     maskImage:
            //       "linear-gradient(to right, transparent, black 15%, black 85%, transparent)",
            //     WebkitMaskImage:
            //       "linear-gradient(to right, transparent, black 15%, black 85%, transparent)",
            //   }}
            >
              <div
                className="clients__track"
                style={{ animationDelay: row.delay }}
              >
                {[...row.logos, ...row.logos, ...row.logos].map(
                  (logo, index) => (
                    <div
                      key={`${logo.id}-${index}`}
                      className="clients__logo"
                    >
                      <Image
                        src={logo.src}
                        alt={`${logo.name} logo`}
                      />
                    </div>
                  )
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MarqueeSection;

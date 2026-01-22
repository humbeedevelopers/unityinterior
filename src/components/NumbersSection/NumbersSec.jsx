import "./NumbersSec.scss";
import Image from "next/image";
import NumbersImage from "@/images/Numbersectionimg.png"; // replace with your image path

const NumbersSec = () => {
  return (
    <section className="numbers">
      <div className="numbers__container">
        {/* Left Content */}
        <div className="numbers__left">
          <h6 className="numbers__label">THE NUMBERS</h6>
          <p className="numbers__subtext">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </p>

          <div className="numbers__image">
            <Image
              src={NumbersImage}
              alt="Interior decor"
            />
          </div>
        </div>

        {/* Right Grid */}
        <div className="numbers__grid">
          <div className="numbers__card">
            <h2>9</h2>
            <span>YEARS</span>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry
            </p>
          </div>

          <div className="numbers__card">
            <h2>9</h2>
            <span>YEARS</span>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry
            </p>
          </div>

          <div className="numbers__card">
            <h2>9</h2>
            <span>YEARS</span>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry
            </p>
          </div>

          <div className="numbers__card numbers__card--dark">
            <h2>9</h2>
            <span>YEARS</span>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NumbersSec;

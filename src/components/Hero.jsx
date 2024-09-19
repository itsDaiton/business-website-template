import styles from "../styles/style";
import { discount, dragon } from "../assets";

const Hero = () => {
  return (
    <section
      id="home"
      className={`flex md:flex-row flex-col ${styles.paddingY}`}
    >
      <div
        className={`flex-1 ${styles.flexStart} flex-col xl:px-0 md:px-16 px-6`}
      >
        {/* Main text */}
        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[90px] text-[55px] text-white ss:leading-[120.8px] leading-[75px]">
            Turning <br className="md:block hidden" />
            <span className="text-gradient">Ideas</span>{" "}
            <br className="md:block hidden" />
            Into <span className="text-gradient">Reality</span>
          </h1>
        </div>
        <p className={`${styles.paragraph} md:max-w-[500px] mt-10`}>
          <i>
            "Great things are not done by impulse, but by a series of small things brought together."
          </i>
          <br></br>- Vincent Van Gogh
        </p>
      </div>
      <div
        className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}
      >
        <img
          src={dragon}
          alt="billing"
          className="dragon-style w-[100%] h-[100%] relative z-[2]"
        />
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
      </div>
    </section>
  );
};

export default Hero;

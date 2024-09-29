import styles from "../styles/style";
import landing_page from "../assets/video/landing_page.mp4";

const Hero = () => {
  return (
    <section
      id="home"
      className={`flex`}
    >
      <div className={`landing-wrapper`}>
        <video src={landing_page} autoPlay muted loop className={`video-style`}></video>
      </div>
      <div
        className={`landing-title md:px-40 px-10`}
      >
        {/* Main text */}
        <div className="w-full">
          <h1 className={`font-poppins font-semibold sm:text-[110px] ss:text-[90px] text-[60px] text-white sm:leading-[140px] sm:leading-[130px] leading-[80px]`}>
            Turning <br className="md:block hidden" />
            <span className="text-gradient">Ideas</span>{" "}
            <br className="md:block hidden" />
            Into <span className="text-gradient">Reality</span>
          </h1>
        </div>
        <p className={`${styles.paragraph}  text-[20px] md:max-w-[500px] md:mt-10 mt-20`}>
          <i>
            "Great things are not done by impulse, but by a series of small things brought together."
          </i>
          <br></br>- Vincent Van Gogh
        </p>
      </div>
    </section>
  );
};

export default Hero;

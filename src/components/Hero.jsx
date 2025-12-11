import hero from "../assets/Hero.webp";
import twitter from "../assets/twitter.webp";
import linkedin from "../assets/linkedin.webp";
import reactLogo from "../assets/React.webp";
import reduxLogo from "../assets/Redux.webp";
import tailwind from "../assets/Tailwind Css.webp";

const Hero = () => {
  return (
    <section className="relative">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center lg:h-[90vh] justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0 flex flex-col space-y-4 px-6 lg:px-4 lg:mt-0 mt-10">
            <h1 className="lg:text-7xl text-4xl font-bold lg:leading-snug">
              Hi There, <br />
              I'm Ankit <span className="text-red-500">Yadav</span>
            </h1>
            <p className="md:text-2xl text-xl mb-4">Web Developer & Designer</p>
            <p className="mb-4">
              I'm a passionate web developer with expertise in ReactJS,
              Tailwind, JS (ES6+) and modern web technologies. I love creating
              beautiful and functional website that solve real world problems.
            </p>
            <button className="bg-black text-white px-3 py-2 w-max min-w-12 min-h-12 rounded-md">
              <a
                href="https://drive.google.com/file/d/1LBMHWpTgTGkvCTcHYiU8JQRCHb5-SRl8/view?usp=sharing"
                download
                title="Resume download link"
                target="_blank"
              >
                Download CV
              </a>
            </button>
          </div>
          <div className="md:w-1/2 relative flex justify-center items-end">
            <img
              src={hero}
              fetchPriority="high"
              loading="eager"
              alt="hero image"
              className="lg:h-[90vh] h-96"
            />
            <img
              src={reactLogo}
              alt="react logo"
              className="absolute w-10 top-36 left-0 rounded-full md:hidden"
            />
            <img
              src={reduxLogo}
              alt="redux logo"
              className="absolute w-10 top-0 right-5 md:hidden"
            />
            <img
              src={tailwind}
              alt="tailwind logo"
              className="absolute w-10 rounded-full right-0 bottom-36 md:hidden"
            />
          </div>
        </div>
      </div>
      <div className="absolute top-40 right-10 hidden bg-gray-200 p-4 md:flex flex-col gap-6 rounded-full">
        <a href="https://www.x.com/youknowankit" title="twitter button">
          <img src={twitter} alt="twitter logo" className="w-20" />
        </a>
        <a
          href="https://www.linkedin.com/in/youknowankit"
          title="linkedin button"
        >
          <img src={linkedin} alt="linkedin logo" className="w-20" />
        </a>
      </div>
    </section>
  );
};

export default Hero;

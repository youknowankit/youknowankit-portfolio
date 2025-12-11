import Html from "../assets/Html.webp";
import Css from "../assets/CSS.webp";
import Javascript from "../assets/JS.webp";
import ReactLogo from "../assets/React.webp";
import ReduxLogo from "../assets/Redux.webp";
import Tailwind from "../assets/Tailwind Css.webp";
import Bootstrap from "../assets/Bootstrap.webp";
import NodeLogo from "../assets/NodeLogo.webp";

const About = () => {
  return (
    <div className="relative" id="about">
      <div className="bg-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base text-red-600 font-semibold tracking-wide uppercase">
              About Me
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Hi, I'm Ankit Yadav
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              A Front-End Developer with expertise in Frontend Web development,
              ReactJS, Tailwind, BootStrap & React-BootStrap, CSS-in-JS, JS, CSS
              & HTML.
            </p>
          </div>
          <div className="mt-10">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
              <div>
                <h3 className="text-2xl font-semibold text-gray-900">
                  My Journey
                </h3>
                <p className="mt-4 text-lg text-gray-600">
                  I began my journey in web development with a deep curiosity
                  for how modern, high-performing interfaces are crafted. Over
                  time, this curiosity grew into a passion for building
                  responsive, accessible, and visually appealing user
                  experiences. As a Frontend Developer skilled in HTML5, CSS3,
                  JavaScript (ES6+), React, Redux, Tailwind CSS, Bootstrap, and
                  SASS, I focus on turning complex ideas into clean, functional,
                  and scalable frontend solutions.
                </p>
              </div>
              <div className="border border-red-200 rounded-lg md:p-7 py-7  flex flex-col gap-8 items-center shadow-lg shadow-red-300">
                <h3 className="text-2xl font-semibold text-red-600">
                  Skills & Expertise
                </h3>
                <div className="flex items-center justify-center flex-wrap gap-3">
                  <div className="border border-red-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-300">
                    <img src={Html} alt="" className="w-10" />
                    <span className="font-semibold">HTML</span>
                  </div>
                  <div className="border border-red-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-300">
                    <img src={Css} alt="" className="w-8" />
                    <span className="font-semibold">CSS</span>
                  </div>
                  <div className="border border-red-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-300">
                    <img src={Javascript} alt="" className="w-10" />
                    <span className="font-semibold">Javascript</span>
                  </div>
                  <div className="border border-red-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-300">
                    <img src={ReactLogo} alt="" className="w-8 rounded-full" />
                    <span className="font-semibold">React</span>
                  </div>
                  <div className="border border-red-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-300">
                    <img src={ReduxLogo} alt="" className="w-8" />
                    <span className="font-semibold">Redux</span>
                  </div>
                  <div className="border border-red-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-300">
                    <img src={Tailwind} alt="" className="w-8 rounded-full" />
                    <span className="font-semibold">Tailwind Css</span>
                  </div>
                  <div className="border border-red-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-300">
                    <img src={Bootstrap} alt="" className="w-10" />
                    <span className="font-semibold">Bootstrap</span>
                  </div>
                  <div className="border border-red-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-300">
                    <img src={NodeLogo} alt="" className="w-10" />
                    <span className="font-semibold">Node Js</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12">
            <h3 className="text-2xl font-semibold text-gray-900">
              More About Me
            </h3>
            <p className="mt-4 text-lg text-gray-600">
              Apart from coding, I am passionate about learning new technologies
              and keeping myself up-to-date with the latest trends in web
              development. I am also learning MERN Stack development, Wordpress
              and digital Marketing.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

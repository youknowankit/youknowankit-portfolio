import Portfolio from "../assets/Portfolio.webp";
import bodyFuel from "../assets/bodyfuel.webp";
import formValidation from "../assets/formvalidation.webp";
import weatherapp from "../assets/weatherapp.webp";
import amazonclone from "../assets/amazonclone.webp";
import Cards from "./Cards";

const Projects = () => {
  const projectJson = [
    {
      id: 1,
      title: "Portfolio",
      desc: "This is my portfolio built with react tailwind and lucid-react. It's fully responsive and you can also download resume for my details.",
      image: Portfolio,
      live: "https://rohitsingh93300-portfolio.vercel.app/",
      github: "https://github.com/rohitsingh93300/portfolio",
    },
    {
      id: 2,
      title: "BodyFuel Gym",
      desc: "A gym website build to practice the concepts of react and tailwind CSS with the help of other libraries.",
      image: bodyFuel,
      live: "https://bodyfuel-gym.netlify.app/",
      github: "https://github.com/youknowankit/bodyfuelgym",
    },
    {
      id: 3,
      title: "React Form-Validation",
      desc: "A project built to showcase the skills of form-validation using react & tailwind with logic to handle validation.",
      image: formValidation,
      live: "https://reactformvalidationproject.netlify.app/",
      github: "https://github.com/youknowankit/signup-form-validation",
    },
    {
      id: 4,
      title: "Weather App with Geolocation API",
      desc: "App uses the geolocation api to fetch the app of current location and uses openweather API to fetch data. Also, contains detailed view.",
      image: weatherapp,
      live: "https://weatherapp-basic-vanillajs.netlify.app/",
      github: "https://github.com/youknowankit/detailed-weather-app",
    },
    {
      id: 5,
      title: "Amazon.com Clone using HTML, CSS",
      desc: "A clone project to practice real-world layout and how to implement them using plain CSS for foundational Knowledge.",
      image: amazonclone,
      live: "https://amazonclonemodel.netlify.app/",
      github: "https://github.com/youknowankit/amazonClone-Project",
    },
  ];

  return (
    <section id="projects" className="relative bg-gray-700 py-10 px-4">
      <div className="mb-16 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-white border-b border-red-500 w-max pb-4">
          My Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-10">
          {projectJson.map((items) => {
            return <Cards key={items.id} item={items} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;

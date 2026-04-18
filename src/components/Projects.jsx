import Portfolio from "../assets/Portfolio.webp";
import bodyFuel from "../assets/bodyfuel.webp";
import formValidation from "../assets/formvalidation.webp";
import weatherapp from "../assets/weatherapp.webp";
import imageSearchApp from "../assets/imageSearchApp.webp";
import Cards from "./Cards";

const Projects = () => {
  const projectJson = [
    {
      id: 1,
      title: "Image Finder App",
      desc: "This project uses the unsplash API to fetch images based on the search query and also has a feature to view the image in high quality using lightbox.",
      image: imageSearchApp,
      live: "https://reactimagefinderapp.netlify.app/",
      github: "https://github.com/youknowankit/react-image-search-app",
    },
    {
      id: 2,
      title: "Registration Form Validation",
      desc: "A project built to showcase the skills of form-validation using react & tailwind with logic to handle validation.",
      image: formValidation,
      live: "https://reactregisterformvalidation.netlify.app/",
      github: "https://github.com/youknowankit/signup-form-validation",
    },
    {
      id: 3,
      title: "Portfolio Website",
      desc: "The website features a clean and modern design, with sections for about me, projects, and contact information.",
      image: Portfolio,
      live: "https://youknowankit.netlify.app/",
      github: "https://github.com/youknowankit/youknowankit-portfolio",
    },
    {
      id: 4,
      title: "BodyFuel Gym",
      desc: "A gym website build to practice the concepts of react and tailwind CSS with the help of other libraries.",
      image: bodyFuel,
      live: "https://bodyfuel-gym.netlify.app/",
      github: "https://github.com/youknowankit/bodyfuelgym",
    },

    {
      id: 5,
      title: "Weather App with Geolocation API",
      desc: "App uses the geolocation api to fetch the app of current location and uses openweather API to fetch data. Also, contains detailed view.",
      image: weatherapp,
      live: "https://weatherapp-basic-vanillajs.netlify.app/",
      github: "https://github.com/youknowankit/detailed-weather-app",
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

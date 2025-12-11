import facebook from "../assets/facebook.webp";
import instagram from "../assets/instagram.webp";
import linkedin from "../assets/linkedin.webp";
import Lottie from "lottie-react";
import contact from "../assets/Contact.json";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, message } = formData;

    const subject = `New Contact Message from ${name}`;
    const body = `Name: ${name}%0AEmail: ${email}%0AMessage: ${message}`;

    // Change this email to your own email
    const mailto = `mailto:thisisankityadav@gmail.com?subject=${subject}&body=${body}`;

    window.location.href = mailto;
  };

  return (
    <section
      id="contact"
      className="z-50 bg-gray-800 relative py-10 px-5 md:px-0"
    >
      <div className="mb-16 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="md:w-1/2 mb-8 ml-2 md:mb-0">
            <h2 className="text-3xl font-bold mb-3 text-red-500">
              Get in Touch
            </h2>
            <p className="mb-4 text-white/85">
              I'm always open to new opportunities and collaboration. Feel free
              to reach out!
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                title="facebook link"
                className="text-foreground/60 hover:text-foreground/80"
              >
                <img
                  src={facebook}
                  alt="facebook logo"
                  className="h-6 w-6"
                  loading="lazy"
                />
              </a>
              <a
                href="#"
                title="instagram link"
                className="text-foreground/60 hover:text-foreground/80"
              >
                <img
                  src={instagram}
                  alt="instagram logo"
                  className="h-6 w-6"
                  loading="lazy"
                />
              </a>
              <a
                href="https://www.linkedin.com/in/youknowankit"
                title="linkedin link"
                className="text-foreground/60 hover:text-foreground/80"
              >
                <img
                  src={linkedin}
                  alt="linkedin logo"
                  className="h-6 w-6"
                  loading="lazy"
                />
              </a>
            </div>
            <Lottie
              animationData={contact}
              className="w-[350px] mx-auto lg:w-[500px]"
            />
          </div>
          <form
            onSubmit={handleSubmit}
            className="w-full md:w-1/2 bg-gray-100 rounded-lg border border-red-300 shadow-lg shadow-red-500 p-10"
          >
            <h1 className="text-gray-900 text-4xl font-bold mb-7">
              Contact Me
            </h1>
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Full Name"
                className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Message
              </label>
              <textarea
                id="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Enter Your Message"
                className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
            </div>
            <button className="bg-red-500 text-white px-3 py-2 min-w-12 min-h-12 rounded-lg">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;

import Github from "../assets/Github.webp";

const Cards = ({ item }) => {
  return (
    <div className="border border-red-500 rounded-lg w-[350px] lg:w-[400px] bg-red-50">
      <img src={item.image} alt="" className="rounded-lg" loading="lazy" />
      <div className="p-4">
        <h1 className="font-semibold text-xl mb-2">{item.title}</h1>
        <p>{item.desc}</p>
        <div className="flex gap-3 mt-4">
          <button className="bg-red-500 text-white px-3 py-2 min-w-12 min-h-12 rounded-md">
            <a href={item.live} title="live preview of project" target="_blank">
              Live Preview
            </a>
          </button>
          <button className="bg-black text-white px-3 py-2 min-w-12 min-h-12 rounded-md">
            <a
              href={item.github}
              title="Github link of project"
              target="_blank"
              className="flex gap-1"
            >
              <img
                src={Github}
                alt="GitHub-logo"
                className="w-6"
                loading="lazy"
              />
              Github Link
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cards;

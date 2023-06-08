import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div
      className="hero min-h-screen banner"
      
    >
      <div className="hero-overlay bg-opacity-50"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl uppercase font-bold text-lime-500 ">Hello there <span className="text-purple-500">students</span> </h1>
          <p className="mb-5">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-active btn-accent"> <Link>Get Started</Link> </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;

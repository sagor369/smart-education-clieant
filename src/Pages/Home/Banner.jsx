import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/styles.css";
import img1 from "../../assets/banner1.jpg";
import img2 from "../../assets/banner2.jpg";
import img3 from "../../assets/banner3.jpg";
import img4 from "../../assets/banner4.jpg";
import img5 from "../../assets/banner5.jpg";
import img6 from "../../assets/banner6.jpg";
import { Link } from "react-router-dom";

const Banner = () => {
  const AutoplaySlider = withAutoplay(AwesomeSlider);
  const imgs = [img1, img2, img3, img4, img5, img6];
  return (
    <AutoplaySlider
      play={true}
      cancelOnInteraction={false} // should stop playing on user interaction
      interval={6000}
    >
      {imgs.map((img, index) => (
        <div key={index} className="relative">
          <img className="w-full opacity-30 " src={img} alt="" />
          <div className="hero absolute inset-y-0 inset-x-0  ">
            <div className="hero-content text-center">
              <div className="max-w-md text-white">
                <h1 className="text-5xl  font-bold">Hello there</h1>
                <p className="py-6">
                  All our students are taught carefully here, if you want you
                  can take our course from now and register by visiting the link
                  below.
                </p>
                <Link to="/login" className="btn btn-primary">
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </AutoplaySlider>
  );
};

export default Banner;

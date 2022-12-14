import React from "react";
import logo1 from "../../assets/logoipsum-213.svg";
import logo2 from "../../assets/logoipsum-215.svg";
import logo3 from "../../assets/logoipsum-216.svg";
import logo4 from "../../assets/logoipsum-217.svg";
import img1 from "../../assets/window-maximize-regular.svg";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";

// import required modules
import { Pagination, Navigation } from "swiper";
const Details = () => {
  return (
    <section className="w-[370px] lg:w-[1340px] lg:h-[1050px] bg-[#364F6B] rounded-lg lg:mx-auto my-10">
      <div className="grid grid-cols-3  justify-center items-center lg:px-[150px] pt-10">
        <div className="border-b-2"></div>

        <div>
          <h4 className="text-white text-xs lg:text-3xl font-medium lg:px-5 ">
            Trusted Companies
          </h4>
        </div>

        <div className="border-b-2"></div>
      </div>
      <div className="flex justify-center items-center">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-52 py-10">
          <img className="" src={logo1} alt="" srcset="" />
          <img className="" src={logo2} alt="" srcset="" />
          <img className="" src={logo3} alt="" srcset="" />
          <img className="" src={logo4} alt="" srcset="" />
        </div>
      </div>

      <div className="border-b-2 mx-10"></div>
      <div>
        <div className="grid lg:grid-cols-2 sm:grid-cols-1 justify-around items-center gap-10 lg:gap-20 px-2 lg:px-20 py-20">
          <h2 className="text-3xl lg:text-6xl text-white lg:leading-[80px]">
            Our services <br></br> that we provide
          </h2>
          <p className="text-white text-justify text-base lg:w-[472px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et ut nunc,
            libero dolor, gravida. In metus, tortor, nunc sed egestas erat diam
            arcu. Laoreet orci nisl etiam risus ut nec. Facilisi ipsum viverra
            diam arcu massa amet non metus ornare.
          </p>
        </div>
        <div className="flex justify-center items-center mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-28 gap-5 px-auto">
            <div className="lg:border-r-2 border-white text-white ">
              <img className="w-[92px] h-[64px]" src={img1} alt="" />
              <h2 className="text-4xl pt-7">Design</h2>
              <p className="lg:w-[296px] lg:h-[112px] text-justify pt-10">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et ut
                nunc, libero dolor, gravida. In metus, tortor, nunc sed egestas
                erat diam arcu.
              </p>
            </div>
            <div className="lg:pr-10 lg:border-r-2 border-white text-white">
              <img className="w-[92px] h-[64px]" src={img1} alt="" />
              <h2 className="text-4xl pt-7">Development</h2>
              <p className="lg:w-[296px] lg:h-[112px] text-justify pt-10">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et ut
                nunc, libero dolor, gravida. In metus, tortor, nunc sed egestas
                erat diam arcu.
              </p>
            </div>
            <div className=" border-rose-500 text-white">
              <img className="w-[92px] h-[64px]" src={img1} alt="" />
              <h2 className="text-4xl pt-7">Markting</h2>
              <p className="lg:w-[296px] lg:h-[112px] text-justify pt-10">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et ut
                nunc, libero dolor, gravida. In metus, tortor, nunc sed egestas
                erat diam arcu.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Details;

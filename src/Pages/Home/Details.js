import React from "react";
import logo1 from "../../assets/logoipsum-213.svg";
import logo2 from "../../assets/logoipsum-215.svg";
import logo3 from "../../assets/logoipsum-216.svg";
import logo4 from "../../assets/logoipsum-217.svg";
import img1 from "../../assets/window-maximize-regular.svg";
const Details = () => {
  return (
    <section className="w-[1340px] h-[1050px] bg-slate-700 rounded-lg mx-auto my-10">
      <div className="grid grid-cols-3  justify-center items-center px-[150px] pt-10">
        <div className="border-b-2"></div>

        <div>
          <h4 className="text-white text-3xl font-medium px-5">
            Trusted Companies
          </h4>
        </div>

        <div className="border-b-2"></div>
      </div>
      <div className="flex justify-around item-center py-10">
        <img className="" src={logo1} alt="" srcset="" />
        <img className="" src={logo2} alt="" srcset="" />
        <img className="" src={logo3} alt="" srcset="" />
        <img className="" src={logo4} alt="" srcset="" />
      </div>
      <div className="border-b-2 mx-10"></div>
      <div>
        <div className="grid lg:grid-cols-2 sm:grid-cols-1 justify-around items-center gap-20 px-20 py-20">
          <h2 className="text-6xl text-white leading-[80px]">
            Our services <br></br> that we provide
          </h2>
          <p className="text-white text-justify text-base w-[472px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et ut nunc,
            libero dolor, gravida. In metus, tortor, nunc sed egestas erat diam
            arcu. Laoreet orci nisl etiam risus ut nec. Facilisi ipsum viverra
            diam arcu massa amet non metus ornare.
          </p>
        </div>
        <div className="flex justify-center items-center mx-auto">
          <div className="grid grid-cols-3 gap-28  px-auto">
            <div className="border-r-2 bg-conic-to-t from-gray-900 via-gray-100 to-gray-900 text-white">
              <img className="w-[92px] h-[64px]" src={img1} alt="" />
              <h2 className="text-4xl pt-7">Design</h2>
              <p className="w-[296px] h-[112px] text-justify pt-10">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et ut
                nunc, libero dolor, gravida. In metus, tortor, nunc sed egestas
                erat diam arcu.
              </p>
            </div>
            <div className="pr-10 border-r-2 bg-conic-to-t from-gray-900 via-gray-100 to-gray-900 text-white">
              <img className="w-[92px] h-[64px]" src={img1} alt="" />
              <h2 className="text-4xl pt-7">Development</h2>
              <p className="w-[296px] h-[112px] text-justify pt-10">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et ut
                nunc, libero dolor, gravida. In metus, tortor, nunc sed egestas
                erat diam arcu.
              </p>
            </div>
            <div className=" border-rose-500 text-white">
              <img className="w-[92px] h-[64px]" src={img1} alt="" />
              <h2 className="text-4xl pt-7">Markting</h2>
              <p className="w-[296px] h-[112px] text-justify pt-10">
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

import React from "react";
import logoWhite from "../../assets/logo-white.svg";
import facebook from "../../assets/facebook.svg";
import instgram from "../../assets/square-instagram.svg";
import twitter from "../../assets/square-twitter.svg";
const Footer = () => {
  return (
    <footer className="w-[370px] lg:w-[1341px] lg:h-[641px] bg-slate-700 rounded-t-lg lg:mx-auto ">
      <div className="flex flex-col lg:flex-row justify-start lg:justify-evenly lg:items-center pt-10 lg:pt-20 lg:pb-10">
        <h2 className="text-white text-5xl lg:text-7xl lg:w-[474px] h-[173px] leading-[50px] lg:leading-[85px] px-5">
          Let’s work <br /> together
        </h2>
        <div className="w-[370px] lg:w-[474px] h-[173px]">
          <p className="text-white px-5 pb-5 text-justify">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et ut nunc,
            libero dolor, gravida. In metus, tortor, nunc sed egestas erat diam
            arcu.
          </p>
          <button className="btn btn-accent rounded-full mx-5">
            Let’s Talk
          </button>
        </div>
      </div>
      <div className="flex justify-center items-center pt-10 px-5">
        <div className=" grid grid-cols-2  lg:grid-cols-4 lg:gap-32 gap-10 sm:px-5">
          <div>
            <img
              className="w-[116px] h-[60px]"
              src={logoWhite}
              alt=""
              srcset=""
            />
            <div className="flex gap-2 pt-3">
              <img className="w-10" src={facebook} alt="" srcset="" />
              <img className="w-10" src={instgram} alt="" srcset="" />
              <img className="w-10" src={twitter} alt="" srcset="" />
            </div>
          </div>
          <div className="text-white">
            <p className="text-xl pb-5">Address</p>
            <p>
              0199 Taylor Park, <br /> North Dakota, USA
            </p>
          </div>
          <div className="text-white">
            <p className="text-xl pb-5">Call us on</p>
            <p>+1 98723 42023</p>
            <p>info@logoipsum.com</p>
          </div>
          <div className="text-white">
            <p className="text-xl pb-5">Our Policies</p>
            <p>
              Privacy Policy <br /> Terms of Use <br /> Refund Policy
            </p>
          </div>
        </div>
      </div>
      <div className="border-b-2 py-10 mx-14"></div>
      <p className="text-center pt-10 text-white">
        Copyright © Webalar. All Rights Reserved
      </p>
    </footer>
  );
};

export default Footer;

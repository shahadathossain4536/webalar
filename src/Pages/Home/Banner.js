import React from "react";
import banner from "../../assets/banner.jpg";
const Banner = () => {
  return (
    <section className="grid lg:grid-cols-2 sm:grid-cols-1   py-10 gap-10">
      <div>
        <h2 className="text-7xl pb-10">
          Let’s create <br></br> something great <br></br> together
        </h2>
        <p className="text-base pb-10">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Augue nec
          ultrices venenatis <br></br> in. Sed elit aenean mattis vulputate
          aliquet vitae.
        </p>
        <button className="btn btn-accent rounded-full lg:px-10">
          Let’s Talk
        </button>
      </div>
      <div className="lg:flex justify-end">
        <img
          className="lg:h-[500px] lg:w-[500px] sm:h-[200px] sm:w-[200px] rounded-lg"
          src={banner}
          alt=""
        />
      </div>
    </section>
  );
};

export default Banner;

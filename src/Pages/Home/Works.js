import React from "react";
import img1 from "../../assets/arch.jpg";
import img2 from "../../assets/arch.jpg";
import img3 from "../../assets/arch.jpg";
import arrow from "../../assets/circle-arrow-right-solid.svg";
const Works = () => {
  const projecstData = [
    {
      _id: "01",
      img: img1,
      description: "Project 1",
      details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      _id: "02",
      img: img2,
      description: "Project 2",
      details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      _id: "01",
      img: img3,
      description: "Project 3",
      details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
  ];
  return (
    <div>
      <h2 className="text-center text-7xl py-10">Our Works</h2>
      <section className="flex justify-center items-center pb-10">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-10">
          {projecstData.map((projectData) => (
            <div className="card w-[433px] h-[500px]bg-base-100 shadow-xl">
              <figure>
                <img src={projectData.img} alt="Shoes" />
              </figure>
              <div className="flex justify-around items-center py-10">
                <div>
                  <h2 className="text-2xl pb-3">{projectData.description}</h2>
                  <p>
                    Lorem ipsum dolor sit amet, <br></br> consectetur adipiscing
                    elit.
                  </p>
                </div>
                <div>
                  <img className="w-[60px]" src={arrow} alt="" srcset="" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <div className="text-center pb-10">
        <button className="btn btn-accent rounded-xl">View More</button>
      </div>
    </div>
  );
};

export default Works;

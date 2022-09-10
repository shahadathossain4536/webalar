import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import facebook from "../../assets/facebook.svg";
import instgram from "../../assets/square-instagram.svg";
import twitter from "../../assets/square-twitter.svg";
import { fromJSON } from "postcss";
const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ofilvjv",
        "template_a8hyan3",
        form.current,
        "NoATtRS-qFR8SEahP"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  return (
    <section className="py-10">
      <h1 className="text-3xl sm:text-center lg:text-7xl">Connect with us</h1>
      <div className="flex flex-col lg:flex-row justify-around items-center">
        <div className="lg:w-[773px] lg:h-[744px] bg-slate-700 rounded-xl my-10 ">
          <div className="text-white py-10 px-5">
            <h2 className="text-3xl pb-5">Tell us about your project</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cum
              lobortis mi vulputate potenti orci.
            </p>

            <form ref={form} onSubmit={sendEmail}>
              <div className="form-control w-full max-w-xs lg:max-w-[685px] py-5">
                <label className="label">
                  <span className="label-text text-white">Your name</span>
                </label>
                <input
                  type="text"
                  name="user_name"
                  className="input input-bordered bg-gray-900 text-white w-full max-w-full"
                />
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 pb-5">
                <div className="form-control w-full max-w-xs">
                  <label className="label">
                    <span className="label-text text-white">Your Email</span>
                  </label>
                  <input
                    type="email"
                    name="user_email"
                    className="input input-bordered bg-gray-900 text-white w-full max-w-full"
                  />
                </div>
                <div className="form-control w-full max-w-xs">
                  <label className="label">
                    <span className="label-text text-white">
                      Your Phone Number
                    </span>
                  </label>
                  <input
                    type="number"
                    name="user_number"
                    className="input input-bordered bg-gray-900 text-white w-full max-w-full"
                  />
                </div>
              </div>
              <div className="form-control w-full max-w-xs lg:max-w-[685px]">
                <label className="label">
                  <span className="label-text text-white">Your Message</span>
                </label>
                <input
                  type="text"
                  name="user_message"
                  className="textarea textarea-bordered h-32 bg-gray-900 text-white w-full max-w-full "
                />
              </div>
              <button
                className="btn btn-accent rounded-full px-10 mt-10"
                type="submit"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
        <div className="">
          <div className="border-b-2 border-black">
            <h5 className="text-3xl pb-5 ">Address</h5>
            <p className="pb-5">0199 Taylor Park, North Dakota, USA</p>
          </div>
          <div className="border-b-2 border-black pt-5">
            <h5 className="text-3xl pb-5 ">Call us on</h5>
            <p className="pb-5">+1 98723 42023</p>
            <p className="pb-5">info@logoipsum.com</p>
          </div>
          <div className="border-b-2 border-black pt-5">
            <h5 className="text-3xl pb-5 ">Social Media</h5>
            <div className="flex justify-start items-center gap-3 pb-5">
              <img className="w-[40px]" src={facebook} alt="" srcset="" />
              <img className="w-[40px]" src={instgram} alt="" srcset="" />
              <img className="w-[40px]" src={twitter} alt="" srcset="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

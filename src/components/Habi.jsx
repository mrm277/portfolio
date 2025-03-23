import React from "react";
import BackButton from "./Backbutton";
import habi_img from "../img/habi_img.png";

function Habi() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#7469B6] to-[#AD88C6] flex flex-col justify-center pt-4 pb-4 md:pt-0 md:pb-0">
      <div className="flex flex-col items-center justify-center px-4 md:px-0">
        <div className="flex flex-col md:flex-row max-w-screen-xl mx-auto items-center">
          <div className="w-full md:w-1/3 mb-4 md:mb-0">
            <BackButton />
            <img
              src={habi_img}
              alt="Habi"
              className="h-auto md:h-[35rem] mt-4"
            />
          </div>

          <div className="w-full md:w-2/3 md:ml-14 text-center md:text-left">
            <h1 className="text-3xl md:text-5xl text-white font-semibold mb-2">
              Habi
            </h1>
            <p className="text-base md:text-xl text-white mb-6 leading-relaxed">
              Habi is a mobile app designed to help users form habits and
              achieve their goals through positive reinforcement and continuous
              feedback. This project, developed in partnership with Blip, is a
              team effort involving two colleagues, where we focus on creating a
              seamless and engaging user experience.
            </p>

            <ul className="list-disc ml-6 mt-2 text-base md:text-xl text-white mb-6">
              <li className="mb-1">
                Took an active part in shaping the app's visual identity,
                working closely with my team to design cohesive and appealing
                interfaces
              </li>
              <li className="mb-1">
                Developed interactive prototypes and conducted user testing
                sessions to refine the design based on real feedback
              </li>
              <li className="mb-1">
                Made iterative improvements to ensure the app is user-friendly
                and accessible to a diverse audience
              </li>
              <li className="mb-1">
                Collaborated on integrating positive reinforcement mechanics to
                keep users motivated and engaged
              </li>
            </ul>
            <a
              href="https://habi-cbl.vercel.app/login"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#7469B6] mt-7 font-semibold border-white border-2 bg-white hover:bg-transparent hover:border-white hover:text-white px-4 py-2 rounded-md mr-4 mb-4 transition-all"
            >
              Try Habi
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Habi;

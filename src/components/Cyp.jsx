import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import BackButton from "./Backbutton";
import { faInvision } from "@fortawesome/free-brands-svg-icons";
import affinity_logo from "../img/affinity_logo.svg";
import cyp_vid from "../img/cyp_vid.mp4";
import Navbar from "./Navbar";

function Cyp() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#7469B6] to-[#AD88C6] flex flex-col justify-center pt-4 pb-4 md:pt-0 md:pb-0">
      <div className="flex flex-col items-center justify-center px-4 md:px-0">
        <div className="flex flex-col md:flex-row max-w-screen-xl mx-auto items-center">
          <div className="w-full md:w-1/3 mb-4 md:mb-0">
            <BackButton />
            <video
              src={cyp_vid}
              className="w-full h-auto"
              autoPlay
              muted
              loop
            ></video>
          </div>

          <div className="w-full md:w-2/3 md:ml-14 text-center md:text-left">
            <h1 className="text-3xl md:text-5xl text-white font-semibold mb-2">
              CLEAN YOUR PLANET!
            </h1>
            <div className="flex justify-center md:justify-start mb-2">
              <img src={affinity_logo} alt="aff" className="w-8 mr-2" />
              <FontAwesomeIcon
                icon={faInvision}
                className="text-white text-3xl mr-2"
              />
            </div>
            <p className="text-base md:text-xl text-white">
              This project is a prototype of an app that allows users to earn
              points by participating in planet cleaning activities. These
              points can be redeemed for coupons that are accepted at popular
              stores. This is a hypothetical project, developed for the
              Laboratório e Multimédia 1 course at Aveiro University. The
              prototypes were created using Affinity Designer and Invision.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Cyp;
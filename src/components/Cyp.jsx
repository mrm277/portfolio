import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import BackButton from "./Backbutton";
import { faInvision } from "@fortawesome/free-brands-svg-icons";
import affinity_logo from "../img/affinity_logo.svg";
import cyp_vid from "../img/cyp_vid.mp4";
import Navbar from "./Navbar";


function Cyp() {
  return (
    <div className="h-screen bg-gradient-to-b from-[#7469B6] to-[#AD88C6] flex flex-col  justify-center ">
    <div className="flex flex-col items-center justify-center">
    <div className="flex max-w-screen-xl mx-auto items-center">
            <div style={{ width: "30%" }}>
        <BackButton />
        <video
          src={cyp_vid}
          className=" w-[150rem] h-auto"
          autoPlay
          muted
          loop
        ></video>
      </div>

      <div className="ml-14" style={{ width: "70%" }}>
        <h1 className="text-5xl text-white font-semibold mb-2">
          CLEAN YOUR PLANET!
        </h1>
        <div className="flex mb-2">
          <img src={affinity_logo} alt="aff" className="w-8 mr-2" />
          <FontAwesomeIcon
            icon={faInvision}
            className="text-white text-3xl mr-2"
          />
        </div>
        <p className="text-xl text-white">
          This project is an application that enables users to earn points by
          participating in planet cleaning activities. These points can be
          redeemed for coupons that are accepted at popular stores. This is a
          hypothetical project, developed for a university course. The
          prototypes were created using Affinity Designer and Invision. Please
          note that these are only prototypes.
        </p>
      </div>
    </div>
  </div>
</div>
  );  
}
export default Cyp;

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import BackButton from "./Backbutton";
import tim_vid from "../img/mmf_vid.mp4";
import { faPhp } from "@fortawesome/free-brands-svg-icons";
import { faSquareJs } from "@fortawesome/free-brands-svg-icons";
import mysql_logo from "../img/mysql_logo.svg";
import Navbar from "./Navbar";

function Tim() {
  return (
<div className="h-screen bg-gradient-to-b from-[#7469B6] to-[#AD88C6]">
  <Navbar />    
    <div className="flex flex-col items-center justify-center">
    <div className="flex max-w-screen-xl mx-auto items-center">
            <div style={{ width: "30%" }}>
        <BackButton />
        <video
          src={tim_vid}
          className=" w-[150rem] h-auto"
          autoPlay
          muted
          loop
        ></video>
      </div>

      <div className="ml-14" style={{ width: "70%" }}>
        <h1 className="text-5xl text-white font-semibold">Top Indian Movies</h1>
        <div className="flex">
          <img src={mysql_logo} alt="myslq" className="w-10 mr-2" />
          <FontAwesomeIcon icon={faPhp} className="text-white text-3xl mr-2" />
          <FontAwesomeIcon
            icon={faSquareJs}
            className="text-white text-3xl mr-2"
          />
        </div>
        <p className="text-xl text-white">
          This was a mini project that I developed in college using PHP and
          MySQL. The project was about displaying the top Indian. The user could
          add movies to their watchlist. There are also diferent types of
          profiles for each user like admin, user, and editor. And they have
          diferenent functionalities.
        </p>
        </div>
        </div>
      </div>
    </div>
   );
}
export default Tim;

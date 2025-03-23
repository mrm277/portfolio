import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import BackButton from "./Backbutton";
import tim_vid from "../img/tim_vid.mp4";
import { faPhp } from "@fortawesome/free-brands-svg-icons";
import { faSquareJs } from "@fortawesome/free-brands-svg-icons";
import mysql_logo from "../img/mysql_logo.svg";
import Navbar from "./Navbar";

function Tim() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#7469B6] to-[#AD88C6] flex flex-col justify-center pt-4 pb-4 md:pt-0 md:pb-0">
      <div className="flex flex-col items-center justify-center px-4 md:px-0">
        <div className="flex flex-col md:flex-row max-w-screen-xl mx-auto items-center">
          <div className="w-full md:w-1/3 mb-4 md:mb-0">
            <BackButton />
            <video
              src={tim_vid}
              className="w-full h-auto"
              autoPlay
              muted
              loop
            ></video>
          </div>

          <div className="w-full md:w-2/3 md:ml-14 text-center md:text-left">
            <h1 className="text-3xl md:text-5xl text-white font-semibold mb-2">
              Top Indian Movies
            </h1>
            <div className="flex justify-center md:justify-start mb-2">
              <FontAwesomeIcon
                icon={faPhp}
                className="text-white text-3xl mr-2"
              />
              <img src={mysql_logo} alt="mysql" className="w-10 mr-2" />
            </div>
            <p className="text-base md:text-xl text-white">
              This was a mini project that I developed in college using PHP and
              MySQL. The project was about displaying the top Indian. The user
              could add movies to their watchlist. There are also different
              types of profiles for each user like admin, user, and editor. And
              they have different functionalities.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Tim;
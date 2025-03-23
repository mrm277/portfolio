import BackButton from "./Backbutton";
import mysql_logo from "../img/mysql_logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhp } from "@fortawesome/free-brands-svg-icons";
import { faSquareJs } from "@fortawesome/free-brands-svg-icons";
import prize_vid from "../img/prize_vid.mp4";

function Astroprize() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#7469B6] to-[#AD88C6] flex flex-col justify-center pt-4 pb-4 md:pt-0 md:pb-0">
      <div className="flex flex-col items-center justify-center px-4 md:px-0">
        <div className="flex flex-col md:flex-row max-w-screen-xl mx-auto items-center">
          <div className="w-full md:w-1/3 mb-4 md:mb-0">
            <BackButton />
            <video
              src={prize_vid}
              className="w-full h-auto"
              autoPlay
              muted
              loop
            ></video>
          </div>

          <div className="w-full md:w-2/3 md:ml-14 text-center md:text-left">
            <h1 className="text-3xl md:text-5xl text-white font-semibold mb-2">
              Astroprize
            </h1>
            <div className="flex justify-center md:justify-start mb-2">
              <FontAwesomeIcon
                icon={faSquareJs}
                className="text-white text-3xl mr-2"
              />
              <FontAwesomeIcon
                icon={faPhp}
                className="text-white text-3xl mr-2"
              />
              <img src={mysql_logo} alt="mysql" className="w-10 mr-2" />
            </div>
            <p className="text-base md:text-xl text-white">
              AstroData & Astro Prize was developed in collaboration with
              Porto's Planetarium. The challenge was to make the visits more
              interactive and immersive. The solution that my three colleagues
              and I found was a web app. Users can scan a QR code to learn
              more about the exhibitions they like, they can also play an
              interactive game that gives them shakes. Shakes can be opened by
              shaking the cellphone, and opening shakes may make people get
              prizes. The data about the visitors' preferences at the
              planetarium can be seen in AstroData. This project was developed
              in PHP. The database was created in MySQL. The front-end was
              developed in JavaScript, HTML, and CSS.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Astroprize;
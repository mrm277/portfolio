import BackButton from "./Backbutton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhp } from "@fortawesome/free-brands-svg-icons";
import { faSquareJs } from "@fortawesome/free-brands-svg-icons";
import mysql_logo from "../img/mysql_logo.svg";
import data_vid from "../img/data_vid.mp4";
import Navbar from "./Navbar";

function Astrodata() {
  return (
    <div className="h-screen bg-gradient-to-b from-[#7469B6] to-[#AD88C6] flex flex-col  justify-center ">
      <div className="flex flex-col items-center justify-center">
        <div className="flex max-w-screen-xl mx-auto items-center">
          <div style={{ width: "30%" }}>
            <BackButton />
            <video
              src={data_vid}
              className=" w-[150rem] h-auto"
              autoPlay
              muted
              loop
            ></video>
          </div>

          <div className="ml-14" style={{ width: "70%" }}>
            <h1 className="text-5xl text-white font-semibold mb-2"> Astrodata</h1>
            <div className="flex mb-2">
              <FontAwesomeIcon
                icon={faSquareJs}
                className="text-white text-3xl mr-2"
              />
              <FontAwesomeIcon
                icon={faPhp}
                className="text-white text-3xl mr-2"
              />
              <img src={mysql_logo} alt="myslq" className="w-10 mr-2" />
            </div>
            <p className="text-xl text-white">
              AstroData & Astro Prize was developed in collaboration with
              Porto's Planetarium. The challenge was to make the visits more
              interactive and immersive. The solution that my three colleagues
              and I found was a web app. Users can scan a QR code to learn more
              about the exhibitions they like, play a game, and even win prizes.
            
               You can find more about it Astroprize.
       
              The data about the visitors' preferences at the planetarium can be
              seen in AstroData. This is advantageous for the planetarium
              managers because it allows them to know where to invest. In
              addition, it is also possible to manage the works, the employees,
              and their roles, and validate the prizes for the participants.
              This project was developed in PHP. The database was created in
              MySQL. The front-end was developed in JavaScript, HTML, and CSS.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Astrodata;

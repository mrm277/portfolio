import BackButton from "./Backbutton";
import mysql_logo from "../img/mysql_logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhp } from "@fortawesome/free-brands-svg-icons";
import { faSquareJs } from "@fortawesome/free-brands-svg-icons";
import prize_vid from "../img/prize_vid.mp4";
import Navbar from "./Navbar";

function Astroprize() {
  return (
    <>
<div className="h-screen bg-gradient-to-b from-[#7469B6] to-[#AD88C6]">
  <Navbar />    
    <div className="flex flex-col items-center justify-center">
    <div className="flex max-w-screen-xl mx-auto items-center">
      <div style={{ width: "30%" }}>
        {" "}
        <BackButton />
        <video
          src={prize_vid}
          className=" w-[150rem] h-auto"
          autoPlay
          muted
          loop
        ></video>
      </div>

      <div className="ml-14" style={{ width: "70%" }}>
        <h1 className="text-5xl text-white font-semibold"> Astroprize</h1>
        <div className="flex">
          <img src={mysql_logo} alt="myslq" className="w-10 mr-2" />
          <FontAwesomeIcon icon={faPhp} className="text-white text-3xl mr-2" />
          <FontAwesomeIcon
            icon={faSquareJs}
            className="text-white text-3xl mr-2"
          />
        </div>
        <p className="text-xl text-white">
          AstroData & Astro Prize was developed in collaboration with Porto's
          Planetarium. The challenge was to make the visits more interactive and
          immersive. The solution that my three colleagues and I found was a web
          app. Users can scan a QR code to learn more about the exhibitions they
          like, they can also play a interactive game that gives them shakes,
          shakes cam be opened by shaking the cellphone, opening shakes may make
          people get prizes. The data about the visitors' preferences at the
          planetarium can be seen in AstroData.{" "}
          <a
            href="/astroprize"
            className="text-[#FFE6E6] hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Find more in Atrodata{" "}
          </a>{" "}
          This project was developed in PHP. The database was created in MySQL.
          The front-end was developed in JavaScript, HTML, and CSS.
        </p>
      </div>
      </div>
    </div>
  </div>
    </>

  );
}
export default Astroprize;

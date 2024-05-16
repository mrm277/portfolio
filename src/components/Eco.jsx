import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHtml5 } from "@fortawesome/free-brands-svg-icons";
import { faCss3Alt } from "@fortawesome/free-brands-svg-icons";
import { faSquareJs } from "@fortawesome/free-brands-svg-icons";
import eco_vid from "../img/eco_vid.mp4";
import BackButton from "./Backbutton";
import Navbar from "./Navbar";

function Eco() {
  return (
    <div className="h-screen bg-gradient-to-b from-[#7469B6] to-[#AD88C6] flex flex-col  justify-center ">
      <div className="flex flex-col items-center justify-center">
        <div className="flex max-w-screen-xl mx-auto items-center">
          <div style={{ width: "30%" }}>
            <BackButton />
            <video
              src={eco_vid}
              className=" w-[150rem] h-auto"
              autoPlay
              muted
              loop
            ></video>
          </div>

          <div className="ml-14" style={{ width: "70%" }}>
            <h1 className="text-5xl text-white font-semibold mb-2">
              Eco-Exploradores
            </h1>
            <div className="flex mb-2">
              <FontAwesomeIcon
                icon={faHtml5}
                className="text-white text-3xl mr-2"
              ></FontAwesomeIcon>
              <FontAwesomeIcon
                icon={faCss3Alt}
                className="text-white text-3xl mr-2"
              ></FontAwesomeIcon>
              <FontAwesomeIcon
                icon={faSquareJs}
                className="text-white text-3xl mr-2"
              ></FontAwesomeIcon>
            </div>
            <p className="text-xl text-white">
              Eco Exploradores is a project that was carried out in
              collaboration with two other colleagues for Laboratório Multimédia
              3 course, using JavaScript as the main technology. This project is
              a web page, designed for tablets, ideally located in a science
              center. The goal is to allow children and teenagers to explore
              information about our planet and learn more about sustainability.
              The page includes a game section and a test, allowing users to
              test their knowledge.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Eco;

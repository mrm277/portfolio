import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHtml5 } from "@fortawesome/free-brands-svg-icons";
import { faCss3Alt } from "@fortawesome/free-brands-svg-icons";
import { faSquareJs } from "@fortawesome/free-brands-svg-icons";
import eco_vid from "../img/eco_vid.mp4";
import BackButton from "./Backbutton";

function Eco() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#7469B6] to-[#AD88C6] flex flex-col justify-center pt-4 pb-4 md:pt-0 md:pb-0">
      <div className="flex flex-col items-center justify-center px-4 md:px-0">
        <div className="flex flex-col md:flex-row max-w-screen-xl mx-auto items-center">
          <div className="w-full md:w-1/3 mb-4 md:mb-0">
            <BackButton />
            <video
              src={eco_vid}
              className="w-full h-auto"
              autoPlay
              muted
              loop
            ></video>
          </div>

          <div className="w-full md:w-2/3 md:ml-14 text-center md:text-left">
            <h1 className="text-3xl md:text-5xl text-white font-semibold mb-2">
              Eco-Exploradores
            </h1>
            <div className="flex justify-center md:justify-start mb-2">
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
            <p className="text-base md:text-xl text-white">
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
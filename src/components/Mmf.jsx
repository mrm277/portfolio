import { faHtml5 } from "@fortawesome/free-brands-svg-icons";
import { faCss3Alt } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import BackButton from "./Backbutton";
import mmf_vid from "../img/mmf_vid.mp4";
import { faSquareJs } from "@fortawesome/free-brands-svg-icons";

function Mmf() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#7469B6] to-[#AD88C6] flex flex-col justify-center pt-4 pb-4 md:pt-0 md:pb-0">
      <div className="flex flex-col items-center justify-center px-4 md:px-0">
        <div className="flex flex-col md:flex-row max-w-screen-xl mx-auto items-center">
          <div className="w-full md:w-1/3 mb-4 md:mb-0">
            <BackButton />
            <video
              src={mmf_vid}
              className="w-full h-auto"
              autoPlay
              muted
              loop
            ></video>
          </div>

          <div className="w-full md:w-2/3 md:ml-14 text-center md:text-left">
            <h1 className="text-3xl md:text-5xl text-white font-semibold mb-2">
              Minimal Music Festival
            </h1>
            <div className="flex justify-center md:justify-start mb-2">
              <FontAwesomeIcon
                icon={faHtml5}
                className="text-white text-3xl mr-2"
              />
              <FontAwesomeIcon
                icon={faCss3Alt}
                className="text-white text-3xl mr-2"
              />
              <FontAwesomeIcon
                icon={faSquareJs}
                className="text-white text-3xl mr-2"
              />
            </div>
            <p className="text-base md:text-xl text-white">
              The "Minimal Music Festival" was a project developed using HTML,
              CSS, and Bootstrap for our Multimedia Laboratory 2 course. My
              three colleagues and I envisioned creating a minimalist music
              festival with an ecological focus. The unique aspect of our
              project was that the featured artists were our personal favorites.
              This concept allowed us to combine our passion for music with our
              commitment to environmental sustainability.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Mmf;
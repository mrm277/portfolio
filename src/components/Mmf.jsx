import { faHtml5 } from "@fortawesome/free-brands-svg-icons";
import { faCss3Alt } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import BackButton from "./Backbutton";
import mmf_vid from "../img/mmf_vid.mp4";
import { faSquareJs } from "@fortawesome/free-brands-svg-icons";

function Mmf() {
  return (
    <div className="h-screen bg-gradient-to-b from-[#7469B6] to-[#AD88C6] flex flex-col  justify-center ">
    <div className="flex flex-col items-center justify-center">
    <div className="flex max-w-screen-xl mx-auto items-center">
            <div style={{ width: "30%" }}>
        <BackButton />
        <video
          src={mmf_vid}
          className=" w-full h-auto"
          autoPlay
          muted
          loop
        ></video>
      </div>

      <div className="ml-14" style={{ width: "70%" }}>
        <h1 className="text-5xl text-white font-semibold mb-2">
          Minimal Music Festival
        </h1>
        <div className="flex mb-2">
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
        <p className="text-xl text-white">
          The "Minimal Music Festival" was a project developed using HTML, CSS,
          and Bootstrap for our Multimedia Laboratory 2 course. My three
          colleagues and I envisioned creating a minimalist music festival with
          an ecological focus. The unique aspect of our project was that the
          featured artists were our personal favorites. This concept allowed us
          to combine our passion for music with our commitment to environmental
          sustainability.
        </p>
        </div>
        </div>
      </div>
    </div>
  );
}
export default Mmf;

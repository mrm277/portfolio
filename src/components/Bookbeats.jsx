import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact } from "@fortawesome/free-brands-svg-icons";
import { faJs } from "@fortawesome/free-brands-svg-icons";
import BackButton from "./Backbutton";
import tailwindlogo from "../img/tailwindlogo.svg";
import book_vid from "../img/book_vid.mp4";

function BookBeats() {
  return (
    <div className="h-screen bg-gradient-to-b from-[#7469B6] to-[#AD88C6] flex flex-col  justify-center ">
 
    <div className="flex flex-col items-center justify-center">
    <div className="flex max-w-screen-xl mx-auto items-center">
      <div style={{ width: '30%' }}>
        <BackButton />
        <video
          src={book_vid}
          className=" w-full h-auto"
          autoPlay
          muted
          loop
        ></video>
      </div>

      <div className="ml-14" style={{ width: '70%' }}>
        <h1 className="text-5xl text-white font-semibold mb-2">BookBeats</h1>
        <div className="flex mb-2">
          <FontAwesomeIcon icon={faJs} className="text-white text-3xl mr-2" />
          <FontAwesomeIcon
            icon={faReact}
            className="text-white text-3xl mr-2"
          />
          <img src={tailwindlogo} alt="tailwind" className="w-10 mr-2" />
        </div>
        <p className="text-xl text-white">
          This project consists of a Web Application that allows users to
          explore a virtual library, select the books they have read, and add
          them to their reading list. Its distinguishing feature is that when a
          book is opened, related music is generated. This provides a unique
          experience for the user, allowing them to listen to music while
          reading the book or relive the experiences that the book provided
          through sound. For the implementation of this project, the APIs from
          Google Books, Spotify, and Firestore were also integrated.
        </p>
      </div>
        </div>
    </div>
  </div>
  );
}
export default BookBeats;

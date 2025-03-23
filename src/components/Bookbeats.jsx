import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact } from "@fortawesome/free-brands-svg-icons";
import { faJs } from "@fortawesome/free-brands-svg-icons";
import BackButton from "./Backbutton";
import tailwindlogo from "../img/tailwindlogo.svg";
import book_vid from "../img/book_vid.mp4";

function BookBeats() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#7469B6] to-[#AD88C6] flex flex-col justify-center pt-4 pb-4 md:pt-0 md:pb-0">
      <div className="flex flex-col items-center justify-center px-4 md:px-0">
        <div className="flex flex-col md:flex-row max-w-screen-xl mx-auto items-center">
          <div className="w-full md:w-1/3 mb-4 md:mb-0">
            <BackButton />
            <video
              src={book_vid}
              className="w-full h-auto"
              autoPlay
              muted
              loop
            ></video>
          </div>

          <div className="w-full md:w-2/3 md:ml-14 text-center md:text-left">
            <h1 className="text-3xl md:text-5xl text-white font-semibold mb-2">
              BookBeats
            </h1>
            <div className="flex justify-center md:justify-start mb-2">
              <FontAwesomeIcon
                icon={faJs}
                className="text-white text-3xl mr-2"
              />
              <FontAwesomeIcon
                icon={faReact}
                className="text-white text-3xl mr-2"
              />
              <img src={tailwindlogo} alt="tailwind" className="w-10 mr-2" />
            </div>
            <p className="text-base md:text-xl text-white">
              This project consists of a Web Application that allows users to
              explore a virtual library, select the books they have read, and
              add them to their reading list. Its distinguishing feature is that
              when a book is opened, related music is generated. This provides a
              unique experience for the user, allowing them to listen to music
              while reading the book or relive the experiences that the book
              provided through sound. For the implementation of this project,
              the APIs from Google Books, Spotify, and Firestore were also
              integrated.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default BookBeats;
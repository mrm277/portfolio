import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faIdCard } from "@fortawesome/free-solid-svg-icons";
import { Toaster } from "@/components/ui/sonner";
import { toast } from "sonner";
import meee from "../img/meee.png";
import Navbar from "./Navbar";
import { faEyeDropper } from "@fortawesome/free-solid-svg-icons";
import { faFilm } from "@fortawesome/free-solid-svg-icons";
import { faImage } from "@fortawesome/free-solid-svg-icons";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import aboutmeImg from "../img/aboutme-img.png";
import Mywork from "./Myworks";
import mysql_roda from "../img/mysql_roda.svg";
import react_roda from "../img/react_roda.svg";
import laravel_roda from "../img/laravel_roda.svg";
import tailwind_roda from "../img/tailwind_roda.svg";
import bootstrap_roda from "../img/bootstrap_roda.svg";
import js_roda from "../img/js_roda.svg";
import php_roda from "../img/php_roda.svg";

function Homepage() {
  const [textToCopy, setTextToCopy] = useState("mariarodrimonteiro@gmail.com");

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(textToCopy);
      toast("E-mail copied to clipboard!");
    } catch (err) {
      console.error("Falha ao copiar texto: ", err);
    }
  };

  return (
    <>
      <div className="h-screen bg-gradient-to-b from-[#7469B6] to-[#AD88C6] flex flex-col">
        <Navbar />

        <div className="flex flex-col md:flex-row items-center justify-center m-auto gap-8 px-4 md:px-0">
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-7xl font-bold text-white mb-8">
              Designing the future,
              <br className="hidden md:block" />
              writing line <br className="hidden md:block" />
              by line
            </h1>
            <div className="flex justify-center md:justify-start space-x-6 mt-4">
              <div className="group relative">
                <button
                  onClick={() =>
                    window.open(
                      "https://www.linkedin.com/in/mariaodriguesmonteiro",
                      "_blank"
                    )
                  }
                  className="hover:text-[#FFE6E6] hover:scale-110 rounded-xl"
                  aria-label="Visit my LinkedIn profile"
                >
                  <FontAwesomeIcon
                    className="text-3xl text-white"
                    icon={faLinkedinIn}
                  />
                </button>
                <span className="opacity-0 group-hover:opacity-100 absolute top-full bg-white text-black text-xs rounded py-1 px-2 left-1/2 transform -translate-x-1/2 mt-2 transition duration-200">
                  Visit my LinkedIn profile
                </span>
              </div>

              <div className="group relative">
                <button
                  onClick={handleCopy}
                  className="hover:text-[#FFE6E6] hover:scale-110"
                  aria-label="Copy my contact information"
                >
                  <FontAwesomeIcon
                    className="text-3xl text-white"
                    icon={faIdCard}
                  />
                </button>
                <span className="opacity-0 group-hover:opacity-100 absolute top-full bg-white text-black text-xs rounded py-1 px-2 left-1/2 transform -translate-x-1/2 mt-2 transition duration-200">
                  Copy my contact information
                </span>
              </div>
              <Toaster textToCopy={textToCopy} setTextToCopy={setTextToCopy} />
            </div>
          </div>
          <img
            src={meee}
            alt="maria"
            className="h-48 w-48 md:h-[27rem] md:w-[27rem] rounded-full transition-transform duration-500 ease-in-out transform hover:scale-110 hover:shadow-2xl shadow-2xl"
          />
        </div>
      </div>

      {/* THINGS I LIKE TO DO */}
      <div className="flex flex-col items-center w-full h-auto py-10 px-4">
        <h1 className="text-4xl md:text-6xl text-center font-bold text-[#AD88C6]">
          Things I like to do
        </h1>
        <p className="text-lg md:text-xl mt-3 mb-8 text-center">
          Basically everything I can do on my computer
        </p>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="flex flex-col text-center max-w-xs mx-auto">
            <FontAwesomeIcon
              icon={faEyeDropper}
              className="text-2xl mb-2 text-[#AD88C6]"
            />
            <h1 className="text-xl font-semibold">Design</h1>
            <p>
              Design is an art form with the power to unravel human
              complexities, perhaps that's why it has always resonated with me.
            </p>
          </div>
          <div className="flex flex-col text-center max-w-xs mx-auto">
            <FontAwesomeIcon
              icon={faCode}
              className="text-2xl mb-2 text-[#AD88C6]"
            />
            <h1 className="text-xl font-semibold">Development</h1>
            <p>
              I perceive programming as crafting a digital home from words, and
              when you gaze upon the finished product, you can bask in the pride
              of knowing you laid every brick from the ground up.
            </p>
          </div>
          <div className="flex flex-col text-center max-w-xs mx-auto">
            <FontAwesomeIcon
              icon={faImage}
              className="text-2xl mb-2 text-[#AD88C6]"
            />
            <h1 className="text-xl font-semibold">Photography</h1>
            <p>
              I've always had a penchant for photography, particularly the art
              of editing. I find joy in removing unwanted elements and
              especially in restoring old photographs that time has worn away.
            </p>
          </div>
          <div className="flex flex-col text-center max-w-xs mx-auto">
            <FontAwesomeIcon
              icon={faFilm}
              className="text-2xl mb-2 text-[#AD88C6]"
            />
            <h1 className="text-xl font-semibold">Video</h1>
            <p>
              As a child, I would record vlogs, news reports, and music videos
              on my mother's Nokia. Today, I enjoy learning new editing
              techniques.
            </p>
          </div>
        </div>
      </div>

      {/* ABOUT ME */}
      <div
        id="aboutme"
        className="relative flex flex-col md:flex-row items-center justify-center min-h-screen py-5 bg-[#fffaff] px-4"
      >
        <div className="w-full md:w-1/2 flex justify-center md:justify-end">
          <img
            src={aboutmeImg}
            alt="A selfie of Maria"
            className="w-auto h-64 md:h-[45rem]"
          />
        </div>
        <div className="w-full md:w-1/2 text-center md:text-left mt-8 md:mt-0">
          <h2 className="font-bold text-4xl md:text-7xl text-black mb-4">
            About <br />
            <span className="text-violet-400">me</span>
          </h2>
          <p className="text-lg md:text-xl">
            I embarked on a journey to Aveiro, driven by my curiosity about the
            expansive universe of technology. My passions lie in Web
            Development, UX/UI Design, and of course, the sweet indulgence of
            ice cream. I am drawn to domains where my creativity can intertwine
            with functionality, crafting intuitive and captivating digital
            experiences.
          </p>
        </div>
      </div>

      {/* SKILLS */}
      <div className="w-screen min-h-[25%] m-auto px-5 max-w-5xl flex flex-col py-10">
        <h2 className="text-4xl md:text-6xl font-bold text-center text-[#AD88C6]">
          What are my skills?
        </h2>
        <p className="text-black mt-2 text-center">
          My academic journey has equipped me with a strong foundation in web
          development, including both front-end and back-end technologies. I
          have honed my skills in HTML, CSS, JavaScript, and frameworks such as
          React and a bit of Laravel. I am also proficient in design tools such
          as Figma.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">
          <img src={js_roda} alt="JavaScript" className="w-20 h-20 mx-auto" />
          <img src={php_roda} alt="PHP" className="w-20 h-20 mx-auto" />
          <img src={react_roda} alt="React" className="w-20 h-20 mx-auto" />
          <img
            src={tailwind_roda}
            alt="Tailwind"
            className="w-20 h-20 mx-auto"
          />
          <img
            src={bootstrap_roda}
            alt="Bootstrap"
            className="w-20 h-20 mx-auto"
          />
          <img src={laravel_roda} alt="Laravel" className="w-20 h-20 mx-auto" />
          <img src={mysql_roda} alt="MySQL" className="w-20 h-20 mx-auto" />
        </div>
      </div>

      {/* MY WORKS */}
      <div id="projects" className="mt-10">
        <Mywork />
      </div>
    </>
  );
}

export default Homepage;

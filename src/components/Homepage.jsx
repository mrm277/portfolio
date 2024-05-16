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
  const [textToCopy, setTextToCopy] = useState("mariamonteiroes13@gmail.com");

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
      <div className="h-screen bg-gradient-to-b from-[#7469B6] to-[#AD88C6] flex flex-col ">
        <Navbar />

        <div className="flex items-center justify-center m-auto gap-8 place-content-center">
          <div className="">
            <h1 className="text-7xl font-bold text-white text-left">
              Designing the future,
              <br />
              writing <br />
              line by line
            </h1>
            <p className="text-white text-2xl mt-2">
              A student from Porto, at Aveiro University
            </p>
            {/* <p>From Porto to Aveiro </p> */}

            <div className="flex space-x-6 mt-2">
              <div className="group relative">
                <button
                  onClick={() =>
                    window.open(
                      "https://www.linkedin.com/in/mariaodriguesmonteiro",
                      "_blank"
                    )
                  }
                  className="hover:text-[#FFE6E6] hover:scale-110 rounded-xl"
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
            className="h-[27rem] w-[27rem] rounded-full transition-transform duration-500 ease-in-out transform hover:scale-110 hover:shadow-2xl shadow-2xl"
          />
        </div>
      </div>

      {/* THINGS I LIKE TO DO */}
      <div className="flex flex-col place-content-center items-center w-full h-[50%]">
        <h1 className="text-6xl text-center mt-28 font-bold text-[#AD88C6]">
          Things I like to do
        </h1>
        <p className="text-xl my-8">
          {" "}
          Basically everyting I can do in my computer
        </p>
        <div className="flex space-x-14 mx-4">
          <div className="flex flex-col text-center max-w-xs">
            <FontAwesomeIcon
              icon={faEyeDropper}
              className="text-2xl mb-2 text-[#AD88C6]"
            />
            <h1 className="text-xl font-semibold">Design</h1>
            <p>
              {" "}
              Design is an art form with the power to unravel human
              complexities, perhaps that's why it has always resonated with me.{" "}
            </p>
          </div>
          <div className="flex flex-col text-center max-w-xs">
            <FontAwesomeIcon
              icon={faCode}
              className="text-2xl mb-2 text-[#AD88C6]"
            />
            <h1 className="text-xl font-semibold text-stone-700">
              Development
            </h1>
            <p>
              {" "}
              I perceive programming as crafting a digital home from words, and
              when you gaze upon the finished product, you can bask in the pride
              of knowing you laid every brick from the ground up.{" "}
            </p>
          </div>
          <div className="flex flex-col text-center max-w-xs">
            <FontAwesomeIcon
              icon={faImage}
              className="text-2xl mb-2 text-[#AD88C6]"
            />
            <h1 className="text-xl font-semibold">Photography</h1>
            <p>
              {" "}
              I've always had a penchant for photography, particularly the art
              of editing. I find joy in removing unwanted elements and
              especially in restoring old photographs that time has worn away.
            </p>
          </div>
          <div className="flex flex-col text-center max-w-xs">
            <FontAwesomeIcon
              icon={faFilm}
              className="text-2xl mb-2 text-[#AD88C6]"
            />
            <h1 className="text-xl font-semibold">Video</h1>
            <p>
              {" "}
              As a child, I would record vlogs, news reports, and music videos
              on my mother's Nokia. Today, I enjoy learning new editing
              techniques. I've participated in the production of two short films
              and even started a degree in audiovisual arts!{" "}
            </p>
          </div>
        </div>
      </div>

      {/* ABOUT ME */}
      <div
        id="aboutme"
        className="relative flex items-center justify-center min-h-screen mt-28"
      >
        <div className="h-screen w-screen max-w-5xl flex items-center justify-start">
          <h2 className="absolute font-bold text-7xl text-black text-center mb-4 top-[16vh] left-[10vw]">
            About <span className="text-violet-400">me</span>
          </h2>
          <img src={aboutmeImg} alt="about me" className="w-auto h-[45rem]" />

          <p className="text">
            I embarked on a journey to Aveiro, driven by my curiosity about the
            expansive universe of technology. My passions lie in Web
            Development, UX/UI Design, and of course, the sweet indulgence of
            ice cream. I am drawn to domains where my creativity can intertwine
            with functionality, crafting intuitive and captivating digital
            experiences. I flourish in team environments, where diverse
            perspectives can come together to untangle complex problems. I
            believe that a together decision it's always a better decision. I am
            always eager to learn and discover new things. Above all, my
            ultimate motivation is the potential to make a positive imprint on
            people's lives through my work. Whether it's by designing a
            user-friendly interface or developing a website that fulfills a
            client's needs, I derive immense gratification from the knowledge
            that my work can help others.
          </p>
        </div>
      </div>

      {/* SKILLS */}
      <div className="w-screen min-h-[25%] m-auto max-w-5xl flex flex-col">
        <h2 className="text-6xl font-bold text-end text-[#AD88C6]">
          What are my skills?
        </h2>
        <p className="text-black mt-2 text-end">
          My academic journey has equipped me with a strong foundation in web
          development, including both front-end and back-end technologies. I
          have honed my skills in HTML, CSS, JavaScript, and frameworks such as
          React and a bit of Laravel. I am also proficient in design tools such
          as Figma.
        </p>

        <div className="flex justify-between text-center max-w-full space-x-4 m-10 end-0">
          <div className="flex-1">
            <img src={js_roda} alt="react" className="w-20 h-20 mx-auto" />
          </div>
          <div className="flex-1">
            <img src={php_roda} alt="react" className="w-20 h-20 mx-auto" />
          </div>
          <div className="flex-1">
            <img src={react_roda} alt="react" className="w-20 h-20 mx-auto" />
          </div>
          <div className="flex-1">
            <img
              src={tailwind_roda}
              alt="react"
              className="w-20 h-20 mx-auto"
            />
          </div>
          <div className="flex-1">
            <img
              src={bootstrap_roda}
              alt="react"
              className="w-20 h-20 mx-auto"
            />
          </div>
          <div className="flex-1">
            <img src={laravel_roda} alt="react" className="w-20 h-20 mx-auto" />
          </div>
          <div className="flex-1">
            <img src={mysql_roda} alt="react" className="w-20 h-20 mx-auto" />
          </div>
        </div>
      </div>
      {/* MY WORKS */}
      <div id="projects">
        <Mywork />
      </div>
    </>
  );
}

export default Homepage;

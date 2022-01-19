import {
  FaBootstrap,
  FaCss3Alt,
  FaGithub,
  FaHtml5,
  FaJsSquare,
  FaReact,
} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiTailwindcss } from "react-icons/si";
export default function TechPart() {
  return (
    <div className="mt-20">
      <h1 className="font-bold text-center my-8 text-6xl text-theme">
        {" "}
        Technologies I USE
      </h1>
      <div className="grid md:grid-cols-1 grid-cols-4">
        <FaJsSquare
          size={180}
          color="#F0DB4F"
          className="w-full text-center mt-20"
        />
        <FaReact
          size={180}
          color="#61DBFB"
          className="w-full text-center mt-20 animate-bounce"
        />
        <FaBootstrap
          size={180}
          color="#080135"
          className="mt-20 w-full text-center xl:animate-bounce 2xl:animate-bounce"
        />
        <FaHtml5
          size={180}
          color="#F06529"
          className="w-full text-center mt-20 md:animate-bounce"
        />
        <FaCss3Alt
          size={180}
          color="#264de4"
          className="w-full text-center mt-20 md:animate-bounce"
        />
        <SiTailwindcss
          size={180}
          color="#93c5fd "
          className="mt-20 w-full text-center md:animate-bounce"
        />
        <IoLogoJavascript
          size={180}
          color="#323330"
          className="mt-20 w-full text-center"
        />
        <FaGithub
          size={180}
          color="#171515"
          className="mt-20 w-full text-center animate-bounce"
        />
      </div>
    </div>
  );
}

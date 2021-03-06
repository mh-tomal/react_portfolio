import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const [showMenu, setShowMenu] = useState("md:hidden");
  const [showMenuS, setShowMenuS] = useState("sm:hidden");
  const location = useLocation();
  console.log(location);

  const manuItems = [
    {
      title: "Home",
      key: "/",
    },
    {
      title: "Projects",
      key: "/projects",
    },
    {
      title: "Contact",
      key: "/contact",
    },
  ];

  const pathname = location.pathname;

  return (
    <div className="text-white fixed inset-0 z-50">
      <div
        className={`flex bg-theme justify-between items-center p-2 shadow-lg ${
          showMenu !== "md:hidden" && "md:flex-col"
        }`}
      >
        <div className="flex justify-between w-full">
          <h1 className="text-4xl font-mont font-semibold">M.Hasan</h1>

          <FaBars
            onClick={() => {
              if (showMenu === "md:hidden") {
                setShowMenu("");
              }

              if (showMenuS === "sm:hidden") {
                setShowMenuS("");
              } else {
                setShowMenu("md:hidden");
                setShowMenuS("sm:hidden");
              }
            }}
            className="lg:hidden xl:hidden 2xl:hidden md:flex h-10 w-5 hover:w-6 hover:text-orange-300 cursor-pointer"
          ></FaBars>
        </div>

        <div className="flex  sm:hidden md:hidden">
          {manuItems.map((item) => {
            return (
              <li
                className={`list-none mx-5 px-5 hover:text-cyan-600  ${
                  item.key === pathname &&
                  "bg-white text-black rounded-md px-5 hover:text-black"
                }`}
              >
                <Link to={`${item.key}`}>{item.title}</Link>
              </li>
            );
          })}
        </div>

        <div
          className={`md:flex sm:flex items-start justify-start w-full flex-col lg:hidden 2xl:hidden xl:hidden mt-5  ${showMenu} ${showMenuS}`}
        >
          {manuItems.map((item) => {
            return (
              <li
                className={` list-none my-2 p-1 hover:text-cyan-600 ${
                  item.key === pathname &&
                  "bg-white text-black rounded-md p-1 hover:text-black"
                }`}
              >
                <Link to={`${item.key}`}>{item.title}</Link>
              </li>
            );
          })}
        </div>
      </div>
    </div>
  );
}

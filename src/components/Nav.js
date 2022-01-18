import { useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [showMenu, setShowMenu] = useState("md:hidden");
  //const[mobileView, setMobileView]= useState('md:hidden');

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

  const pathname = window.location.pathname;
  console.log(pathname);

  return (
    <div className="text-white ">
      <div
        className={`flex bg-theme justify-between items-center p-2 shadow-lg ${
          showMenu !== "md:hidden" && "flex-col"
        }`}
      >
        <div className="flex justify-between w-full">
          <h1 className="text-4xl font-mont font-semibold">M.Hasan</h1>
          <button
            onClick={() => {
              if (showMenu === "md:hidden") {
                setShowMenu("");
              } else {
                setShowMenu("md:hidden");
              }
            }}
            className="lg:hidden xl:hidden 2xl:hidden md:flex"
          >
            Menu
          </button>
        </div>

        <div className="flex md:hidden">
          {manuItems.map((item) => {
            return (
              <li
                className={`list-none mx-5 px-5 ${
                  item.key === pathname && "bg-white text-black rounded-md"
                }`}
              >
                <Link to={`${item.key}`}>{item.title}</Link>
              </li>
            );
          })}
        </div>

        <div
          className={`md:flex items-start justify-start w-full flex-col lg:hidden 2xl:hidden xl:hidden  ${showMenu}`}
        >
          {manuItems.map((item) => {
            return (
              <li className=" list-none my-2">
                <Link to={`${item.key}`}>{item.title}</Link>
              </li>
            );
          })}
        </div>
      </div>
    </div>
  );
}

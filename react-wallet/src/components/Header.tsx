import DefaultButton from "./DefaultButton";
import logo from "../media/logo.svg";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import AboutPage from "../pages/Tickets";
import HomePage from "../pages/HomePage";
import MainPage from "./MainPage";

const Header = () => {
  return (
    <div
      className="flex justify-between z-[3]"
      style={{
        position: "fixed",
        width: "100%",
        marginTop: "20px",
      }}
    >
      <Link to="/" style={{ textDecoration: "none" }}>
        <div className="flex ml-[30px]">
          <img src={logo} className="relative" />
          <h1 className="text-[40px] text-white font-goldman ml-[5px] mt-[10px]">
            SolCinema
          </h1>
        </div>
      </Link>
      <nav className="flex flex-row items-center justify-start gap-[13px] mr-[50px]">
        <Link to="cinema">
          <DefaultButton label="Cinema" />
        </Link>
        <Link to="howto">
          <DefaultButton label="How to play" />
        </Link>
        <Link to="faq" style={{ textDecoration: "none" }}>
          <div className="flex cursor-pointer items-start justify-start text-button_text text-[18px] mx-[13px]">
            FAQ
          </div>
        </Link>
        <button className="cursor-pointer px-[22px] py-[11px] bg-seagreen-300 flex-1 rounded-[12.64px] [backdrop-filter:blur(55.81px)] box-border overflow-hidden flex flex-row items-center justify-center min-w-[123px] whitespace-nowrap z-[7] border-[3.8px] border-solid border-paleturquoise hover:bg-seagreen-200 hover:box-border hover:border-[3.8px] hover:border-solid hover:border-mediumaquamarine">
          <div className="h-[27px] relative text-2xl font-medium font-ibm-plex-sans text-paleturquoise text-left inline-block">
            Connect wallet{" "}
          </div>
        </button>
      </nav>
    </div>
  );
};

export default Header;

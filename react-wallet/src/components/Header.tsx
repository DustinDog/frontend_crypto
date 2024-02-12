import "./header.css";

import DefaultButton from "./DefaultButton";
import logo from "../media/logo.svg";
import { Link } from "react-router-dom";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";

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
        <WalletMultiButton />
      </nav>
    </div>
  );
};

export default Header;

import { FunctionComponent } from "react";

import grayLogo from "../media/graylogo.svg";
import gradient from "../media/gradient.svg";
import curtain from "../media/curtain1.svg";


const MainPage: FunctionComponent = () => {
  return (
    <div>
      <div
        className="z-[4] h-dvh w-full  bg-cover bg-center mix-blend-luminosity"
        style={{
          backgroundImage: `url(${gradient})`,

          backgroundBlendMode: "multiply",
          backgroundColor: "white",
        }}
      >
        <div>
          <img
            className="h-full fixed top-0 object-contain z-[2]  mix-blend-luminosity"
            src={curtain}
            style={{ zIndex: 2, display: "block" }} // Add this line
          />
          <img
            className="h-full fixed top-0 right-0  z-[2] transform -scale-x-100 mix-blend-luminosity"
            src={curtain}
          />
        </div>

        <div className="grid justify-center items-center pt-[200px] gap-[80px]">
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              position: "relative",
            }}
          >
            <img src={grayLogo} alt="Logo" style={{ width: "150px" }} />
            <div
              style={{
                position: "absolute",
                color: "#FFF",
                textShadow: "0px 0px 25px rgba(254, 255, 254, 0.50)",
                fontFamily: "Goldman",
                fontSize: "80px",
                fontStyle: "normal",
                fontWeight: 700,
                lineHeight: "normal",
                letterSpacing: "-3.2px",
              }}
            >
              SolCinema
            </div>
          </div>
          <div className="grid justify-center items-center w-full">
            <div
              style={{
                // background:
                //   "linear-gradient(to right, rgba(255, 255, 255, 1), rgba(0, 0, 0, 1))",

                width: "80vw",
                height: "303px",
                opacity: "0.33",
                borderRadius: "60px",
                mixBlendMode: "overlay",
                backdropFilter: "blur(25px)",
                background: "rgba(255, 255,255, 0.4)",
                border: "6px solid white", // Lighter border color
              }}
            ></div>

            <div
              style={{
                width: "60vw",
                // background: "#FFF",
                position: "absolute",
                paddingLeft: "180px",
                fontSize: "30px",
                fontFamily: "IBM Plex Sans",
                fontStyle: "normal",
                fontWeight: 400,
                lineHeight: "normal",
                color: "white",
              }}
            >
              <span style={{ color: "#36F2BC", fontWeight: 600 }}>
                SolCinema
              </span>{" "}
              is a cinematic game built on the Solana blockchain, which allows
              you to earn{" "}
              <span style={{ color: "#3AFFC4", fontWeight: 400 }}>$SOL</span>{" "}
              for participating in the show. Our cinema is built on the system
              of “The earlier you came, the more you earned.” All visitors can
              earn{" "}
              <span style={{ color: "#3AFFC4", fontWeight: 400 }}>
                up to 500%
              </span>{" "}
              depending on demand for the show. We offer all participants fair
              conditions for earning solana according to the above system. Let's
              explore the cinema together.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;

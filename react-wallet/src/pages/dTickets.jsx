import { Link } from "react-router-dom";
import bg1 from "../media/tickets1bg.svg";
import mid1 from "../media/mid1.svg";
import mid2 from "../media/mid2.svg";
import priceIcon from "../media/priceIcon.svg";
import cinema from "../media/cinemaTheater.svg";
import cinemaTheater from "../media/backCinema.svg";

import curtain from "../media/openedCurtains.svg";
import ClosedCurtainTicket from "../components/ClosedCurtainTicket";

function Tickets() {
  return (
    <div
      style={{
        maxWidth: "100%",
        // overflowX: "hidden",
      }}
    >
      <div
        className="bg-cover"
        style={{
          overflowX: "hidden",
          width: "100%",
          height: "100vh",
          backgroundImage: `url(${bg1})`,
          backgroundColor: "white",
          display: "flex",
          flexDirection: "column",
          gap: "80px",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "50px",
            backgroundBlendMode: "overlay",
            borderRadius: "60px",
            width: "1250px",
            height: "350px",
            color: "white",
            backdropFilter: "blur(20px)",
            border: "6px solid rgba(164, 255, 235, 0.05)",
            fontFamily: "IBM Plex Sans",
            fontSize: "55px",
            fontWeight: "600",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div style={{}}>Lorem Ipsum is that it has a more-or-less</div>
          <div style={{ fontWeight: "300", fontSize: "30px" }}>
            Lorem ipsum dolor sit amet.
          </div>
        </div>
        <div style={{ display: "grid", gap: "20px" }}>
          <button
            style={{
              cursor: "pointer",
              backgroundColor: "seagreen",
              backdropFilter: "blur(50px)",
              background: "rgb(11, 113, 121)",
              width: "300px",
              border: "5px solid #0DA6C8",
              borderRadius: "20px",
            }}
          >
            <div
              style={{
                fontSize: "30px",
                fontWeight: "500",
                fontFamily: "IBM Plex Sans Hebrew",
                color: "rgba(4, 206, 174, 1)",
                padding: "10px",
              }}
            >
              Choose a ticket
            </div>
          </button>
          <div
            style={{
              textAlign: "center",
              fontFamily: "IBM Plex Sans",
              fontWeight: "300",
              fontSize: "20px",
              lineHeight: "26px",
            }}
          >
            <Link
              to="/faq"
              style={{
                color: "rgba(255, 255, 255, 0.5)",
              }}
            >
              Learn the rules
            </Link>
          </div>
        </div>
      </div>
      <div style={{ height: "900px" }}>
        <div
          style={{
            width: "375px",
            height: "300px",
            position: "relative",
            borderRadius: "15px",
            // backgroundImage:
            //   "linear-gradient(85.44deg, #01403a -11.9%, #03887c 48.16%, #01403a 111.73%)",
            borderImageSlice: "1",
            background: "white",
            position: "relative",
            // background: "rgba(0, 209, 255, 1)",

            overflow: "hidden",
          }}
        >
          <div
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
              borderRadius: "15px",
              background: `
          url(${curtain}) ,url(${cinema}) `,
              backgroundBlendMode: "luminosity,normal", // Set the blend mode for each background image
              backgroundSize: "cover",
              backgroundPosition: "center",
              zIndex: "1",
            }}
          />
          <div
            style={{
              position: "absolute",
              width: "100%",
              backgroundSize: "cover",
              height: "100%",
              borderRadius: "15px",
              background: `
              url(${cinemaTheater}) `,
              // backgroundSize: "cover",

              backgroundPosition: "0px",
              backgroundBlendMode: "luminosity",
              // backgroundRepeat: "no-repeat",
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default Tickets;

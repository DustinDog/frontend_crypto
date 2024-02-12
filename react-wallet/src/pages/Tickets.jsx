import { Link } from "react-router-dom";
import bg1 from "../media/tickets1bg.svg";
import mid_bg from "../media/mid_bg.png";

import ClosedCurtainTicket from "../components/ClosedCurtainTicket";
import OpenCurtains from "../components/OpenedCurtains";

function Tickets() {
  return (
    <div style={{}}>
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
      <div
        style={{
          // width: "100vw",
          height: "2000px",
          display: "flex",
          flexDirection: "column",
          backgroundImage: `url(${mid_bg})`,
          // background: "#ffffff",
          // background: "linear-gradient(#001816,#001A18)",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",

            justifyContent: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div
              style={{
                height: "500px",
                display: "flex",
                gap: "50px",
              }}
            >
              <OpenCurtains />
              <OpenCurtains is_opened={false} />
              <ClosedCurtainTicket />
            </div>
            <div
              style={{
                height: "500px",
                display: "flex",
                gap: "50px",
              }}
            >
              <ClosedCurtainTicket />
              <ClosedCurtainTicket />
              <ClosedCurtainTicket />
            </div>
            <div
              style={{
                height: "500px",
                display: "flex",
                gap: "50px",
              }}
            >
              <ClosedCurtainTicket />
              <ClosedCurtainTicket />
              <ClosedCurtainTicket />
            </div>
          </div>
        </div>
        <div
          style={{
            fontFamily: "IBM Plex Sans",
            fontSize: "25px",
            width: "900px",
            height: "250px",
            padding: "6px",
            borderRadius: "15px",
            backgroundImage:
              "linear-gradient(85.44deg, #01403a -11.9%, #03887c 48.16%, #01403a 111.73%)",
            borderImageSlice: "1",

            overflow: "hidden",
          }}
        >
          <div
            style={{
              width: "100%",
              height: "100%",
              borderRadius: "15px",
              border: "0px solid transparent",
              backgroundColor: "#002925",
              backgroundSize: "cover",
              justifyContent: "center",
              alignItems: "center",
              display: "flex",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "25px",
                width: "700px",
              }}
            >
              <div style={{ display: "flex", color: "white", gap: "20px" }}>
                <div style={{ padding: "10px" }}>Referral link:</div>

                <div
                  style={{
                    width: "500px",
                    height: "40px",
                    borderRadius: "15px",
                    padding: "4px",
                    backgroundImage:
                      "linear-gradient(85.44deg, #01403a -11.9%, #00725c 48.16%, #01403a 111.73%)",
                    borderImageSlice: "1",

                    overflow: "hidden",
                  }}
                >
                  <div
                    style={{
                      width: "100%",
                      height: "100%",
                      borderRadius: "15px",
                      border: "0px solid transparent",
                      backgroundColor: "#003a2f",
                    }}
                  >
                    <div style={{ padding: "5px" }}>
                      https://www.solcinema.com/ref/HkdEY62
                    </div>
                  </div>
                </div>
              </div>
              <div style={{ color: "rgba(144, 232, 210, 1)" }}>
                Feel free to invite your friends to come see your favourite
                show! You will receive up to 25% of your referral’s purchased
                tickets.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tickets;

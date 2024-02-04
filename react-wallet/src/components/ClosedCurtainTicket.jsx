import React from 'react';
import priceIcon from "../media/priceIcon.svg";
import closed from "../media/closedCurtain.svg";

const ClosedCurtainTicket = () => {
    return (
      <div
          style={{
            width: "300px",
            height: "300px",
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
              backgroundColor: "#049F88",
              backgroundImage: `url(${closed})`,
              backgroundBlendMode: "luminosity",

              backgroundSize: "cover",
              display: "flex",
            }}
          >
            <div
              style={{
                borderRadius: "15px",
                backdropFilter: "blur(3px)",
                width: "100%",
                height: "100%",
              }}
            >
              <div
                style={{
                  width: "90px",
                  height: "40px",
                  padding: "0px 6px 6px 0px",

                  borderRadius: "10px 0px 10px 0px",
                  backgroundImage:
                    "linear-gradient(160.44deg, #01403a 20.9%, #03887c 100.16%, #01403a 12.73%)",
                }}
              >
                <div
                  style={{
                    width: "100%",
                    height: "100%",
                    borderRadius: "10px 0px 10px 0px",
                    display: "flex",
                    fontFamily: "Goldman",
                    fontSize: "32px",
                    lineHeight: "38.4px",
                    fontWeight: "300",
                    // color: "#FFFFFFB2", // real color
                    color: "white",
                    textShadow: "0px 4px 3px #0000004D",
                    backdropFilter: "blur(30px)",
                  }}
                >
                  <img
                    src={priceIcon}
                    style={{
                      fill: "#FFFFFFB2",
                      width: "30px",
                      height: "26px",
                      padding: "9px 0px 0px 2px",
                    }}
                  />

                  <span>56</span>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  width: "100%",
                  height: "200px",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <button
                  style={{
                    cursor: "pointer",
                    backgroundColor: "seagreen",
                    background: "#04A48D",
                    width: "160px",
                    border: "3px solid #06DBBE",
                    borderRadius: "10px",
                  }}
                >
                  <div
                    style={{
                      fontSize: "25px",
                      fontFamily: "IBM Plex Sans Hebrew",
                      color: "#05EEC9",
                    }}
                  >
                    Buy a ticket
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
    );
};

export default ClosedCurtainTicket;

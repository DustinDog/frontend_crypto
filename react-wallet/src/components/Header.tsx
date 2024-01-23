import { FunctionComponent } from "react";
import FrameComponent from "../components/FrameComponent";
import logo from "../media/logo.svg";
import grayLogo from "../media/graylogo.svg";
import curtain1 from "../media/curtain1.svg";
import curtain2 from "../media/curtain2.svg";
import bg1 from "../media/bg1.png";


const SolCinema: FunctionComponent = () => {
  return (
    <div className="w-full relative bg-gray-200 overflow-hidden flex flex-row items-center justify-center tracking-[normal] text-left text-[80px] text-white font-goldman">
      
      <div className="flex-1 flex flex-col items-center justify-start pt-0 px-0 pb-[167px] box-border relative gap-[6px] mq450:pb-[71px]">
          

        

        <FrameComponent />
        </div>

        </div>)
        {/* <div className="w-[1530px] h-[1183px] absolute my-0 mx-[!important] bottom-[-201px] ">
        <img
              className="h-full relative object-contain z-[4]"
              src={curtain1}
            />
          <div className="absolute top-[546px] left-[178px] [backdrop-filter:blur(50px)] w-[1172px] h-[303px] z-[2]">
            <div className="absolute top-[0px] left-[0px] rounded-41xl bg-white w-full h-full opacity-[0.33] mix-blend-overlay" />
            <div className="absolute top-[0px] left-[0px] rounded-41xl box-border w-full h-full mix-blend-overlay z-[1] border-[6px] border-solid border-gray-100" />
          </div>
          <img
            className="fill-green absolute h-full top-[0px] bottom-[0px] left-[803px] object-cover z-[4]"
            loading="eager"
            alt=""
            src={curtain2}
          />
          <div className="absolute top-[0px] left-[0px] w-[727px] flex flex-row items-start justify-start max-w-full">
            <div className="h-[942px] w-[1507px] my-0 mx-[!important] absolute top-[0px] right-[-790px] overflow-hidden shrink-0 flex flex-row items-start justify-start">
              <div className="self-stretch flex-1 bg-gray-200 flex flex-col items-start justify-start pt-0 px-0 pb-0 box-border max-w-full">
                <div className="self-stretch relative flex items-center justify-center">
                  <img
                    className="self-stretch max-w-full overflow-hidden max-h-full object-contain absolute left-[0px] top-[471px] w-full h-full [transform:scale(9420)]"
                    alt=""
                    src="/image.svg"
                  />
                </div>
                <div className="self-stretch flex-1 [background:linear-gradient(180deg,_#001615,_rgba(0,_23,_21,_0))] [transform:_rotate(-180deg)] z-[1]" />
                
              </div>
              
            
            </div>
            
          </div>
          <img
            className="absolute top-[152px] left-[555px] w-[390.3px] h-[374.1px] object-contain z-[7]"
            alt=""
            src={grayLogo}
          />
        </div>
        <div className="w-[959px] flex flex-col items-center justify-start py-0 px-5 box-border gap-[194px] max-w-full mq700:gap-[48px] mq975:gap-[97px]">
          <div className="w-[451px] flex flex-row items-start justify-start py-0 pr-2 pl-0 box-border max-w-full">
            <h1 className="m-0 flex-1 relative text-inherit tracking-[-0.04em] font-bold font-inherit inline-block [text-shadow:0px_0px_25px_rgba(254,_255,_254,_0.5)] mix-blend-normal max-w-full z-[8] mq450:text-5xl mq975:text-21xl">
              SolCinema
            </h1>
          </div>
          <h2 className="m-0 self-stretch h-[234px] relative text-11xl inline-block z-[3] text-aquamarine-200 font-ibm-plex-sans mq450:text-lg mq975:text-5xl">
            <span className="font-semibold">SolCinema</span>
            <span className="text-white">
              <span className="text-white">{` is a cinematic game built on the Solana blockchain, which allows you to earn `}</span>
              <span className="text-aquamarine-100">$SOL</span>
              <span className="text-white">{` for participating in the show. Our cinema is built on the system of “The earlier you came, the more you earned.” All visitors can earn `}</span>
              <span className="text-aquamarine-200">up to 500%</span>
              <span>
                {" "}
                depending on demand for the show. We offer all participants fair
                conditions for earning solana according to the above system.
                Let's explore the cinema together.
              </span>
            </span>
          </h2>
        </div>
      </div>
    </div> */}
  // );
};

export default SolCinema;

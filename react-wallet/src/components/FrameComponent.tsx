import DefaultButton from "./DefaultButton";
import logo from "../media/logo.svg";



const FrameComponent = () => {
  return (
    <div className="flex justify-between">
      <div className="flex ml-[30px]">
        <img src={logo} className="relative"/>
        <h1 className="text-31xl text-black font-goldman ml-[5px]">
        SolCinema
      </h1>
      </div>
      <nav className="flex flex-row items-center justify-start gap-[13px] mr-[50px]">
        <DefaultButton label="Cinema" />
        <DefaultButton label="How to play" /> 
        <div className="flex flex-col items-start justify-start text-button_text" >
           FAQvj.kvlb.
         </div>
         <button className="cursor-pointer px-[22px] py-[11px] bg-seagreen-300 flex-1 rounded-[12.64px] [backdrop-filter:blur(55.81px)] box-border overflow-hidden flex flex-row items-center justify-center min-w-[123px] whitespace-nowrap z-[7] border-[3.8px] border-solid border-paleturquoise hover:bg-seagreen-200 hover:box-border hover:border-[3.8px] hover:border-solid hover:border-mediumaquamarine">
           <div className="h-[27px] relative text-2xl font-medium font-ibm-plex-sans text-paleturquoise text-left inline-block">
             Connect wallet           </div>
        </button>

      </nav>
    </div>
  );
};

export default FrameComponent;


 {/* <img
          className="h-full relative object-contain z-[4]"
          src={curtain1} /> */}

    {/* <img
          className="absolute h-full top-[0px] bottom-[0px] left-[803px] object-cover z-[4]"
          src={curtain2}
        /> */}
import DefaultButton from "./DefaultButton";
const FrameComponent = () => {
  return (
    <div className="flex flex-row items-center justify-between">
      <h1 className="text-31xl text-white font-goldman">
        SolCinema
      </h1>
      <nav className="flex flex-row items-center justify-start gap-[13px]">
        <DefaultButton label="Cinema" />
        <DefaultButton label="How to play" />
        <div className="flex flex-col items-start justify-start" >
           FAQ
         </div>
        
        
        <button className="cursor-pointer pt-3 pb-2.5 pr-3.5 pl-[18px] bg-seagreen-300 flex-1 rounded-[12.64px] [backdrop-filter:blur(55.81px)] box-border overflow-hidden flex flex-row items-center justify-center min-w-[123px] whitespace-nowrap z-[7] border-[3.8px] border-solid border-paleturquoise hover:bg-seagreen-200 hover:box-border hover:border-[3.8px] hover:border-solid hover:border-mediumaquamarine">
           <div className="h-[27px] relative text-2xl font-medium font-ibm-plex-sans text-paleturquoise text-left inline-block">
             Connect wallet           </div>
        </button>

      </nav>
    </div>
  );
};

export default FrameComponent;

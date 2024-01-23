

type CustomButtonProps = {
    label: string;
};

const CustomButton = ({ label }: CustomButtonProps) => {
  return (
    <button className="cursor-pointer pt-2 pb-[7px] pr-[51px] pl-[17px] bg-seagreen-100 flex-1 rounded-[11.33px] [backdrop-filter:blur(50px)] overflow-hidden  items-center justify-start z-[7] border-[3.4px] border-solid border-paleturquoise">
      <div className="w-[63px] flex flex-row items-start justify-start py-0 px-0 box-border">
        <div className="relative text-lg font-medium font-ibm-plex-sans-hebrew text-paleturquoise text-left shrink-0">
          {label}
        </div>
      </div>
    </button>
  );
};

export default CustomButton;

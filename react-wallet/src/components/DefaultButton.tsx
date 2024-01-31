

type CustomButtonProps = {
    label: string;
};

const CustomButton = ({ label }: CustomButtonProps) => {
  return (
    <div>
      <button className="cursor-pointer pt-[7px] pb-[7px] pl-[17px] pr-[17px] bg-seagreen-100 flex-1 rounded-[11.33px] [backdrop-filter:blur(50px)] overflow-hidden justify-start z-[7] border-[3.4px] border-solid border-paleturquoise">
          <div className="relative text-lg font-medium font-ibm-plex-sans-hebrew text-paleturquoise text-left shrink-0">
            {label}
          </div>
          
      </button>
    </div>
  );
};

export default CustomButton;

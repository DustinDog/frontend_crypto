import grayLogo from "../media/graylogo.svg";
import faqgradient from "../media/faqgradient.svg";
import curtain from "../media/curtain1.svg";
import FaqAcordion from "../components/FaqAcordion";

const FaqPage = () => {
  return (
    <>
      <div
        className="z-[4] h-dvh w-full  bg-cover bg-center mix-blend-luminosity"
        style={{
          backgroundImage: `url(${faqgradient})`,
          backgroundColor: "white",
        }}
      >
        <div
          style={{
            display: "grid",
            gap: "16px",

            justifyContent: "center",
            paddingTop: "20vh",
          }}
        >
          <FaqAcordion
            headText="1. Lorem Ipsum is that it has a more-or-less? "
            subText="Lorem Ipsum is that it has a more-or-less. Lorem Ipsum is that it has a more-or-less.Lorem Ipsum is that it has a more-or-less. Correct grammar and punctuation errors, transform entire sentences, choose the most accurate wording, and change the tone of the text."
          />
          <FaqAcordion
            headText="1. Lorem Ipsum is that it has a more-or-less? "
            subText="Lorem Ipsum is that it has a more-or-less. Lorem Ipsum is that it has a more-or-less.Lorem Ipsum is that it has a more-or-less. Correct grammar and punctuation errors, transform entire sentences, choose the most accurate wording, and change the tone of the text."
          />
          <FaqAcordion
            headText="1. Lorem Ipsum is that it has a more-or-less? "
            subText="Lorem Ipsum is that it has a more-or-less. Lorem Ipsum is that it has a more-or-less.Lorem Ipsum is that it has a more-or-less. Correct grammar and punctuation errors, transform entire sentences, choose the most accurate wording, and change the tone of the text."
          />
          <FaqAcordion
            headText="1. Lorem Ipsum is that it has a more-or-less? "
            subText="Lorem Ipsum is that it has a more-or-less. Lorem Ipsum is that it has a more-or-less.Lorem Ipsum is that it has a more-or-less. Correct grammar and punctuation errors, transform entire sentences, choose the most accurate wording, and change the tone of the text."
          />
        </div>
      </div>
    </>
  );
};

export default FaqPage;

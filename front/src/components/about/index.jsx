import Image from "../commons/Image";
import TextInfos from "../commons/TextInfos";
import AboutImage from "../../assets/about-img.png";
import MissionImage from "../../assets/worms.png"
import WhyUsImage from "../../assets/monopoly.png";
import AboutText from "./AboutText";
import MissionText from "./MissionText";
import WhyUsText from "./WhyUsText";

function AboutContent() {
  return (
    <div className="flex-grow w-11/12 mx-auto my-5">
      <div className="flex flex-col md:flex-row mt-10">
        <div className="flex items-center w-full justify-center">
          <TextInfos title="A propos" content={<AboutText />} />
        </div>
        <div className="flex items-center w-full justify-center p-5">
          <Image src={AboutImage} alt="LudusTheke image and slogan" className="w-1/3 md:w-max lg:w-2/5" />
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-around mt-16 md:mt-32">
        <div className="flex items-center w-full justify-center p-5">
          <Image src={MissionImage} alt="Mission Image Worms" className="w-1/3 md:w-max lg:w-2/5" />
        </div>
        <div className="flex items-center w-full justify-center">
          <TextInfos title="Notre Mission" content={<MissionText />} />
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-around mt-16 md:mt-32">
        <div className="flex items-center w-full justify-center">
          <TextInfos title="Pourquoi nous ?" content={<WhyUsText />} />
        </div>
        <div className="flex items-center w-full justify-center p-5">
          <Image src={WhyUsImage} alt="Why Us Monopoly" className="w-1/3 md:w-max lg:w-2/5" />
        </div>
      </div>
    </div>

  );
}

export default AboutContent;
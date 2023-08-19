import TextInfos from "../commons/TextInfos";
import Icons from "../commons/Icons";
import FollowUsText from "./FollowUsText";
import ContactForm from "./ContactForm";

function ContactContent() {
  return (
    <div className="flex-grow pb-5">
      <div className="flex flex-col items-center p-3 border shadow-lg mx-auto w-11/12 mt-5">
        <div className="flex text-center">
          <TextInfos title="Suivez nous sur les réseaux !" content={<FollowUsText />} />
        </div>
        <div className="flex flex-row gap-10 mt-5">
          <a className="hover:scale-110 transition" href="https://www.facebook.com/ludustheke.fr" target="_blank" rel="noopener noreferrer">
            <Icons src="#icon-facebook" alt="Icon Placeholder" className="w-16 h-16" />
          </a>
          <a className="hover:scale-110 transition" href="https://twitter.com/LudusTheke" target="_blank" rel="noopener noreferrer">
            <Icons src="#icon-twitter" alt="Icon Placeholder" className="w-16 h-16" />
          </a>
          <a className="hover:scale-110 transition" href="https://discord.gg/kTJPvKAw" target="_blank" rel="noopener noreferrer">
            <Icons src="#icon-discord" alt="Icon Placeholder" className="w-16 h-16" />
          </a>
        </div>
      </div>
      <div className="flex flex-col items-center p-3 border shadow-lg mx-auto w-11/12 mt-5">
        <div className="w-full">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}

export default ContactContent;
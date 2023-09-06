import TextInfos from "../commons/TextInfos";
import Icons from "../commons/Icons";
import FollowUsText from "./FollowUsText";
import ContactForm from "./ContactForm";
import { useDarkMode } from "../commons/DarkModeContext";
import PageTitle from "../commons/PageTitle";

function ContactContent() {

  const { darkMode } = useDarkMode();

  return (
    <div className="w-full">
      <PageTitle title="Contactez-nous" subTitle="Vous avez une question ? Envoyez-nous un message !" />
      <div className="m-5">
        <div className={`flex flex-col items-center p-3 mx-auto w-11/12 mt-5 border shadow-md ${darkMode ? 'bg-neutral-800 text-neutral-300 shadow-neutral-600 border-neutral-800' : 'bg-white text-neutral-700'}`}>
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
        <div className={`flex flex-col items-center p-3 mx-auto w-11/12 mt-5 border shadow-md ${darkMode ? 'bg-neutral-800 text-neutral-300 shadow-neutral-600 border-neutral-800' : 'bg-white text-neutral-700'}`}>
          <div className="w-full">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactContent;
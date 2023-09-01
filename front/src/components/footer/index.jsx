import Icons from "../commons/Icons";
import { useDarkMode } from "../commons/DarkModeContext";

function FooterContent() {
    const { darkMode } = useDarkMode();

    return (
        <div className={`shadow-inner ${darkMode ? 'bg-neutral-800 shadow-neutral-700 text-neutral-300' : 'bg-white'}`}>
            <div className="flex flex-col items-center p-3">
                <div className="flex flex-row gap-2">
                    <a className="hover:scale-110 transition" href="https://www.facebook.com/ludustheke.fr" target="_blank" rel="noopener noreferrer">
                        <Icons src="#icon-facebook" alt="Icon Placeholder" className="w-10 h-10" />
                    </a>
                    <a className="hover:scale-110 transition" href="https://twitter.com/LudusTheke" target="_blank" rel="noopener noreferrer">
                        <Icons src="#icon-twitter" alt="Icon Placeholder" className="w-10 h-10" />
                    </a>
                    <a className="hover:scale-110 transition" href="https://discord.gg/kTJPvKAw" target="_blank" rel="noopener noreferrer">
                        <Icons src="#icon-discord" alt="Icon Placeholder" className="w-10 h-10" />
                    </a>
                </div>
                <p className="text-xs">© Maxime Bory – 2023 – <a className="hover:text-blue-500 transition" href="https://www.plumedours.fr" target="_blank" rel="noopener noreferrer">www.plumedours.fr</a></p>
            </div>
        </div>
    );
}

export default FooterContent;
import { useDarkMode } from "../commons/DarkModeContext";

function FollowUsText() {

    const { darkMode } = useDarkMode();
    
    return (
        <div className={`flex flex-col gap-2 pt-2 ${darkMode ? 'text-neutral-300' : 'text-neutral-700'}`}>
            <p className="text-lg">Retrouvez nous sur les différents réseaux sociaux, et venez partager votre expérience avec notre communauté !</p>
        </div>

    );
}

export default FollowUsText;
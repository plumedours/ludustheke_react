import { useDarkMode } from "./DarkModeContext";

const PageTitle = ({ title, subTitle }) => {

    const { darkMode } = useDarkMode();

    return (
        <div className="bg-primary-green mb-3 p-5">
            <div className="container mx-auto text-center">
                <h1 className={`text-2xl lg:text-3xl font-bold ${darkMode ? 'text-neutral-800' : 'text-white'}`}>{title}</h1>
                <p className={`text-lg lg:text-xl mt-2 italic ${darkMode ? 'text-neutral-700' : 'text-neutral-50'}`}>{subTitle}</p>
            </div>
        </div>
    );
};

export default PageTitle;
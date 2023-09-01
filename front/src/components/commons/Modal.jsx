import Modal from "react-modal";
import { useDarkMode } from "./DarkModeContext";
import { categoryColors } from "./CategoriesColors";

Modal.setAppElement("#root");

const CustomModal = ({ isOpen, onRequestClose, selectedGame }) => {
    const { darkMode } = useDarkMode();

    return (
        <div className={`fixed inset-0 flex items-center justify-center z-50 transition-opacity duration-300 ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
            <div className="absolute inset-0 bg-neutral-500 opacity-75" onClick={onRequestClose}></div>
            <div className='w-11/12 md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto mb-80'>
                <div className={`p-4 ${darkMode ? 'bg-neutral-900' : 'bg-white'} rounded shadow-md`}>
                    <button className={`close-button ${darkMode ? 'text-neutral-300' : 'text-neutral-700'}`} onClick={onRequestClose}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                    {selectedGame && (
                        <div className={`flex flex-col max-w-xl justify-center rounded border shadow-md ${darkMode ? 'bg-neutral-800 text-neutral-300 shadow-neutral-600 border-neutral-800' : 'bg-white text-neutral-700'}`}>
                            <div key={selectedGame.id} className="flex flex-col flex-grow justify-center p-3">
                                <img className="flex self-center w-36" src={selectedGame.cover} alt="" />
                                <h2 className="text-xl text-center font-semibold py-2">{selectedGame.title}</h2>
                                <p className="flex flex-wrap mx-auto text-xs font-semibold">
                                    {selectedGame.category_names && selectedGame.category_names.split(',').map(category => (
                                        <span
                                            key={category}
                                            style={{ backgroundColor: categoryColors[category] }} // Utilisation du nom de catégorie pour accéder à la couleur correspondante
                                            className="rounded-md px-1 mr-1 mb-1 inline-block"
                                        >{category}</span>
                                    ))}
                                </p>
                                <p>{selectedGame.shortDesc}</p>
                                <div className="flex flex-row">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="#1dd1a1" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z" />
                                    </svg>
                                    {selectedGame.likes}
                                </div>
                                <p>Number of comments: {selectedGame.numComments}</p>
                            </div>
                            <div className={`flex flex-row justify-center border-t w-full gap-3 py-3 ${darkMode ? 'border-neutral-600' : 'border-neutral-300'}`}>
                                <div className="hover:scale-110 transition cursor-pointer hover:text-red-500">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default CustomModal;

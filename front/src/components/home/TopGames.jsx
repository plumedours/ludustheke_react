import { useEffect, useState, Fragment } from "react";
import axios from "axios";
import CustomModal from "../commons/Modal";
import { useDarkMode } from "../commons/DarkModeContext";
import { categoryColors, themeGameColor } from "../commons/CategoriesColors";
import { Link } from "react-router-dom";
import PageTitle from "../commons/PageTitle";

const TopAllGames = () => {
    const [games, setGames] = useState([]);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [selectedGame, setSelectedGame] = useState(null);
    const { darkMode } = useDarkMode();
    const [isLoading, setIsLoading] = useState(true);

    const handleQuickViewClick = (game) => {
        setSelectedGame(game);
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setSelectedGame(null);
        setModalIsOpen(false);
    };

    useEffect(() => {
        const fetchTopAllGames = async () => {
            setIsLoading(true);
            try {
                const res = await axios.get("http://localhost:5000/games", {
                    withCredentials: true, // This is important to include for cookies to work
                });
                setGames(res.data);
            } catch (err) {
                console.log(err);
            } finally {
                setIsLoading(false);
            }
        };
        fetchTopAllGames();
    }, []);

    const sortedgames = [...games].sort((a, b) => b.likes - a.likes);
    const [visiblegames, setVisiblegames] = useState(5); // Nombre de jeux à afficher initialement
    const gamesToShow = sortedgames.slice(0, visiblegames);
    const [allgamesLoaded, setAllgamesLoaded] = useState(false);

    const loadMoregames = () => {
        // Augmenter le nombre de jeux à afficher
        setVisiblegames((prevVisiblegames) => prevVisiblegames + 5);

        if (visiblegames + 5 >= games.length) {
            setAllgamesLoaded(true);
        }
    };

    return (
        <div>
            <div className="flex flex-col w-11/12 mx-auto items-center p-3 mt-5">
                {isLoading ? (
                    <div className="flex items-center justify-center h-20">
                        <div className="animate-spin rounded-full h-12 w-12 mt-5 border-t-2 border-primary-green" />
                    </div>
                ) : (
                    // Afficher les données une fois chargées
                    <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mt-5">
                        {gamesToShow.map((game) => (
                            <Fragment key={game.id}>
                                <div className={`flex flex-col justify-center rounded border shadow-md ${darkMode ? 'bg-neutral-800 text-neutral-300 shadow-neutral-600 border-neutral-800' : 'bg-white text-neutral-700'}`}>
                                    <div className="relative">
                                        <div style={{ backgroundColor: themeGameColor[game.theme_name] }} className="absolute top-0 left-0 text-xs font-semibold text-neutral-100 px-2 py-1 rounded-br">
                                            {game.theme_name}
                                        </div>
                                    </div>
                                    <div key={game.id} className="flex flex-col flex-grow justify-center p-3">
                                        <Link to={`/games/${game.id}`}>
                                            <img className="flex self-center w-48 md:w-full" src={game.cover} alt="" />
                                        </Link>
                                        <h2 className="text-xl text-center font-semibold py-2">{game.title}</h2>
                                        <p>{game.theme_name}</p>
                                        <p className={`flex flex-wrap mx-auto text-xs font-semibold ${darkMode ? 'text-neutral-800' : 'text-neutral-700'}`}>
                                            {game.category_names && game.category_names.split(',').map(category => (
                                                <span
                                                    key={category}
                                                    style={{ backgroundColor: categoryColors[category] }} // Utilisation du nom de catégorie pour accéder à la couleur correspondante
                                                    className="rounded-md px-1 mr-1 mb-1 inline-block"
                                                >{category}</span>
                                            ))}
                                        </p>
                                    </div>
                                    <div className={`flex flex-row justify-center border-t w-full gap-3 py-3 ${darkMode ? 'border-neutral-600' : 'border-neutral-300'}`}>
                                        <div className="hover:scale-110 transition cursor-pointer hover:text-primary-green" onClick={() => handleQuickViewClick(game)}>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 3.75H6A2.25 2.25 0 003.75 6v1.5M16.5 3.75H18A2.25 2.25 0 0120.25 6v1.5m0 9V18A2.25 2.25 0 0118 20.25h-1.5m-9 0H6A2.25 2.25 0 013.75 18v-1.5M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                            </svg>
                                        </div>
                                        <div className="hover:scale-110 transition cursor-pointer hover:text-red-500">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </Fragment>
                        ))}
                    </div>
                )}

                <div className='flex w-full justify-end'>
                    {!allgamesLoaded && (
                        <button className="flex flex-row gap-2 items-center h-6 mt-3 px-5 text-neutral-100 text-sm font-semibold bg-primary-green rounded-lg transition-colors duration-150 focus:shadow-outline hover:bg-neutral-100 hover:text-primary-green" onClick={loadMoregames}><span><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M12 9a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3m0 8a5 5 0 0 1-5-5a5 5 0 0 1 5-5a5 5 0 0 1 5 5a5 5 0 0 1-5 5m0-12.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5Z"></path></svg></span> Voir plus</button>
                    )}
                    {allgamesLoaded && <p className={`${darkMode ? 'text-neutral-300' : 'text-neutral-700'} text-sm italic`}>Toutes les fiches ont été affichées.</p>}
                    <CustomModal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)} selectedGame={selectedGame} />
                </div>
            </div >
        </div>
    );
};

export default TopAllGames;

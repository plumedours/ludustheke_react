import { useEffect } from "react";
import { useState } from "react";
import { Fragment } from 'react';
import axios from "axios";
import CommentsSection, { getNumberOfComments } from "../commons/CommentsSection";
import CustomModal from "../commons/Modal";

const AllBoardGames = () => {
    const [boardGames, setBoardGames] = useState([]);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [selectedGame, setSelectedGame] = useState(null);

    const handleQuickViewClick = (game) => {
        setSelectedGame(game);
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setSelectedGame(null);
        setModalIsOpen(false);
    };

    useEffect(() => {
        const fetchAllBoardGames = async () => {
            try {
                const res = await axios.get("http://localhost:5000/boardgames");
                setBoardGames(res.data);
            } catch (err) {
                console.log(err);
            }
        };
        fetchAllBoardGames();
    }, []);

    const sortedBoardGames = [...boardGames].sort((a, b) => b.likes - a.likes);
    const topBoardGames = sortedBoardGames.slice(0, 3);

    // Utilisation de Promise.all pour récupérer les nombres de commentaires en parallèle
    useEffect(() => {
        const fetchNumberOfComments = async () => {
            const promises = topBoardGames.map(async (boardGame) => {
                try {
                    const numComments = await getNumberOfComments(boardGame.id);
                    return { id: boardGame.id, numComments };
                } catch (error) {
                    console.log(error);
                    return { id: boardGame.id, numComments: 0 }; // Gérer l'erreur en fournissant une valeur par défaut
                }
            });
            const results = await Promise.all(promises);

            setBoardGames((prevBoardGames) =>
                prevBoardGames.map((boardGame) => {
                    const result = results.find((r) => r.id === boardGame.id);
                    return { ...boardGame, numComments: result ? result.numComments : 0 }; // Vérification avant d'accéder à result.numComments
                })
            );
        };

        fetchNumberOfComments();
    }, [topBoardGames]);


    return (
        <div>
            <div className="flex flex-col md:flex-row gap-3">
                {topBoardGames.map((boardGame) => (
                    <Fragment key={boardGame.id}>
                        <div className="flex flex-col max-w-xl justify-center rounded border shadow-md text-neutral-700">
                            <div key={boardGame.id} className="flex flex-col flex-grow justify-center p-3">
                                <img className="flex self-center w-36" src={boardGame.cover} alt="" />
                                <h2 className="text-xl text-center font-semibold py-2">{boardGame.title}</h2>
                                <p>{boardGame.shortDesc}</p>
                            </div>
                            <div className="flex flex-row justify-center border-t w-full gap-3 py-3">
                                <div className="hover:scale-110 transition cursor-pointer" onClick={() => handleQuickViewClick(boardGame)}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 3.75H6A2.25 2.25 0 003.75 6v1.5M16.5 3.75H18A2.25 2.25 0 0120.25 6v1.5m0 9V18A2.25 2.25 0 0118 20.25h-1.5m-9 0H6A2.25 2.25 0 013.75 18v-1.5M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                </div>
                                <div className="hover:scale-110 transition">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </Fragment>
                ))}
            </div>
            <CustomModal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)} selectedGame={selectedGame} />
        </div>
    );
};

export default AllBoardGames;

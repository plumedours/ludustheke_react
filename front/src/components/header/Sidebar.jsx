import { Menu } from "@headlessui/react";
import { useState, useEffect } from "react";
import { useDarkMode } from "../commons/DarkModeContext";
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';

export default function Sidebar() {
    const [open, setOpen] = useState(true);
    const [showLabels, setShowLabels] = useState(false);
    const navigate = useNavigate();
    const { darkMode } = useDarkMode();

    const Logout = async () => {
        try {
            await axios.delete('http://localhost:5000/logout');
            navigate("/");
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        const handleResize = () => {
            setOpen(window.innerWidth >= 768);
            setShowLabels(window.innerWidth >= 768);
        };

        handleResize(); // Initial check
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <div className="flex">
            <div
                className={` ${open ? "" : "w-20 "
                    } flex flex-col p-3 shadow duration-300 ${darkMode ? 'bg-neutral-800 text-neutral-100' : 'text-neutral-700'}`}
            >
                <div className="space-y-3">
                    <div className="flex items-center justify-between">
                        <button onClick={() => {
                            setOpen(!open);
                            setShowLabels(!showLabels);
                        }}>
                            {open ? (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className={`w-10 h-10 hover:text-red-500 ${darkMode ? 'text-neutral-100' : 'text-neutral-700'}`}
                                    viewBox="0 0 24 24">
                                    <path
                                        fill="currentColor"
                                        d="M11 18q-.425 0-.713-.288T10 17q0-.425.288-.713T11 16h2q.425 0 .713.288T14 17q0 .425-.288.713T13 18h-2Zm-4-5q-.425 0-.713-.288T6 12q0-.425.288-.713T7 11h10q.425 0 .713.288T18 12q0 .425-.288.713T17 13H7ZM4 8q-.425 0-.713-.288T3 7q0-.425.288-.713T4 6h16q.425 0 .713.288T21 7q0 .425-.288.713T20 8H4Z"></path>
                                </svg>) : (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className={`w-10 h-10 hover:text-primary-green ${darkMode ? 'text-neutral-100' : 'text-neutral-700'}`}
                                    viewBox="0 0 24 24">
                                    <path fill="currentColor" d="M4 18q-.425 0-.713-.288T3 17q0-.425.288-.713T4 16h16q.425 0 .713.288T21 17q0 .425-.288.713T20 18H4Zm0-5q-.425 0-.713-.288T3 12q0-.425.288-.713T4 11h16q.425 0 .713.288T21 12q0 .425-.288.713T20 13H4Zm0-5q-.425 0-.713-.288T3 7q0-.425.288-.713T4 6h16q.425 0 .713.288T21 7q0 .425-.288.713T20 8H4Z"></path>
                                    </svg>
                            )
                            }
                        </button>
                    </div>
                    <div className="flex-1">
                        <ul className="pt-2 pb-4 space-y-1 text-sm">
                            <Menu>
                                <li className="rounded-sm py-2">
                                    <Link to="/"
                                        className="flex items-center p-2 space-x-3 rounded-md"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className={`w-6 h-6 hover:text-orange-400 ${darkMode ? 'text-neutral-100' : 'text-neutral-700'}`}
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                                            />
                                        </svg>
                                        {showLabels &&
                                            <Menu.Item>
                                                <p className={`hover:text-orange-400 ${darkMode ? 'text-neutral-400 hover:text-neutral-200' : 'text-neutral-500 hover:text-neutral-600'} px-3 font-semibold`}>
                                                    Accueil
                                                </p>
                                            </Menu.Item>
                                        }
                                    </Link>
                                </li>
                                <li className="rounded-sm py-2">
                                    <Link to="/boardgames"
                                        className="flex items-center p-2 space-x-3 rounded-md"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className={`w-6 h-6 hover:text-orange-400 ${darkMode ? 'text-neutral-100' : 'text-neutral-700'}`}
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth={0.4}
                                            viewBox="0 0 20 20">
                                            <path
                                                fill="currentColor"
                                                d="M10 3a1 1 0 0 1 1-1h.5c.385 0 .737.145 1.002.384A1.494 1.494 0 0 1 13.505 2h.99c.385 0 .737.145 1.003.384A1.494 1.494 0 0 1 16.5 2h.5a1 1 0 0 1 1 1v2.5a2.5 2.5 0 0 1-1.95 2.44c.284 4.043 1.7 6.585 2.187 7.35c.16.252.263.553.263.877v.333A1.5 1.5 0 0 1 17 18h-5.476a2.44 2.44 0 0 0 .435-1H17a.5.5 0 0 0 .5-.5v-.333a.637.637 0 0 0-.107-.34c-.573-.9-2.155-3.774-2.369-8.304A.5.5 0 0 1 15.518 7A1.5 1.5 0 0 0 17 5.5V3h-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 1-1 .003V4.5l-.005-1.002a.5.5 0 0 0-.5-.498h-.99a.5.5 0 0 0-.5.498L13 4.502a.5.5 0 0 1-1-.003v-1a.5.5 0 0 0-.5-.5H11v2.5A1.5 1.5 0 0 0 12.482 7a.5.5 0 0 1 .494.523c-.158 3.34-1.06 5.779-1.752 7.191a2.817 2.817 0 0 0-.203-.188a4.192 4.192 0 0 1-.55-.558c.588-1.278 1.288-3.315 1.479-6.029A2.505 2.505 0 0 1 10 5.5V3ZM4.5 8a2 2 0 1 1 3.6 1.2a.5.5 0 0 0 .4.8H9a.5.5 0 0 1 0 1H7.893a.5.5 0 0 0-.496.56c.302 2.47 1.609 3.888 2.34 4.5c.175.146.263.33.263.489a.451.451 0 0 1-.451.451H3.45a.451.451 0 0 1-.45-.451c0-.16.088-.343.262-.489c.732-.612 2.04-2.03 2.341-4.5a.5.5 0 0 0-.496-.56H4a.5.5 0 0 1 0-1h.5a.5.5 0 0 0 .4-.8A1.989 1.989 0 0 1 4.5 8Zm2-3a3 3 0 0 0-2.817 4.034A1.5 1.5 0 0 0 4 12h.52c-.372 1.798-1.353 2.836-1.9 3.293c-.346.29-.62.736-.62 1.256C2 17.35 2.65 18 3.451 18H9.55c.8 0 1.45-.65 1.45-1.451c0-.52-.274-.966-.62-1.256c-.547-.457-1.528-1.495-1.9-3.293H9a1.5 1.5 0 0 0 .317-2.966A3 3 0 0 0 6.5 5Z"></path>
                                        </svg>
                                        {showLabels &&
                                            <Menu.Item>
                                                <p className={`hover:text-orange-400 ${darkMode ? 'text-neutral-400 hover:text-neutral-200' : 'text-neutral-500 hover:text-neutral-600'} px-3 font-semibold`}>
                                                    Jeux de société
                                                </p>
                                            </Menu.Item>
                                        }
                                    </Link>
                                </li>
                                <li className="rounded-sm py-2">
                                    <Link to="/videogames"
                                        className="flex items-center p-2 space-x-3 rounded-md"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className={`w-6 h-6 hover:text-orange-400 ${darkMode ? 'text-neutral-100' : 'text-neutral-700'}`}
                                            viewBox="0 0 24 24">
                                            <path
                                                fill="currentColor"
                                                d="M6 9h2v2h2v2H8v2H6v-2H4v-2h2V9m12.5 0a1.5 1.5 0 0 1 1.5 1.5a1.5 1.5 0 0 1-1.5 1.5a1.5 1.5 0 0 1-1.5-1.5A1.5 1.5 0 0 1 18.5 9m-3 3a1.5 1.5 0 0 1 1.5 1.5a1.5 1.5 0 0 1-1.5 1.5a1.5 1.5 0 0 1-1.5-1.5a1.5 1.5 0 0 1 1.5-1.5M17 5a7 7 0 0 1 7 7a7 7 0 0 1-7 7c-1.96 0-3.73-.8-5-2.1A6.96 6.96 0 0 1 7 19a7 7 0 0 1-7-7a7 7 0 0 1 7-7h10M7 7a5 5 0 0 0-5 5a5 5 0 0 0 5 5c1.64 0 3.09-.79 4-2h2c.91 1.21 2.36 2 4 2a5 5 0 0 0 5-5a5 5 0 0 0-5-5H7Z"></path>
                                        </svg>
                                        {showLabels &&
                                            <Menu.Item>
                                                <p className={`hover:text-orange-400 ${darkMode ? 'text-neutral-400 hover:text-neutral-200' : 'text-neutral-500 hover:text-neutral-600'} px-3 font-semibold`}>
                                                    Jeux vidéo
                                                </p>
                                            </Menu.Item>
                                        }
                                    </Link>
                                </li>
                                <li className="rounded-sm py-2">
                                    <Link to="/about"
                                        className="flex items-center p-2 space-x-3 rounded-md"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className={`w-6 h-6 hover:text-orange-400 ${darkMode ? 'text-neutral-100' : 'text-neutral-700'}`}
                                            viewBox="0 0 24 24">
                                            <path
                                                fill="none"
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M3 12a9 9 0 1 0 18 0a9 9 0 1 0-18 0m9-3v4m0 3v.01"></path>
                                        </svg>
                                        {showLabels &&
                                            <Menu.Item>
                                                <p className={`hover:text-orange-400 ${darkMode ? 'text-neutral-400 hover:text-neutral-200' : 'text-neutral-500 hover:text-neutral-600'} px-3 font-semibold`}>
                                                    A propos
                                                </p>
                                            </Menu.Item>
                                        }
                                    </Link>
                                </li>
                                <li className="rounded-sm py-2">
                                    <Link to="/contact"
                                        className="flex items-center p-2 space-x-3 rounded-md"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className={`w-6 h-6 hover:text-orange-400 ${darkMode ? 'text-neutral-100' : 'text-neutral-700'}`}
                                            viewBox="0 0 24 24">
                                            <path
                                                fill="currentColor"
                                                d="m12 22l-.25-3h-.25q-3.55 0-6.025-2.475T3 10.5q0-3.55 2.475-6.025T11.5 2q1.775 0 3.313.662t2.7 1.825q1.162 1.163 1.824 2.7T20 10.5q0 1.875-.613 3.6t-1.675 3.2q-1.062 1.475-2.525 2.675T12 22Zm2-3.65q1.775-1.5 2.888-3.513T18 10.5q0-2.725-1.888-4.612T11.5 4Q8.775 4 6.888 5.888T5 10.5q0 2.725 1.888 4.612T11.5 17H14v1.35Zm-2.525-2.375q.425 0 .725-.3t.3-.725q0-.425-.3-.725t-.725-.3q-.425 0-.725.3t-.3.725q0 .425.3.725t.725.3ZM10.75 12.8h1.5q0-.75.15-1.05t.95-1.1q.45-.45.75-.975t.3-1.125q0-1.275-.863-1.913T11.5 6q-1.1 0-1.85.613T8.6 8.1l1.4.55q.125-.425.475-.838T11.5 7.4q.675 0 1.012.375t.338.825q0 .425-.25.763t-.6.687q-.875.75-1.063 1.188T10.75 12.8Zm.75-1.625Z"></path>
                                        </svg>
                                        {showLabels &&
                                            <Menu.Item>
                                                <p className={`hover:text-orange-400 ${darkMode ? 'text-neutral-400 hover:text-neutral-200' : 'text-neutral-500 hover:text-neutral-600'} px-3 font-semibold`}>
                                                    Contact
                                                </p>
                                            </Menu.Item>
                                        }
                                    </Link>
                                </li>
                            </Menu>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
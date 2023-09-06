import { Fragment, useEffect } from 'react';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import jwt_decode from "jwt-decode";
import Cookies from 'js-cookie';

import { useUser } from '../../context/UserContext';
import { useDarkMode } from '../commons/DarkModeContext';
import logo from '../../assets/logo_v3.png';
import ToggleButton from '../commons/ToggleButton';
import SearchBar from '../commons/SearchBar';
import defaultAvatar from '../../assets/default-avatar.png';
import placeholderAvatar from '../../assets/placeholder-avatar.png';

const Navbar = () => {
    const navigate = useNavigate();
    const { darkMode } = useDarkMode();
    const { user, setUser } = useUser();

    useEffect(() => {
        const token = Cookies.get('token');
        if (token) {
            const decodedToken = jwt_decode(token);
            setUser({ ...user, role: decodedToken.role });
        }
        console.log('token', token);
    }, []);

    console.log('4', user);

    const handleLogout = async () => {
        try {
            await axios.post('http://localhost:5000/logout', {}, { withCredentials: true });
            setUser({ role: '' });
            window.location.href = '/';
            // navigate('/');
        } catch (error) {
            console.error('Erreur lors de la déconnexion :', error);
        }
    };

    console.log('2', user);

    return (
        <Disclosure as="nav" className={`shadow-lg z-10 ${darkMode ? 'bg-neutral-800 text-neutral-100 shadow-neutral-700' : 'bg-neutral-50 text-neutral-700'}`}>
            <div className="mx-auto max-w-7xl px-2 md:px-6">
                <div className="flex items-center justify-between h-16">
                    <Link to="/">
                        <div className="flex items-center">
                            <img className="h-8 md:h-10" src={logo} alt="Site Logo LudusTheke" />
                        </div>
                    </Link>
                    <SearchBar />
                    <div className="flex items-center space-x-5">
                        <div className="flex self-center">
                            <ToggleButton />
                        </div>
                        {/* Profile dropdown */}
                        <Menu as="div" className="relative ml-3">
                            <div className='flex flex-row gap-5'>
                                <Menu.Button className="relative flex rounded-full text-md">
                                    <span className="absolute -inset-1.5" />
                                    <span className="sr-only">Open user menu</span>
                                    <img
                                        className="h-10 w-10 rounded-full"
                                        src={user.role === 'user' ? (user.avatar ? user.avatar : placeholderAvatar) : defaultAvatar}
                                        alt=""
                                    />
                                </Menu.Button>
                            </div>
                            <Transition
                                as={Fragment}
                                enter="transition ease-out duration-100"
                                enterFrom="transform opacity-0 scale-95"
                                enterTo="transform opacity-100 scale-100"
                                leave="transition ease-in duration-75"
                                leaveFrom="transform opacity-100 scale-100"
                                leaveTo="transform opacity-0 scale-95"
                            >
                                <Menu.Items className={`absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md py-1 shadow-lg ${darkMode ? 'bg-neutral-700' : 'bg-white'}`}>
                                    <Menu.Item>
                                        <a href="#" className={`block px-4 py-2 text-md ${darkMode ? 'text-neutral-100 hover:bg-neutral-600' : 'text-neutral-700 hover:bg-neutral-100'}`}>
                                            Mon espace
                                        </a>
                                    </Menu.Item>
                                    <Menu.Item>
                                        <a href="#" className={`block px-4 py-2 text-md ${darkMode ? 'text-neutral-100 hover:bg-neutral-600' : 'text-neutral-700 hover:bg-neutral-100'}`}>
                                            Proposer une fiche
                                        </a>
                                    </Menu.Item>
                                    <Menu.Item>
                                        {user.role === 'visitor' ? ( // Vérifiez le rôle de l'utilisateur
                                            <Link to="/login" className={`block px-4 py-2 text-md ${darkMode ? 'text-neutral-100 hover:bg-neutral-600' : 'text-neutral-700 hover:bg-neutral-100'}`}>
                                                Connexion
                                            </Link>
                                        ) : (
                                            <a href="#" onClick={handleLogout} className={`block px-4 py-2 text-md ${darkMode ? 'text-neutral-100 hover:bg-neutral-600' : 'text-neutral-700 hover:bg-neutral-100'}`}>
                                                Déconnexion
                                            </a>
                                        )}
                                    </Menu.Item>
                                </Menu.Items>
                            </Transition>
                        </Menu>
                    </div>
                </div>
            </div>
        </Disclosure>
    )
}

export default Navbar;
import { Fragment } from 'react';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { Bars3Icon, XMarkIcon, ChevronDownIcon } from '@heroicons/react/24/outline';
import logo from '../../assets/logo_v3.png';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate();

    const Logout = async () => {
        try {
            await axios.delete('http://localhost:5000/logout');
            navigate("/");
        } catch (error) {
            console.log(error);
        }
    }

    // export default function NavBar() {
        return (
            <Disclosure as="nav" className="bg-neutral-50 shadow-lg">
                {({ open }) => (
                    <>
                        <div className="mx-auto max-w-7xl px-2 sm:px-6">
                            <div className="relative flex h-16 items-center justify-between">
                                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                                    {/* Mobile menu button*/}
                                    <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-neutral-400 hover:bg-neutral-700 hover:text-white ring-1 ring-neutral-300">
                                        <span className="absolute -inset-0.5" />
                                        <span className="sr-only">Open main menu</span>
                                        {open ? (
                                            <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                                        ) : (
                                            <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                                        )}
                                    </Disclosure.Button>
                                </div>
                                <div className="flex flex-1 items-center justify-center sm:items-center sm:justify-start">
                                    <Link to="/">
                                        <div className="flex flex-shrink-0 items-center">
                                            <img className="h-8 md:h-10" src={logo} alt="Site Logo LudusTheke" />
                                        </div>
                                    </Link>
                                    <div className="hidden  sm:ml-6 sm:block">
                                        <div className="flex space-x-2">
                                            <Menu>
                                                <Menu.Item>
                                                    <Link to="/" className='text-neutral-500 hover:underline underline-offset-8 decoration-2 decoration-orange-400 hover:text-neutral-600 px-3 py-2 font-semibold'>
                                                        Accueil
                                                    </Link>
                                                </Menu.Item>
                                                <Menu as="div" className="relative ml-3">
                                                    <div>
                                                        <Menu.Button className='text-neutral-500 hover:underline underline-offset-8 decoration-2 decoration-orange-400 hover:text-neutral-600 px-3 py-2 font-semibold'>
                                                            <span className="absolute -inset-1.5" />
                                                            <span className="sr-only">Open user menu</span>
                                                            <div className="flex flex-row gap-2">
                                                                <a href="#">Jeux</a>
                                                                <ChevronDownIcon className="block h-4 w-4 self-end" aria-hidden="true" />
                                                            </div>
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
                                                        <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg">
                                                            <Menu.Item>
                                                                <Link to="/games/board" className='block px-4 py-2 text-sm text-neutral-700 hover:bg-neutral-100'>
                                                                    Jeux de société
                                                                </Link>
                                                            </Menu.Item>
                                                            <Menu.Item>
                                                                <Link to="/games/video" className='block px-4 py-2 text-sm text-neutral-700 hover:bg-neutral-100'>
                                                                    Jeux vidéos
                                                                </Link>
                                                            </Menu.Item>
                                                        </Menu.Items>
                                                    </Transition>
                                                </Menu>
                                                <Menu.Item>
                                                    <Link to="/about" className='text-neutral-500 hover:underline underline-offset-8 decoration-2 decoration-orange-400 hover:text-neutral-600 px-3 py-2 font-semibold'>
                                                        A propos
                                                    </Link>
                                                </Menu.Item>
                                                <Menu.Item>
                                                    <Link to="/contact" className='text-neutral-500 hover:underline underline-offset-8 decoration-2 decoration-orange-400 hover:text-neutral-600 px-3 py-2 font-semibold'>
                                                        Contact
                                                    </Link>
                                                </Menu.Item>
                                            </Menu>
                                        </div>
                                    </div>
                                </div>
                                <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                                    {/* Profile dropdown */}
                                    <Menu as="div" className="relative ml-3">
                                        <div>
                                            <Menu.Button className="relative flex rounded-full text-sm">
                                                <span className="absolute -inset-1.5" />
                                                <span className="sr-only">Open user menu</span>
                                                <img
                                                    className="h-10 w-10 rounded-full"
                                                    src="https://images.unsplash.com/photo-1568162603664-fcd658421851?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1081&q=80"
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
                                            <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg">
                                                <Menu.Item>
                                                    <a href="#" className='block px-4 py-2 text-sm text-neutral-700 hover:bg-neutral-100'>
                                                        Mon espace
                                                    </a>
                                                </Menu.Item>
                                                <Menu.Item>
                                                    <a href="#" className='block px-4 py-2 text-sm text-neutral-700 hover:bg-neutral-100'>
                                                        Proposer une fiche
                                                    </a>
                                                </Menu.Item>
                                                <Menu.Item>
                                                    <a href="#" onClick={Logout} className='block px-4 py-2 text-sm text-neutral-700 hover:bg-neutral-100'>
                                                        Déconnexion
                                                    </a>
                                                </Menu.Item>
                                            </Menu.Items>
                                        </Transition>
                                    </Menu>
                                </div>
                            </div>
                        </div>

                        <Disclosure.Panel className="sm:hidden">
                            <div className="space-y-1 flex flex-col px-2 pb-3 pt-2">
                                <Menu>
                                    <Menu.Item>
                                        <Link to="/" className='text-neutral-500 hover:text-neutral-600 hover:bg-neutral-200 px-3 py-2 font-semibold'>
                                            Accueil
                                        </Link>
                                    </Menu.Item>
                                    <Menu as="div" className="relative w-full self-start text-neutral-500 hover:text-neutral-600 hover:bg-neutral-200 px-3 py-2 font-semibold">
                                        <div>
                                            <Menu.Button className=''>
                                                <span className="absolute -inset-1.5" />
                                                <span className="sr-only">Open user menu</span>
                                                <div className="flex flex-row gap-2">
                                                    <a href="#">Jeux</a>
                                                    <ChevronDownIcon className="block h-4 w-4 self-end" aria-hidden="true" />
                                                </div>
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
                                            <Menu.Items className="right-0 z-10 mt-2 w-48 rounded-md bg-white py-1 shadow-lg">
                                                <Menu.Item>
                                                    <Link to="/games/board" className='block text-neutral-500 hover:text-neutral-600 hover:bg-neutral-100 px-3 py-2 font-semibold'>
                                                        Jeux de société
                                                    </Link>
                                                </Menu.Item>
                                                <Menu.Item>
                                                    <Link to="/games/video" className='block text-neutral-500 hover:text-neutral-600 hover:bg-neutral-100 px-3 py-2 font-semibold'>
                                                        Jeux vidéos
                                                    </Link>
                                                </Menu.Item>
                                            </Menu.Items>
                                        </Transition>
                                    </Menu>
                                    <Menu.Item>
                                        <Link to="/about" className='text-neutral-500 hover:text-neutral-600 hover:bg-neutral-200 px-3 py-2 font-semibold'>
                                            A propos
                                        </Link>
                                    </Menu.Item>
                                    <Menu.Item>
                                        <Link to="/contact" className='text-neutral-500 hover:text-neutral-600 hover:bg-neutral-200 px-3 py-2 font-semibold'>
                                            Contact
                                        </Link>
                                    </Menu.Item>
                                </Menu>
                            </div>
                        </Disclosure.Panel>
                    </>
                )}
            </Disclosure>
        )
    }

    export default Navbar;
// }
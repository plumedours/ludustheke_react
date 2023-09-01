import { useState, useEffect } from 'react';
import axios from 'axios';
import { useDarkMode } from './DarkModeContext';

const SearchBar = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [isSearchExpanded, setIsSearchExpanded] = useState(false);
    const { darkMode } = useDarkMode();
    const [isSmallScreen, setIsSmallScreen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth <= 640);
        };
        window.addEventListener('resize', handleResize);
        handleResize();
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const handleSearch = async () => {
        try {
            const response = await axios.get(`http://localhost:5000/search`, {
                params: {
                    search: searchQuery
                }
            });

            setSearchResults(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    const handleInputChange = async (e) => {
        const newQuery = e.target.value;
        setSearchQuery(newQuery);

        if (newQuery.length >= 3) {
            try {
                const response = await axios.get(`http://localhost:5000/search`, {
                    params: {
                        search: newQuery
                    }
                });

                setSearchResults(response.data);
            } catch (error) {
                console.error(error);
            }
        } else {
            setSearchResults([]);
        }
    };

    const handleSearchExpand = () => {
        setIsSearchExpanded(!isSearchExpanded);
    };

    return (
        <div className={`relative ${isSearchExpanded ? 'w-1/3' : 'w-16'}`}>
            <input
                type="text"
                className={`w-full border rounded py-2 px-3 focus:outline-none focus:ring-2 focus:ring-primary-green transition-all duration-300 ${isSearchExpanded ? 'opacity-100' : 'opacity-0'
                    } ${darkMode ? 'bg-neutral-700 text-neutral-300 shadow-neutral-600 border-neutral-800' : 'bg-white text-neutral-700'}} ${isSmallScreen ? 'placeholder-transparent' : ''}`}
                placeholder={isSmallScreen ? '' : 'Rechercher'}
                value={searchQuery}
                onChange={handleInputChange}
            />
            <div
                className={`absolute top-0 right-0 h-full flex items-center cursor-pointer p-2 transition-all duration-300 ${isSearchExpanded ? 'w-16' : 'w-full'
                    }`}
                onClick={handleSearchExpand}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className='h-6 w-6 transition-all duration-300'
                    viewBox="0 0 24 24">
                    <path fill="currentColor" d="m19.6 21l-6.3-6.3q-.75.6-1.725.95T9.5 16q-2.725 0-4.612-1.888T3 9.5q0-2.725 1.888-4.612T9.5 3q2.725 0 4.612 1.888T16 9.5q0 1.1-.35 2.075T14.7 13.3l6.3 6.3l-1.4 1.4ZM9.5 14q1.875 0 3.188-1.313T14 9.5q0-1.875-1.313-3.188T9.5 5Q7.625 5 6.312 6.313T5 9.5q0 1.875 1.313 3.188T9.5 14Z"></path></svg>
            </div>
            {searchResults.length > 0 && (
                <div className={`absolute top-10 left-0 w-full border rounded shadow-md ${darkMode ? 'bg-neutral-700 text-neutral-300' : 'bg-white text-neutral-700'}`}>
                    {searchResults.map((result) => (
                        <div key={result.id} className="p-3 border-b">
                            {result.title}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default SearchBar;
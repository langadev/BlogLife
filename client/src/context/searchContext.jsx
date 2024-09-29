import { createContext, useState } from "react";

export const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
    const [search, setSearch] = useState('close');

    const toggleSearch = () => {
        setSearch((prevSearch) => (prevSearch === 'close' ? 'open' : 'close'));
    };

    return (
        <SearchContext.Provider value={{ search, toggleSearch }}>
            {children}
        </SearchContext.Provider>
    );
};


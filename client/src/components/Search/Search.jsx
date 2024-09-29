import { useState, useContext } from 'react';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import { SearchContext } from '../../context/searchContext';
import './Search.css';

function Search() {
    const [query, setQuery] = useState('');
    const { toggleSearch } = useContext(SearchContext);

    const handleClearInput = () => {
        setQuery('');
    };

    return (
        <div className="search-container w-screen h-screen flex items-center justify-center">
            <div className="results bg-[#131c2f] p-5 h-[500px] fixed left-[600px] top-24">
                <div className="search flex gap-x-2 items-center">
                    <input
                        className="bg-slate-900 px-1 py-3 w-[400px] relative rounded-sm text-[#cbd5e1]"
                        type="text"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        placeholder="Tap to search..."
                        aria-label="Search"
                    />
                    <span
                        className="cursor-pointer font-bold text-[#cbd5e1]"
                        onClick={() => {
                            toggleSearch();
                            handleClearInput();
                        }}
                    >
                        <CloseOutlinedIcon />
                    </span>
                </div>
            </div>
        </div>
    );
}

export default Search;

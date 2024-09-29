import { useContext } from 'react';
import { Link } from 'react-router-dom';
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
import NightlightOutlinedIcon from '@mui/icons-material/NightlightOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import './Navbar.css';
import { ThemeContext } from '../../context/ThemeContext';
import { SearchContext } from '../../context/searchContext';
import Mobile from './Mobile/Mobile'
function Navbar() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { search, toggleSearch } = useContext(SearchContext);
  
  return (
    <div className={`${theme === 'dark' ? 'dark-theme' : 'light'}`}>
      <div className="container mb-4 py-10">
        <nav className="navbar flex justify-between items-center ">
          <h1 className="logo font-bold text-[1.6rem] cursor-pointer ">
            <Link to={'/'}>langa.dev</Link>
          </h1>
          <div className="list flex gap-x-5 sm:gap-1, items-center">
            <div>
              <span className="text-icon text-[1.3rem] cursor-pointer" onClick={toggleTheme}>
                {theme === 'light' ? <NightlightOutlinedIcon /> : <WbSunnyOutlinedIcon />}
              </span>
            </div>
            <div>
              <span className="text-icon text-[1.3rem] cursor-pointer"> <Link to='/categories'>Categories</Link>  </span>
            </div>
            <div>
              <span className="text-icon text-[1.3rem] cursor-pointer" onClick={toggleSearch}>
                {search === 'close' ? <SearchOutlinedIcon /> : null} Search
              </span>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;

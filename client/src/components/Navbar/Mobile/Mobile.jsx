import { ThemeContext } from "../../../context/ThemeContext";
import { useContext } from "react";
import NightlightOutlinedIcon from "@mui/icons-material/NightlightOutlined";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";

import './Mobile.css';


function Mobile({ isOpen, toggleMenu }) {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className="mb-[5.9rem]">
      <div
        className={`mobile-menu ${isOpen ? "active" : ""}`}
        onClick={toggleMenu}
      >
        <div className={`${theme === "dark" ? "dark-theme" : "light"}`}>
          <nav className="mobile-navbar flex justify-between w-full px-8 py-3 fixed">
            <div className="">
              <div className="flex justify-between"><h1 className="logo font-bold text-[1.6rem] cursor-pointer">Langa.dev</h1>
              <div className="flex gap-x-3">
              <span
                className="text-icon text-[1.3rem] cursor-pointer"
                onClick={toggleTheme}
              >
                {theme === "light" ? (
                  <NightlightOutlinedIcon />
                ) : (
                  <WbSunnyOutlinedIcon />
                )}
              </span>
            
            </div>
              </div>
              
              
              <ul className="flex gap-x-3 py-2 items-center justify-center">
                <li>
                  <a href="" className="menu-item">
                    Categorias
                  </a>
                </li>
                |
                <li>
                  <a href="" className="menu-item">
                    Pesquisar
                  </a>
                </li>
                |
                <li>
                  <a href="https://portifolio-c4fe.onrender.com/">
                    Portifolio
                  </a>
                </li>
              </ul>
            </div>

            
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Mobile;

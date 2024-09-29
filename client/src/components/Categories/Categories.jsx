import { useContext } from "react";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import { ThemeContext } from "../../context/ThemeContext";
import './Categories.css';

function Categories() {
  const { theme } = useContext(ThemeContext);
  const categories = ['React', 'Vue', 'Angular', 'Svelte', 'Ember']; // Example categories

  return (
    <div className={`${theme === 'dark' ? 'dark-theme' : 'light-theme'}`}>
      <div className="nav">
        <Navbar />
      </div>
      <div className="h-[590px] flex flex-wrap items-center justify-center gap-4 px-4">
        {categories.map((category, index) => (
          <span 
            key={index} 
            className="border px-6 md:px-10 py-1 rounded-lg text-[1.25rem] md:text-[1.5rem] font-bold text-center">
            {category}
          </span>
        ))}
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default Categories;

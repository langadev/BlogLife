import './App.css'
import Home from './Pages/Home/Home'
import Search from './components/Search/Search'
import { SearchContext } from './context/searchContext'
import { ThemeContext } from './context/ThemeContext'
import { useContext } from 'react'
import ImageComponent from './components/Firebase/Firebase'

export default function App() {
  const {theme} = useContext(ThemeContext)
  const {search} = useContext(SearchContext)
  return (
   <div className={`${theme==='dark'?'dark-theme':""} w-screen h-screen`}>
       <div className={`${search==='close'?'close':"open"}`}>
        <Search/>
       </div>
        <Home/> 
   <ImageComponent/>
   </div>
  )
}
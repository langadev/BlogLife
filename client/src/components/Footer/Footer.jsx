import { Link } from 'react-router-dom'
import  facebook from '/images/facebook-1-svgrepo-com.svg'
import  github from '/images/github-color-svgrepo-com.svg'
import  whatsaap from '/images/whatsapp-svgrepo-com.svg'
import { useContext } from 'react'
import { ThemeContext } from '../../context/ThemeContext'
import './Footer.css'

function Footer() {
  const { theme} = useContext(ThemeContext);
  
  return (
    <div className={`${theme === 'dark' ? 'dark-theme' : 'light'}`}>
        <div className="links flex justify-between px-20 py-5">
     
       <ul className='flex gap-x-3' >
        <li className='cursor-pointer'><Link to='/'>langa.dev</Link></li>
         |
        <li className='cursor-pointer'><Link to='/categories'>categories</Link></li>
        
       </ul>
       <ul className='flex gap-x-3'>
       <Link to='https://www.facebook.com/alfredo.valente.94'><li className='cursor-pointer'><img className='w-6' src={facebook} alt="" /></li></Link> 
        
        <Link to='https://github.com/AlfredoLanga/'><li className='cursor-pointer'><img className='w-6' src={github} alt="" /></li></Link>
        <Link to='https://wa.link/6we1gr'><li className='cursor-pointer'><img className='w-6' src={whatsaap} alt="" /></li></Link>
        
       </ul>
        </div>
    </div>
  )
}

export default Footer
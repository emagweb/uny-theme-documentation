import { useState } from "react"
import { Link } from "react-router-dom"
import { HashLink } from "react-router-hash-link"
import logo from '../assets/svg/logo.svg'
const Header = () => {
  const [open, setOpen] = useState(false)
  return (
    <header id='top'>
      <div className="container">
        <div className='site-nav'>
          <figure id="logo">
            {/* 36px, the height of the Live Demo button on the other end of the row: both
                are centred on the same line, so equal heights make the row read as one. */}
            <Link to="/"><img src={logo} alt='Uny' width={36} height={36} /></Link>
            <Link to="/"><span className='site-title'>Uny AI Docs</span></Link>
          </figure>
          <div onClick={() => setOpen(prev => !prev)} className={`burger ${open ? 'open' : ''}`}>
            <span className="one"></span>
            <span className="two"></span>
            <span className="three"></span>
          </div>
          <nav className={open ? 'visible' : 'hidden'}>
            <Link onClick={() => setOpen(prev => !prev)} to="/">Overview</Link>
            <Link onClick={() => setOpen(prev => !prev)} to="/theme">Theme</Link>
            <Link onClick={() => setOpen(prev => !prev)} to="/builder">Builder</Link>
            <Link onClick={() => setOpen(prev => !prev)} to="/assistant">AI Assistant</Link>
            <Link onClick={() => setOpen(prev => !prev)} to="/reference">Reference</Link>
            <HashLink onClick={() => setOpen(prev => !prev)} smooth to="#start">Quick Start</HashLink>
            <HashLink onClick={() => setOpen(prev => !prev)} smooth to="#faq">FAQ</HashLink>
            <Link onClick={() => setOpen(prev => !prev)} to='https://demo-one-uny-theme.dvostok.com/' target="_blank" className='button top'>Live Demo</Link>
          </nav>
        </div>
      </div>
    </header>
  );
};
export { Header }

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
            <Link to="/"><img src={logo} alt='Logotype' width={48} height={48} /></Link>
            <Link to="/"><span className='site-title'>Rogovsky Studio</span></Link>
          </figure>
          <div onClick={() => setOpen(prev => !prev)} className={`burger ${open ? 'open' : ''}`}>
            <span className="one"></span>
            <span className="two"></span>
            <span className="three"></span>
          </div>
          <nav className={open ? 'visible' : 'hidden'}>
            <Link onClick={() => setOpen(prev => !prev)} to="/">Home</Link>
            <Link onClick={() => setOpen(prev => !prev)} to="/services">Services</Link>
            <HashLink onClick={() => setOpen(prev => !prev)} smooth to="#reviews">Reviews</HashLink>
            <HashLink onClick={() => setOpen(prev => !prev)} smooth to="#about">About</HashLink>
            <HashLink onClick={() => setOpen(prev => !prev)} smooth to="#steps">How it Works</HashLink>
            <HashLink onClick={() => setOpen(prev => !prev)} smooth to="#team">Our Team</HashLink>
            <Link onClick={() => setOpen(prev => !prev)} to='https://calendly.com/i-andrey/studio' target="_blank" className='button top'>Book a Call</Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export { Header }

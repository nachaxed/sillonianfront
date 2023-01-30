import React from 'react'
import { Link } from 'react-router-dom'
import { FaInstagram } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='footer'>
     <div className="footerTop">
        <div className="footerDiv">
            <div className="footerLogo">
            <NavLink to='/' className='footerLogoLink'> 
                 <h2 className="footerLogoTitle">Sillonian</h2>
                <h4 className="footerLogoTitle">online shopping</h4>
            </NavLink>
            </div>

            <div className="footerLinks">
            <Link to=''>CABA(dirección)</Link>
            <Link to=''>sillonian@gmail.com</Link>
            <Link to='/'>2616557673</Link>
            </div>
        </div>    
        <div className="footerDiv">
            <div className="footerTitle">
                <h3>Shopping& categorias</h3>
            </div>
            {/* agregamos categoria de los sillones */}
            <div className="footerLinks">
            <Link to=''>uno</Link>
            <Link to=''>dos</Link>
            <Link to='/'>tres</Link>
            </div>
        </div>
        {/* agregamos los links de acerca de .. */}
        <div className="footerDiv">
            <div className="footerTitle">
                <h3>Useful Links</h3>
            </div>
            <div className="footerLinks">
            <Link to='/home'>Homepage</Link>
            <Link to='/about'>About de </Link>
            <Link to='/'>ayuda</Link>
            <Link to='/contact'>Contacto</Link>
            </div>
        </div>
        {/* mas info para el cliente o como usarlo  */}
        <div className="footerDiv">
            <div className="footerTitle">
                <h3>Ayuda e información</h3>
            </div>
            <div className="footerLinks">
            <Link to='/'>ayuda</Link>
            <Link to='/'>FAQ's</Link>
            <Link to='/'>Envios</Link>
            <Link to='/'>sigue tu pedido</Link>
            </div>
        </div>
     </div>
     <div className="footerBottom">
        <div className="footerBottomCopyright">
        <p className="footerBottomText">Copyright &copy; Sillonian</p>
        <p className="footerBottomText">Diseñado:<Link to='/'>Ignacio E. Sanchez</Link></p>
        <p className="footerBottomText">Distribuido por:<Link to='/'>Ignacio E. Sanchez</Link></p>
        <div className="footerBottomSocials">
            {/* aca van los iconos de las redes sociales */}
               <Link to='/'><FaInstagram /></Link>
        </div>    
        </div>
     </div>
    </div>
  )
}

export default Footer

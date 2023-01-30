import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { NavLink, Link } from 'react-router-dom'
import { logout } from '../redux/apiCalls.js';

const Header = () => {
    
    const user = useSelector((state) => state.user.currentUser);
    const quantity = useSelector(state=>state.cart.quantity)

    const dispatch = useDispatch();

    const logoutHandler = (e) => {
        e.preventDefault();
        logout(dispatch);
    }
  return (
    <div className='header'>
     <div className="headerTop">
            <div className="headerTopLink">
               { 
               user ?(
               <>
               <Link to='/account'>Cuenta:{user.username}</Link>
                <Link to='/cart'>Tu carrito({quantity})</Link>
                <span className='logout' onClick={logoutHandler}>Cerrar Sesión</span>
                </>
                ) :(
                    <>
                     <Link to='/'>Inicie sesión:invitado </Link>
                     <Link to='/login'>Inicie sesión / Registrate</Link>   
                    </>
                )  
                }  
            </div>
     </div>
     <div className="headerBottom">
        <div className="headerLogo">
        {/* agregamos logo aquí */}
            <NavLink to='/' className='headerLogoLink'> 
                 <img src="./assets/uploads/logo1.jpg" className='img-logo' alt="" srcset="" />
            </NavLink>
      </div>
      <div className="headerNav">
        {/* agregamos las secciones del menu */}
       <ul>
            <li>
                <NavLink to='/' className='headerNavLink'>Home</NavLink>
            </li>
            <li>
                <NavLink to='/products' className='headerNavLink'>Productos</NavLink>
            </li>
            <li>
                <NavLink to='/' className='headerNavLink'>Explorar</NavLink>
            </li>
            <li>
                <NavLink to='/contact' className='headerNavLink'>Contacto</NavLink>
            </li>
        </ul> 
      </div>
     </div>
    </div>
  )
}

export default Header

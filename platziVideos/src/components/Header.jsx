import React from 'react';
import '../../assets/styles/Header.scss';
import logo from '../../assets/images/logo-platzi-video-BW2.png';
import profile from '../../assets/images/user-icon.png';
const Header = () => (
   <header className="header">
     <img className="header__img" src={logo} alt="Platzi Video" />
     <div className="header__menu">
       <div className="header__menu--profile">
         <img src={profile} alt="" />
           <p>Perfil</p>
       </div>
       <ul>
         <li><a href="/">Cuenta</a></li>
         <li><a href="/">Cerrar Sesión</a></li>
       </ul>
     </div>
   </header>
 );
export default Header;

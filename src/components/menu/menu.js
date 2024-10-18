import React from 'react'
import './menu.css'
import logo from './../../assets/svg/logo.svg'
import calc from './../../assets/svg/calc.svg'
import rasxod from './../../assets/svg/rasxod.svg'
import phone from './../../assets/svg/phone.svg'
import human from './../../assets/svg/human.svg'
import btm from './../../assets/svg/btm.svg'
import mobileLogo from './../../assets/svg/mobilelogo.svg'
import iconmenu from './../../assets/svg/iconmenu.svg'
import x from './../../assets/svg/x.svg'
import { Link } from "react-router-dom";
import Contact from './../../pages/Contact'
import LoginModal from '../LoginModal/LoginModal'
import CallModal from '../CallModal/CallModal'
import CalcModal from '../CalcModal/CalcModal'

function menuNav() {
  return (
    <nav>
      <img className='mobilelogo' src={mobileLogo} alt='' />
      <input type='checkbox' id='check' />
      <label for='check'>
        <img src={iconmenu} alt='' id='btnmenu' />
        <img src={x} alt='' id='x' />
      </label>
      <div className='mobilemenu'>
        <div className='navbarmenu'>
          <Link to="/" relative="path" className='logo'>
            <img src={logo} alt='' />
          </Link>

          <ul>
            <li><img src={calc} alt='' /> <CalcModal /></li>
            <li><img src={rasxod} alt='' /> Сократите расходы на топливо</li>
            <li><img src={phone} alt='' /> 8 (800) 200-97-09 <span><CallModal /></span></li>
            <li>
              {/* <button><img src={human} alt='' /> Личный кабинет</button>  */}
              <LoginModal />
            </li>
          </ul>
        </div>
        <ul className='btm'>
          <Link to="/contact" relative="path">
            Партнерская программа
          </Link>
          <Link to="/yandexmap" relative="path">
            Карта заправок
          </Link>
          <li>Клиентам</li>
          <li>Поставщикам</li>
          <li>Еще <img src={btm} alt='' /></li>
        </ul>
      </div>
    </nav>
  )
}

export default menuNav
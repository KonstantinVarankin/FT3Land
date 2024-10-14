import React from 'react'
import human from './../../assets/svg/human.svg'
import btm from './../../assets/svg/btm.svg'
import mobileLogo from './../../assets/svg/mobilelogo.svg'
import iconmenu from './../../assets/svg/iconmenu.svg'
import logo from './../../assets/svg/logo.svg'
import './bottom.css'

function bottomMenu() {
  return (
    <div className='bottommenu'>
          <div className='logobtm'>
            <img src={logo} alt='' />
          </div>
          <ul className='loop'>
          <li>Партнерская программа</li>
          <li>Карта заправок</li>
          <li>Клиентам</li>
          <li>Поставщикам</li>
          <li>Еще <img src={btm} alt='' /></li>
        </ul>
        <button className='btn_bottom'><img src={human} alt='' /> Личный кабинет</button>
        </div>
  )
}

export default bottomMenu
import React from 'react'
import headerimg from './../assets/svg/headersecure.webp'
import down from './../assets/svg/downoald.svg'
import head from './../assets/svg/headersecure.webp'
import './../assets/SecureStyle/style.css'
import green1 from './../assets/svg/11.svg'
import green2 from './../assets/svg/12.svg'
import green3 from './../assets/svg/13.svg'
import green4 from './../assets/svg/14.svg'
import secure1 from './../assets/svg/secure1.webp'
import secure2 from './../assets/svg/secure2.webp'
import MenuBar from '../components/menu/menu'
import BtmMenu from '../components/bottomMenu/bottomMenu'   
import footerimg from './../assets/svg/footerimg.webp'

function Secure() {
  return (
    <div className='secure'>
        <div className='home-nav w-100' >
                <div className="container">
                <MenuBar></MenuBar>
                </div>
            </div>
        <div className="secure-head">
        <div className='container'>
                    
                    <div className='header_box'>
                        <div className='content'>
                            <h1>Безопасная сделка</h1>
                            <p>Все платежи за товар осуществляются посредством номинального счета маркетплейса, который выступает гарантом проведения взаиморасчетов между Сторонами по каждой совершаемой сделке.</p>
                            <div className='buttons d-lg-flex'>
                                <button className='green'>Попробовать</button>
                                <button className='default'><img src={down} alt='' />Скачать приложение</button>
                            </div>
                        </div>
                        <div className='img'>
                            <img src={head} alt='' />
                        </div>
                    </div>
         </div>
        </div>
        <div className='program-ndc w-100'>
                <div className='container'>
                    <div className='ndcbox w-100 d-flex flex-column justify-content-center'>
                        <h2>Схема работы сервиса</h2>
                        <div className='items w-100 d-lg-flex gap-4'>
                            <div className='item'>
                                <div className='img'>
                                    <img src={green1}  alt=''/>
                                </div>
                                <h3>Внесение предоплаты</h3>
                                <p>Покупатель заключает сделку с Продавцом и вносит предоплату на НС маркетплейса</p>
                            </div>
                            <div className='item'>
                                <div className='img'>
                                    <img src={green2}  alt=''/>
                                </div>
                                <h3>Исполнение заказа</h3>
                                <p>Продавец получает уведомление от маркетплейса о зачислении денег в свой адрес и исполняет обязательства по поставке</p>
                            </div>
                            <div className='item'>
                                <div className='img'>
                                    <img src={green3}  alt=''/>
                                </div>
                                <h3>Взаимное подтверждение</h3>
                                <p>Продавец и Покупатель подтверждают маркетплейсу исполнение сделки</p>
                            </div>
                            <div className='item'>
                                <div className='img'>
                                    <img src={green4}  alt=''/>
                                </div>
                                <h3>Перевод средств</h3>
                                <p>Маркетплейс переводит деньги Продавцу на основании закрывающих документов, остаток возвращает Покупателю</p>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
        <div className="secure-items">
            <div className="container">
                <h2 className='w-100 text-center'>Преимущество сервиса</h2>
                <div className="items">
                    <div className="item">
                        <div className="content">
                            <h3>Покупателям</h3>
                            <p>С безопасной сделкой вы получаете только то, что вам нужно: покупаете необходимый объём товара без излишков, а остаток денег автоматически возвращается на ваш расчетный счет.  <br />
                            При этом вы можете быть уверены в качестве товара, так как продавец получает оплату только после вашего подтверждения, что товар получен.</p>
                        </div>
                        <div className="img">
                            <img src={secure1} alt="" />
                        </div>
                    </div>
                    <div className="item">
                        <div className="content">
                            <h3>Поставщикам</h3>
                            <p>Продавайте напрямую проверенным покупателям! Маркетплейс гарантирует вам безопасность сделки, храня деньги за товар на специальном счете до момента его доставки. <br />
                            Такая прозрачность повышает доверие покупателей, делая вас привлекательным поставщиком. Это положительно сказывается на вашем рейтинге и увеличивает шансы получить новые заказы.</p>
                        </div>
                        <div className="img">
                            <img src={secure2} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='home-footer w-100'>
                <div className='container'>
                    <div className='boxs d-flex'>
                        <form className='formstyle'>
                        <h2>Оптимизируйте топливные <br/> затраты с FuelTime</h2>
                        <h3>Экономьте на топливе до 15%</h3>
                        <div className='inputs'>
                            <input placeholder='Введите имя' type="text" />
                            <input placeholder='Введите номер телефона' type="text" />
                        </div>
                        <button className='green'>Зарегистрироваться</button>
                         </form>
                         <div className="img">
                            <img src={footerimg} alt="" />
                         </div>
                    </div>
                </div>
            </div>
            <div className='home-bottommenu w-100'>
                <div className="container">
                <BtmMenu></BtmMenu>
                </div>
            </div>
    </div>
  )
}

export default Secure
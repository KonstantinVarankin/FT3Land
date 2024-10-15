import React from 'react'
import './../assets/ContactStyle/letter.css'
import comp from './../assets/svg/comp.webp'
import car from './../assets/svg/car.webp'
import kamaz from './../assets/svg/kamaz.webp'
import down from './../assets/svg/downoald.svg'
import MenuBar from '../components/menu/menu'
import BtmMenu from '../components/bottomMenu/bottomMenu'       

function Home() {
    return (
        <div className='latterall'>
            <div className='latter'>
                <div className='latter-head'>
                    <div className='container'>
                        <MenuBar></MenuBar>
                        <div className='text'>
                            <h1>Экономьте на маркетинге и получайте больше заказов на платформе FuelTime</h1>
                            <span>Уважаемый партнер!</span>
                            <p>Представляем FuelTaime - сервис, который поможет повышать продажи топлива. Вам не придется увеличивать рекламный бюджет - продвижением платформы и привлечением покупателей занимается наша команда. Вы получаете доступ к клиентской базе, которая ежедневно пополняется.</p>
                            <button>Cтать поставщиком</button>
                        </div>

                    </div>

                </div>
            </div>
                <div className='latter-section'>
                    <div className='container'>
                        <div className='box'>
                            <div className='content'>
                                <h2>FuelTime — простая регистрация и быстрый старт новых продаж</h2>
                                <p>Предлагаем понятную схему работы:</p>
                                <ul>
                                    <li>Заключаем договор, гарантирующий прозрачные условия сотрудничества и надежность всех сделок.</li>
                                    <li>Подключаем ваш бизнес к платформе FuelTime, помогаем настроить профиль.</li>
                                    <li>Вы размещаете предложения о продаже топлива и принимаете заявки от покупателей.</li>
                                    <li>После доставки топлива или заправки получаете деньги на ваш счет</li>
                                </ul>
                                <p>Направляем до 50% чистой прибыли на маркетинг и привлечение новых клиентов, чтобы вы могли сосредоточиться на продажах.</p>
                            </div>
                            <div className='img'>
                                <img src={comp} alt='' />
                            </div>
                        </div>
                        <div className='box'>
                        <div className='img'>
                                <img src={car} alt='' />
                            </div>
                            <div className='content'>
                                <h2>Ваши выгоды от сотрудничеств</h2>
                                <p>Платформа Full time поможет вам расширить географию поставок, улучшить финансовые показатели и укрепить репутацию на рынке. </p>
                                <ul>
                                    <li>Доступ к широкой базе клиентов по всей России. </li>
                                    <li>Увеличение чистой прибыли за счет роста продаж и снижения затрат на маркетинг. </li>
                                    <li>Постоянный поток заказов для непрерывного развития. </li>
                                    <li>Предсказуемый процесс продаж и надежные условия оплаты.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='latter-footer'>
                    <div className='container'>
                        <div className='box'>
                            <div className='downoald'>
                                <h2>Зарабатывайте больше с FuelTIme</h2>
                                <p>Скачайте презентацию, чтобы подробно узнать о возможностях платформы Fuelime и понять, как она поможет вашему бизнесу. Зарегистрируйтесь и получите специальные условия для новых поставщиков</p>
                                <div className='downoald-btn'>
                                    <button>Зарегистрироваться</button>
                                    <button className=''> <img className='down' src={down} alt=''/> Скачать презентацию</button>
                                </div>
                            </div>
                            <div className='kamaz'>
                                <img src={kamaz} alt=''/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='container'>
                    <BtmMenu></BtmMenu>

                </div>
        </div>
    )
}

export default Home
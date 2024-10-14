import React from 'react'
import './../assets/HomeStyle/style.css'
import headerimg from './../assets/svg/headerhome.svg'
import down from './../assets/svg/downoald.svg'
import downwhite from './../assets/svg/downwhite.svg'
import item1 from './../assets/svg/item1.svg'
import item2 from './../assets/svg/item2.svg'
import item3 from './../assets/svg/item3.svg'
import item4 from './../assets/svg/item4.svg'
import registr from './../assets/svg/registr.svg'
import fullimg from './../assets/svg/fulltime.webp'
import box1 from './../assets/svg/boxq.svg'
import box2 from './../assets/svg/box2.svg'
import box3 from './../assets/svg/box3.svg'
import info1 from './../assets/svg/info1.svg'
import info2 from './../assets/svg/info2.svg'
import info3 from './../assets/svg/info3.svg'
import green1 from './../assets/svg/green1.svg'
import green2 from './../assets/svg/green2.svg'
import green3 from './../assets/svg/green3.svg'
import green4 from './../assets/svg/green4.svg'
import green5 from './../assets/svg/green5.svg'
import green6 from './../assets/svg/green6.svg'
import news2 from './../assets/svg/news1.svg'
import news4 from './../assets/svg/news4.svg'
import bgfrom from './../assets/svg/Баннер.webp'
import bgfromsecond from './../assets/svg/Image.webp'
import footerimg from './../assets/svg/Image.svg'
import TabHome from '../components/tabHome/TabHome'
import SwiperHome from '../components/swiperHome/SwiperHome'
import AccordionHome from '../components/accordionHome/AccordionHome'
import SLiderHome from '../components/sliderHome/SliderHome'
import TableHome  from '../components/tableHome/TableHome'
import MenuBar from '../components/menu/menu'
import BtmMenu from '../components/bottomMenu/bottomMenu'     

function Home() {
    return (
        <div className='home'>
            <div className='home-nav w-100' >
                <div className="container">
                <MenuBar></MenuBar>
                </div>
            </div>
            <div className='home-header'>
                <div className='container'>
                    
                    <div className='header_box'>
                        <div className='content'>
                            <h1>FuelTime: экономия в каждой капле</h1>
                            <p>Все в одном приложении: заказывайте топливо, заправляйте транспорт на мобильных и стационарных АЗС, контролируйте расход и оптимизируйте маршруты</p>
                            <div className='img mobile'>
                                <img src={headerimg} alt='' />
                            </div>
                            <div className='buttons d-lg-flex'>
                                <button className='green'>Попробовать</button>
                                <button className='default'><img src={down} alt='' />Скачать приложение</button>
                            </div>
                        </div>
                        <div className='img'>
                            <img src={headerimg} alt='' />
                        </div>
                    </div>
                </div>
            </div>
            <div className='home-business'>
                <div className='container'>
                    <div className='business'>
                        <h2>Инновационная система заказа топлива и заправки для бизнеса</h2>
                        <div className='box'>
                            <div className='box-item'>
                                <div className='img'>
                                    <img src={item1} alt='' />
                                </div>
                                <p>500+ брендов АЗС и поставщиков нефтепродуктов</p>
                            </div>
                            <div className='box-item'>
                                <div className='img'>
                                    <img src={item2} alt='' />
                                </div>
                                <p>Экономия на топливе до 15% и времени заправки до 30%</p>
                            </div>
                            <div className='box-item'>
                                <div className='img'>
                                    <img src={item3} alt='' />
                                </div>
                                <p>Контроль поставщиков и качества топлива</p>
                            </div>
                            <div className='box-item'>
                                <div className='img'>
                                    <img src={item4} alt='' />
                                </div>
                                <p>Кредит и отсрочка платежа до 60 дней</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='home-fulltime'>
                <div className='container d-flex flex-column align-items-center'>
                    <h2>Эффективно управляйте топливными расходами: выбирайте предложения, заправляйтесь, контролируйте</h2>
                    <div className='box'>
                        <div className='img'>
                            <img src={fullimg} alt='' />
                        </div>
                        <div className='content'>
                            <h3>Fulltime – это платформа, объединяющая поставщиков топлива и клиентов.</h3>
                            <p>Все сделки прозрачны: вы всегда знаете, за что платите. Подключайте ваших сотрудников и устанавливайте права и лимиты для контроля расходов.</p>
                            <span>Как это работает:</span>
                            <div className='items bor'>

                                <div className='items-item'>
                                    <b>1</b>
                                    <p className='first'>Регистрируетесь на FuelTime.</p>
                                </div>
                                <div className='items-item'>
                                    <b>2</b>
                                    <p>Выбираете подходящее предложение по цене и региону.</p>
                                </div>

                            </div>
                            <div className='items'>

                                <div className='items-item'>
                                    <b>3</b>
                                    <p className=''>Фиксируете цену и оплачиваете заказ через платформу.</p>
                                </div>
                                <div className='items-item last'>
                                    <b>4</b>
                                    <p>Ожидаете доставку или заправляетесь на АЗС.</p>
                                </div>

                            </div>
                        </div>

                    </div>
                    <div className='buttons d-lg-flex'>
                        <button className='green'>Попробовать</button>
                        <button className='default'>Стать поставщиком</button>
                    </div>
                </div>
            </div>
            <div className='home-tab'>
                <div className='container'>
                    <div className='tab_box w-100'>
                        <h2>Лучшие предложения на топливо по всей России</h2>

                        <TabHome></TabHome>
                        <div className='registr'><span>Войти или зарегистрироваться</span><img src={registr} alt='' /></div>
                    </div>

                </div>
            </div>
            <div className='home-three'>
                <div className='container'>
                    <h2>Тройная выгода для: <br />
                        директора, бухгалтера и водителя</h2>
                    <div className='boxs d-lg-flex'>
                        <div className='box'>
                            <div className='img'>
                                <img src={box1} alt='' />
                            </div>
                            <h3>Руководитель</h3>
                            <ul>
                                <li>Экономия до 100 000 000 ₽ за год.</li>
                                <li>Обеспечение бесперебойной работы.</li>
                                <li>Повышение производительности труда.</li>
                                <li>Контроль топливных расходов.</li>
                            </ul>
                        </div>
                        <div className='box'>
                            <div className='img'>
                                <img src={box2} alt='' />
                            </div>
                            <h3>Руководитель</h3>
                            <ul>
                                <li>Экономия до 100 000 000 ₽ за год.</li>
                                <li>Обеспечение бесперебойной работы.</li>
                                <li>Повышение производительности труда.</li>
                                <li>Контроль топливных расходов.</li>
                            </ul>
                        </div>
                        <div className='box'>
                            <div className='img'>
                                <img src={box3} alt='' />
                            </div>
                            <h3>Руководитель</h3>
                            <ul>
                                <li>Экономия до 100 000 000 ₽ за год.</li>
                                <li>Обеспечение бесперебойной работы.</li>
                                <li>Повышение производительности труда.</li>
                                <li>Контроль топливных расходов.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className='home-form w-100'>
                <div className='container'>
                    <img className='mobile_img' src={bgfrom} alt=''/>
                    <form className='formstyle'>
                        <h2>Снижайте топливные <br /> расходы с FuelTime</h2>
                        <h3>Выбирайте выгодные вам предложения</h3>
                        <div className='inputs'>
                            <input placeholder='Введите имя' type="text" />
                            <input placeholder='Введите номер телефона' type="text" />
                        </div>
                        <button className='green'>Узнать больше</button>
                    </form>
                </div>
            </div>
            <div className='home-information w-100'>
                <div className='container'>
                    <div className='boxs w-100 d-lg-flex ' >
                        <div className='content '>
                            <h2><span>Защищаем ваши интересы:</span> <br/>
                            тщательный отбор поставщиков и регулярные проверки</h2>
                            <p>Ваше доверие - наша приоритетная задача. Поэтому постоянно следим за качеством топлива и проверяем поставщиков. Контрольные закупки и отзывы клиентов помогают нам поддерживать высокие стандарты. Поставщики, которые не соответствуют нашим требованиям, мгновенно блокируются.</p>
                        </div>
                        <div className='img'>
                            <img src={info1} alt='' />
                        </div>
                    </div>
                    <div className='boxs w-100 d-lg-flex' >
                        <div className='img'>
                            <img src={info3} alt='' />
                        </div>
                        <div className='content '>
                            <h2>Управляйте закупками топлива и заправками в <span>одном приложении</span></h2>
                            <p> Мобильное приложение FuelTime и удобный личный кабинет позволяют легко контролировать расходы и управлять закупками топлива. Все ваши заправки и взаимодействия с поставщиками - в вашем смартфоне.</p>
                            <button className='green'><img src={downwhite} alt=''/>Скачать приложение</button>
                        </div>
                    </div>
                    <div className='boxs w-100 d-lg-flex' >
                        <div className='content '>
                            <h2><span>Платите по-своему:</span> кредит, отсрочка и другие финансовые решение</h2>
                            <p>Создаем инвесторскую и трейдерскую среду для финансирования вашего бизнеса не только в топливной сфере. Начните сегодня, получите свой рейтинг покупателя и доступ к финансовой поддержке для других задач.</p>
                        </div>
                        <div className='img'>
                            <img src={info2} alt='' />
                        </div>
                    </div>
                </div>
            </div>
            <div className='home-ndc w-100'>
                <div className='container'>
                    <div className='ndcbox w-100 d-flex flex-column justify-content-center'>
                        <h2>Возврат НДС, гарантия сервиса и другие причины закупать топливо на FuelTime</h2>
                        <div className='items w-100 d-lg-flex gap-4'>
                            <div className='item'>
                                <div className='img'>
                                    <img src={green1}  alt=''/>
                                </div>
                                <h3>Заправка по вашим правилам</h3>
                                <p>Только эффективная работа – без канистр, нервов и поиска АЗС</p>
                            </div>
                            <div className='item'>
                                <div className='img'>
                                    <img src={green2}  alt=''/>
                                </div>
                                <h3>Возврат НДС</h3>
                                <p>Если у вас ОСНО - возвращайте до 20% НДС с каждой заправки</p>
                            </div>
                            <div className='item'>
                                <div className='img'>
                                    <img src={green3}  alt=''/>
                                </div>
                                <h3>Рейтинг поставщиков</h3>
                                <p>Заказывайте топливо у тех, кто уже заслужил доверие клиентов</p>
                            </div>
                        </div>
                        <div className='items w-100 d-lg-flex gap-4 mt-lg-4'>
                            <div className='item'>
                                <div className='img'>
                                    <img src={green4}  alt=''/>
                                </div>
                                <h3>Глобальный охват</h3>
                                <p>Работаем по всей России, включая самые удаленные регионы</p>
                            </div>
                            <div className='item'>
                                <div className='img'>
                                    <img src={green5}  alt=''/>
                                </div>
                                <h3>Электронная отчетность</h3>
                                <p>Получайте закрывающие документы и отчетность через ЭДО сразу после отгрузки</p>
                            </div>
                            <div className='item'>
                                <div className='img'>
                                    <img src={green6}  alt=''/>
                                </div>
                                <h3>Поддержка 24/7.</h3>
                                <p>Ответим на ваши вопросы и поможем в любое время</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='home-form w-100 second'>
                <div className='container'>
                    <img className='mobile_img' src={bgfromsecond} alt="" />
                    <form className='formstyle'>
                        <h2>Получите финансирование <br/> для вашего бизнеса</h2>
                        <h3>Узнайте о кредитованиии и отсрочке платежа</h3>
                        <div className='inputs'>
                            <input placeholder='Введите имя' type="text" />
                            <input placeholder='Введите номер телефона' type="text" />
                        </div>
                        <button className='green'>Узнать больше</button>
                    </form>
                </div>
            </div>
            <div className='home-table w-100'>
            <div className='container d-flex flex-column justify-content-center'>
                    
                    {/* Slider */}
                    <div className="tableslider gap-3 d-flex w-100">
                    <div className='card-left'>
                       <div className='headtable'>
                       Преимущества
                       </div>
                        <div className='content'>
                        Онлайн-договор
                        </div>
                        <div className='content'>
                        Возврат НДС
                        </div>
                        <div className='content'>
                        ЭДО
                        </div>
                        <div className='content'>
                        Кредитование и отсрочка
                        </div>
                        <div className='content'>
                        Контроль и аналитика расходов
                        </div>
                        <div className='content'>
                        Планирование графика заправок
                        </div>
                        <div className='content'>
                        Доставка топлива
                        </div>
                        <div className='content'>
                        Заправка в бак
                        </div>
                        <div className='content'>
                        Контроль качества топлива
                        </div>
                        <div className='content'>
                        Мобильное приложение
                        </div>
                        
                    </div>
                    <TableHome></TableHome>
                    </div>
                </div>
            </div>
            <div className='home-swiper w-100'>
                <div className="container">
                <h2><span>Кейсы: </span>Как компании оптимизируют <br/> топливные расходы благодаря FuelTime</h2>
                </div>
                    <div className='swiper_box w-100'>
                        <SwiperHome></SwiperHome>

                    </div>
            </div>
            <div className='home-news'>
                <div className='container'>
                    <div className='boxs d-lg-flex'>
                        <div className='content'>
                            <h2>FuelTime – новый стандарт топливного бизнеса</h2>
                            <p>B нашей команде работают эксперты с глубоким пониманием топливного рынка и потребностей бизнеса. Объединили разрозненные закупки топлива в одну удобную платформу с прозрачными процессами</p>
                            <h3>Стремимся стать ведущей платформой, объединяющей поставщиков и клиентов, и создать оптимальные условия для всех участников рынка.</h3>
                        </div>
                        <div className='items_box'>
                        <div className='items  d-lg-flex gap-4'>
                            <div className='item'>
                                <div className='img'>
                                    <img src={green1}  alt=''/>
                                </div>
                                <h3>Более 5000 клиентов</h3>
                                <p>Более 5000 клиентов зарегистрированных в России</p>
                            </div>
                            <div className='item'>
                                <div className='img'>
                                    <img src={news2}  alt=''/>
                                </div>
                                <h3>До 1000 заказов </h3>
                                <p>До 1000 заказов на поставку топлива ежедневно.</p>
                            </div>
                        </div>
                        <div className='items  d-lg-flex gap-4'>
                            <div className='item'>
                                <div className='img'>
                                    <img src={green1}  alt=''/>
                                </div>
                                <h3>500+ брендов</h3>
                                <p>500+ брендов АЗС и поставщиков нефтепродуктов.</p>
                            </div>
                            <div className='item'>
                                <div className='img'>
                                    <img src={news4}  alt=''/>
                                </div>
                                <h3>38 675 скачиваний</h3>
                                <p>38 675 скачиваний мобильного приложения. </p>
                            </div>
                        </div>

                        </div>
                    </div>
                </div>
            </div>
            <div className='home-accordion w-100'>
                <div className='container'>
                    <h2>Подробнее о платформе: ответы на вопросы</h2>
                    <AccordionHome></AccordionHome>
                    <div className='btns w-100 d-flex justify-content-center align-items-center'>
                        <button className='green'>Задать другой вопрос</button>
                    </div>
                </div>
            </div>
            <div className='home-client'>
                <div className='container d-flex flex-column justify-content-center'>
                    <h2>Глазами клиентов: мнения на отзовиках</h2>
                    {/* Slider */}
                    <SLiderHome></SLiderHome>
                </div>
            </div>
            <div className='home-footer'>
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

export default Home
import React from 'react'
import './../assets/ProgramStyle/style.css'
import downwhite from './../assets/svg/downwhite.svg'
import item1 from './../assets/svg/prog1.webp'
import item2 from './../assets/svg/prog2.webp'
import item3 from './../assets/svg/prog3.webp'
import item4 from './../assets/svg/prog4.webp'
import info from './../assets/svg/programinfo.webp'
import green1 from './../assets/svg/icn1.svg'
import green2 from './../assets/svg/icn2.svg'
import green3 from './../assets/svg/icn3.svg'
import green4 from './../assets/svg/icn4.svg'
import bgfrom from './../assets/svg/13.webp'
import news1 from './../assets/svg/sold1.svg'
import news2 from './../assets/svg/sold2.svg'
import news3 from './../assets/svg/sold3.svg'
import news4 from './../assets/svg/sold4.svg'
import info1 from './../assets/svg/bg1.webp'
import info3 from './../assets/svg/bg2.webp'
import yandex from './../assets/svg/yandex.svg'
import AccordionProgram from '../components/accordionProgram/AccordionProgram'
import daraxt from './../assets/svg/daraxt.webp'
import MenuBar from '../components/menu/menu'
import BtmMenu from '../components/bottomMenu/bottomMenu'     

function Program() {
  return (
    <div className='program'>
        <div className='home-nav w-100' >
                <div className="container">
                <MenuBar></MenuBar>
                </div>
        </div>
        <div className="program-head w-100">
          <div className="container">
            <div className="all_head d-flex flex-column justify-content-lg-center align-items-lg-center">
            <h1>Зарабатывайте с сервисом заказа нефтепродуктов</h1>
            <p>Рекомендуйте FuelTime и получайте процент с каждой продажи, совершенной с вашей помощью</p>
            <div className="inputs">
              <input type="tel" name="" id="" placeholder='Введите номер телефона'/>
              <button className='green'>Узнать подробнее</button>
            </div>
                
            </div>
          </div>
        </div>
        <div className='program-business'>
                <div className='container'>
                    <div className='business'>
                        <div className='box'>
                            <div className='box-item'>
                                <div className='img'>
                                    <img src={item1} alt='' />
                                </div>
                                <p>Прозрачное начисление вознаграждения</p>
                            </div>
                            <div className='box-item'>
                                <div className='img'>
                                    <img src={item2} alt='' />
                                </div>
                                <p>Увеличение доходов без дополнительных вложений  </p>
                            </div>
                            <div className='box-item'>
                                <div className='img'>
                                    <img src={item3} alt='' />
                                </div>
                                <p>Поддержка на всех этапах партнерства</p>
                            </div>
                            <div className='box-item'>
                                <div className='img'>
                                    <img src={item4} alt='' />
                                </div>
                                <p>Готовые маркетинговые материалы</p>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
        <div className='program-information w-100'>
                <div className='container'>
                    <div className='boxs w-100 d-lg-flex ' >
                        <div className='content '>
                            <h2>Привлекайте новых покупателей на платформу FuelTime и<span> получайте вознаграждение</span></h2>
                            <p>Реферальная программа FuelTime позволяет зарабатывать на рекомендациях сервиса потребителям топлива - вашим клиентам, партнерам, знакомым. Вы получаете процент от каждой покупки пользователя платформы, приглашенного по вашей реферальной ссылке. Это возможность получить дополнительный доход, помогая бизнесом приобретать качественное топливо по выгодным ценам.</p>
                        </div>
                        <div className='img'>
                            <img src={info} alt='' />
                        </div>
                    </div>
                </div>
        </div>
        <div className='program-ndc w-100'>
                <div className='container'>
                    <div className='ndcbox w-100 d-flex flex-column justify-content-center'>
                        <h2>Простая схема: <span>4 шага</span> к вашему доходу</h2>
                        <div className='items w-100 d-lg-flex gap-4'>
                            <div className='item'>
                                <div className='img'>
                                    <img src={green1}  alt=''/>
                                </div>
                                <h3>Старт</h3>
                                <p>Зарегистрируйтесь на платформе FuelTime и заключите договор для участия в программе. Получите уникальную реферальную ссылку для продвижения сервиса.</p>
                            </div>
                            <div className='item'>
                                <div className='img'>
                                    <img src={green2}  alt=''/>
                                </div>
                                <h3>Привлечение пользователей</h3>
                                <p>Делитесь вашей реферальной ссылкой с клиентами и партнерами, которым необходимо качественное топливо по выгодным ценам.</p>
                            </div>
                            <div className='item'>
                                <div className='img'>
                                    <img src={green3}  alt=''/>
                                </div>
                                <h3>Покупка топлива</h3>
                                <p>Клиенты перейдут по вашей ссылке, зарегистрируются на платформе Fueltime и купят топливо.</p>
                            </div>
                            <div className='item'>
                                <div className='img'>
                                    <img src={green4}  alt=''/>
                                </div>
                                <h3>Получение вознаграждения</h3>
                                <p>После каждой успешной покупки приглашенного вами клиента, вы получите вознаграждение на свой счет. Все средства отражается в личном кабинете - выводите их удобным для вас способом.</p>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
        <div className='program-form w-100'>
                <div className='container'>
                    <img className='mobile_img' src={bgfrom} alt=''/>
                    <form className='formstyle'>
                        <h2>Настройте источник допдохода с FuelTime</h2>
                        <h3>Привлекайте клиентов и получайте процент с их заправок</h3>
                        <div className='inputs'>
                            <input placeholder='Введите имя' type="text" />
                            <input placeholder='Введите номер телефона' type="text" />
                        </div>
                        <button className='green'>Узнать больше</button>
                    </form>
                </div>
        </div>
        <div className='program-news'>
                <div className='container'>
                    <div className='boxs d-lg-flex'>
                        <div className='items_box'>
                            <h2><span>Получайте 0,25%</span> с суммы каждой заправки приглашенного вами клиента</h2>
                        <div className='items  d-lg-flex gap-4'>
                            <div className='item'>
                                <div className='img'>
                                    <img src={news1}  alt=''/>
                                </div>
                                <h3>Без активных продаж</h3>
                                <p>Автоматизированная и простая в использовании программа позволит вам получать стабильный заработок с минимальными усилиями</p>
                            </div>
                            <div className='item'>
                                <div className='img'>
                                    <img src={news2}  alt=''/>
                                </div>
                                <h3>Рост лояльности клиентов</h3>
                                <p>Рекомендуя FuelTime, вы поможете своим клиентам экономить на топливе, что повысит их доверие к вам</p>
                            </div>
                            <div className='item'>
                                <div className='img'>
                                    <img src={news3}  alt=''/>
                                </div>
                                <h3>Дополнительный доход</h3>
                                <p>Каждый клиент, привлеченный по вашей реферальной ссылке, принесет вам 0,25% от суммы его заправок</p>
                            </div>
                            <div className='item'>
                                <div className='img'>
                                    <img src={news4}  alt=''/>
                                </div>
                                <h3>Расширение деловых связей </h3>
                                <p>Подключение к нашей платформе откроет новые возможности для сотрудничества и укрепления отношений с партнерами</p>
                            </div>
                        </div>

                        </div>
                    </div>
                </div>
        </div>
        <div className='home-information ml w-100'>
                <div className='container'>
                    <div className='boxs w-100 d-lg-flex ' >
                        <div className='content '>
                            <h2 className='prg'>Помогайте потребителям <span>оптимизировать расходы</span> на топливо</h2>
                            <p>Вы рекомендуете действительно полезный сервис. Продвигать Fulltime просто - покупатели топлива всегда хотят снизить свои расходы. Они будут благодарны за качественное топливо по выгодным ценам, а вы получите стабильный дополнительный доход.</p>
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
                            <h2 className='prg'><span>Проведем презентацию</span> нашей платформы и передадим рекламные материалы</h2>
                            <p> Предоставим вам все необходимое для успешного продвижения Fulltime. Вы получите готовые рекламные материалы, презентацию и скрипты продаж. Это поможет вам понятно объяснять клиентам преимущества нашего сервиса.</p>
                            <button className='green'><img src={downwhite} alt=''/>Скачать приложение</button>
                        </div>
                    </div>
                </div>
        </div>
        <div className='program-news'>
                <div className='container'>
                    <div className='boxs d-lg-flex'>
                        <div className='items_box'>
                            <div className="text">
                                <h2 className='w-100'>Эти компании <span>уже с нами</span></h2>
                                <p>Нам доверяют многие ведущие компании, и их число постоянно растет. Список партнеров  FuelTime постоянно расширяется, подтверждая качество и надежность сервиса.</p>
                            </div>
                        <div className="company_icon">
                            <div className="icon">
                                <img src={yandex} alt="" />
                            </div>
                            <div className="icon">
                                <img src={yandex} alt="" />
                            </div>
                            <div className="icon">
                                <img src={yandex} alt="" />
                            </div>
                            <div className="icon">
                                <img src={yandex} alt="" />
                            </div>
                        </div>
                        <div className="company_icon">
                            <div className="icon">
                                <img src={yandex} alt="" />
                            </div>
                            <div className="icon">
                                <img src={yandex} alt="" />
                            </div>
                            <div className="icon">
                                <img src={yandex} alt="" />
                            </div>
                            <div className="icon">
                                <img src={yandex} alt="" />
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
        </div>
        <div className='home-accordion w-100'>
                <div className='container'>
                    <h2>Раскрываем детали сотрудничества и <span>отвечаем на вопросы</span></h2>
                    <AccordionProgram></AccordionProgram>
                    <div className='btns w-100 d-flex justify-content-center align-items-center'>
                        <button className='green mt-lg-4'>Задать другой вопрос</button>
                    </div>
                </div>
            </div>
            <div className='program-footer'>
                <div className='container'>
                    <div className='boxs d-flex'>
                        <form className='formstyle'>
                        <h2>Участвуйте в реферальной <br /> программе</h2>
                        <h3>Рекомендуйте сервис, нужный всем <br /> потребителям топлива</h3>
                        <div className='inputs'>
                            <input placeholder='Введите имя' type="text" />
                            <input placeholder='Введите номер телефона' type="text" />
                        </div>
                        <button className='green'>Зарегистрироваться</button>
                         </form>
                         <div className="img">
                            <img src={daraxt} alt="" />
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

export default Program
import React from 'react'
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide"
import '@splidejs/react-splide/css'
import './style.css'
import plus from './../../assets/svg/plustable.svg'

function TableHome() {
    const splideOptions = {
        type: "slide",
        loop: true,
        perPage: 6,
        permove: 1,
        padding: '0',
        gap: '20px',
        breakpoints: {
            640: {
                perPage: 1,
            },
        }
    }

    return (
        <div className='tableHome w-100'>

            <Splide options={splideOptions} classname="">
                <SplideSlide >
                    <div className='card-tab'>
                       <div className='headtable'>
                       FuelTime
                       </div>
                        <div className='content'>
                            <div className='div'>Онлайн-договор</div>
                            <div className='img'>
                                <img src={plus} alt='' /> 
                            </div>
                            
                        </div>
                        <div className='content'>
                            <div className='div'>Возврат НДС</div>
                            <div className='img'>
                                <img src={plus} alt='' /> 
                            </div>
                            
                        </div>
                        <div className='content'>
                            <div className='div'>ЭДО</div>
                            <div className='img'>
                                <img src={plus} alt='' /> 
                            </div>
                            
                        </div>
                        <div className='content'>
                            <div className='div'>Кредитование и отсрочка</div>
                            <div className='img'>
                                <img src={plus} alt='' /> 
                            </div>
                            
                        </div>
                        <div className='content'>
                            <div className='div'>Контроль и аналитика расходов</div>
                            <div className='img'>
                                <img src={plus} alt='' /> 
                            </div>
                            
                        </div>
                        <div className='content'>
                            <div className='div'>Планирование графика заправок</div>
                            <div className='img'>
                                <img src={plus} alt='' /> 
                            </div>
                            
                        </div>
                        <div className='content'>
                            <div className='div'>Доставка топлива</div>
                            <div className='img'>
                                <img src={plus} alt='' /> 
                            </div>
                            
                        </div>
                        <div className='content'>
                            <div className='div'>Заправка в бак</div>
                            <div className='img'>
                                <img src={plus} alt='' /> 
                            </div>
                            
                        </div>
                        <div className='content'>
                            <div className='div'>Контроль качества топлива</div>
                            <div className='img'>
                                <img src={plus} alt='' /> 
                            </div>
                            
                        </div>
                        <div className='content'>
                            <div className='div'>Мобильное приложение</div>
                            <div className='img'>
                                <img src={plus} alt='' /> 
                            </div>
                            
                        </div>
                        
                    </div>
                </SplideSlide>
                <SplideSlide >
                    <div className='card-tab'>
                       <div className='headtable'>
                       FuelTime
                       </div>
                        <div className='content'>
                            <div className='div'>Онлайн-договор</div>
                            <div className='img'>
                                <img src={plus} alt='' /> 
                            </div>
                            
                        </div>
                        <div className='content'>
                            <div className='div'>Возврат НДС</div>
                            <div className='img'>
                                <img src={plus} alt='' /> 
                            </div>
                            
                        </div>
                        <div className='content'>
                            <div className='div'>ЭДО</div>
                            <div className='img'>
                                <img src={plus} alt='' /> 
                            </div>
                            
                        </div>
                        <div className='content'>
                            <div className='div'>Кредитование и отсрочка</div>
                            <div className='img'>
                                <img src={plus} alt='' /> 
                            </div>
                            
                        </div>
                        <div className='content'>
                            <div className='div'>Контроль и аналитика расходов</div>
                            <div className='img'>
                                <img src={plus} alt='' /> 
                            </div>
                            
                        </div>
                        <div className='content'>
                            <div className='div'>Планирование графика заправок</div>
                            <div className='img'>
                                <img src={plus} alt='' /> 
                            </div>
                            
                        </div>
                        <div className='content'>
                            <div className='div'>Доставка топлива</div>
                            <div className='img'>
                                <img src={plus} alt='' /> 
                            </div>
                            
                        </div>
                        <div className='content'>
                            <div className='div'>Заправка в бак</div>
                            <div className='img'>
                                <img src={plus} alt='' /> 
                            </div>
                            
                        </div>
                        <div className='content'>
                            <div className='div'>Контроль качества топлива</div>
                            <div className='img'>
                                <img src={plus} alt='' /> 
                            </div>
                            
                        </div>
                        <div className='content'>
                            <div className='div'>Мобильное приложение</div>
                            <div className='img'>
                                <img src={plus} alt='' /> 
                            </div>
                            
                        </div>
                        
                    </div>
                </SplideSlide>
                <SplideSlide >
                    <div className='card-tab'>
                       <div className='headtable'>
                       FuelTime
                       </div>
                        <div className='content'>
                            <div className='div'>Онлайн-договор</div>
                            <div className='img'>
                                <img src={plus} alt='' /> 
                            </div>
                            
                        </div>
                        <div className='content'>
                            <div className='div'>Возврат НДС</div>
                            <div className='img'>
                                <img src={plus} alt='' /> 
                            </div>
                            
                        </div>
                        <div className='content'>
                            <div className='div'>ЭДО</div>
                            <div className='img'>
                                <img src={plus} alt='' /> 
                            </div>
                            
                        </div>
                        <div className='content'>
                            <div className='div'>Кредитование и отсрочка</div>
                            <div className='img'>
                                <img src={plus} alt='' /> 
                            </div>
                            
                        </div>
                        <div className='content'>
                            <div className='div'>Контроль и аналитика расходов</div>
                            <div className='img'>
                                <img src={plus} alt='' /> 
                            </div>
                            
                        </div>
                        <div className='content'>
                            <div className='div'>Планирование графика заправок</div>
                            <div className='img'>
                                <img src={plus} alt='' /> 
                            </div>
                            
                        </div>
                        <div className='content'>
                            <div className='div'>Доставка топлива</div>
                            <div className='img'>
                                <img src={plus} alt='' /> 
                            </div>
                            
                        </div>
                        <div className='content'>
                            <div className='div'>Заправка в бак</div>
                            <div className='img'>
                                <img src={plus} alt='' /> 
                            </div>
                            
                        </div>
                        <div className='content'>
                            <div className='div'>Контроль качества топлива</div>
                            <div className='img'>
                                <img src={plus} alt='' /> 
                            </div>
                            
                        </div>
                        <div className='content'>
                            <div className='div'>Мобильное приложение</div>
                            <div className='img'>
                                <img src={plus} alt='' /> 
                            </div>
                            
                        </div>
                        
                    </div>
                </SplideSlide>
                <SplideSlide >
                    <div className='card-tab'>
                       <div className='headtable'>
                       FuelTime
                       </div>
                        <div className='content'>
                            <div className='div'>Онлайн-договор</div>
                            <div className='img'>
                                <img src={plus} alt='' /> 
                            </div>
                            
                        </div>
                        <div className='content'>
                            <div className='div'>Возврат НДС</div>
                            <div className='img'>
                                <img src={plus} alt='' /> 
                            </div>
                            
                        </div>
                        <div className='content'>
                            <div className='div'>ЭДО</div>
                            <div className='img'>
                                <img src={plus} alt='' /> 
                            </div>
                            
                        </div>
                        <div className='content'>
                            <div className='div'>Кредитование и отсрочка</div>
                            <div className='img'>
                                <img src={plus} alt='' /> 
                            </div>
                            
                        </div>
                        <div className='content'>
                            <div className='div'>Контроль и аналитика расходов</div>
                            <div className='img'>
                                <img src={plus} alt='' /> 
                            </div>
                            
                        </div>
                        <div className='content'>
                            <div className='div'>Планирование графика заправок</div>
                            <div className='img'>
                                <img src={plus} alt='' /> 
                            </div>
                            
                        </div>
                        <div className='content'>
                            <div className='div'>Доставка топлива</div>
                            <div className='img'>
                                <img src={plus} alt='' /> 
                            </div>
                            
                        </div>
                        <div className='content'>
                            <div className='div'>Заправка в бак</div>
                            <div className='img'>
                                <img src={plus} alt='' /> 
                            </div>
                            
                        </div>
                        <div className='content'>
                            <div className='div'>Контроль качества топлива</div>
                            <div className='img'>
                                <img src={plus} alt='' /> 
                            </div>
                            
                        </div>
                        <div className='content'>
                            <div className='div'>Мобильное приложение</div>
                            <div className='img'>
                                <img src={plus} alt='' /> 
                            </div>
                            
                        </div>
                        
                    </div>
                </SplideSlide>
                <SplideSlide >
                    <div className='card-tab'>
                       <div className='headtable'>
                       FuelTime
                       </div>
                        <div className='content'>
                            <div className='div'>Онлайн-договор</div>
                            <div className='img'>
                                <img src={plus} alt='' /> 
                            </div>
                            
                        </div>
                        <div className='content'>
                            <div className='div'>Возврат НДС</div>
                            <div className='img'>
                                <img src={plus} alt='' /> 
                            </div>
                            
                        </div>
                        <div className='content'>
                            <div className='div'>ЭДО</div>
                            <div className='img'>
                                <img src={plus} alt='' /> 
                            </div>
                            
                        </div>
                        <div className='content'>
                            <div className='div'>Кредитование и отсрочка</div>
                            <div className='img'>
                                <img src={plus} alt='' /> 
                            </div>
                            
                        </div>
                        <div className='content'>
                            <div className='div'>Контроль и аналитика расходов</div>
                            <div className='img'>
                                <img src={plus} alt='' /> 
                            </div>
                            
                        </div>
                        <div className='content'>
                            <div className='div'>Планирование графика заправок</div>
                            <div className='img'>
                                <img src={plus} alt='' /> 
                            </div>
                            
                        </div>
                        <div className='content'>
                            <div className='div'>Доставка топлива</div>
                            <div className='img'>
                                <img src={plus} alt='' /> 
                            </div>
                            
                        </div>
                        <div className='content'>
                            <div className='div'>Заправка в бак</div>
                            <div className='img'>
                                <img src={plus} alt='' /> 
                            </div>
                            
                        </div>
                        <div className='content'>
                            <div className='div'>Контроль качества топлива</div>
                            <div className='img'>
                                <img src={plus} alt='' /> 
                            </div>
                            
                        </div>
                        <div className='content'>
                            <div className='div'>Мобильное приложение</div>
                            <div className='img'>
                                <img src={plus} alt='' /> 
                            </div>
                            
                        </div>
                        
                    </div>
                </SplideSlide>
                <SplideSlide >
                    <div className='card-tab'>
                       <div className='headtable'>
                       FuelTime
                       </div>
                        <div className='content'>
                            <div className='div'>Онлайн-договор</div>
                            <div className='img'>
                                <img src={plus} alt='' /> 
                            </div>
                            
                        </div>
                        <div className='content'>
                            <div className='div'>Возврат НДС</div>
                            <div className='img'>
                                <img src={plus} alt='' /> 
                            </div>
                            
                        </div>
                        <div className='content'>
                            <div className='div'>ЭДО</div>
                            <div className='img'>
                                <img src={plus} alt='' /> 
                            </div>
                            
                        </div>
                        <div className='content'>
                            <div className='div'>Кредитование и отсрочка</div>
                            <div className='img'>
                                <img src={plus} alt='' /> 
                            </div>
                            
                        </div>
                        <div className='content'>
                            <div className='div'>Контроль и аналитика расходов</div>
                            <div className='img'>
                                <img src={plus} alt='' /> 
                            </div>
                            
                        </div>
                        <div className='content'>
                            <div className='div'>Планирование графика заправок</div>
                            <div className='img'>
                                <img src={plus} alt='' /> 
                            </div>
                            
                        </div>
                        <div className='content'>
                            <div className='div'>Доставка топлива</div>
                            <div className='img'>
                                <img src={plus} alt='' /> 
                            </div>
                            
                        </div>
                        <div className='content'>
                            <div className='div'>Заправка в бак</div>
                            <div className='img'>
                                <img src={plus} alt='' /> 
                            </div>
                            
                        </div>
                        <div className='content'>
                            <div className='div'>Контроль качества топлива</div>
                            <div className='img'>
                                <img src={plus} alt='' /> 
                            </div>
                            
                        </div>
                        <div className='content'>
                            <div className='div'>Мобильное приложение</div>
                            <div className='img'>
                                <img src={plus} alt='' /> 
                            </div>
                            
                        </div>
                        
                    </div>
                </SplideSlide>
            </Splide>
        </div>

    )
}

export default TableHome
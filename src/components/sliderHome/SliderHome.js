import React from 'react'
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide"
import '@splidejs/react-splide/css'
import './style.css'


function SLiderHome() {
    const splideOptions = {
        type: "slide",
        loop: true,
        perPage: 3,
        permove: 1,
        padding: '0',
        gap: '30px',
        breakpoints: {
            640: {
                perPage: 1,
            },
        }
    }

    return (
        <div className='secondSlider'>

            <Splide options={splideOptions} classname="">
                <SplideSlide >
                    <div className='card-tab'>
                       
                        <div className='content'>
                            <div className="profile">
                                <div className='avatar'>
                                    <img src='' alt=''/>
                                </div>
                                <div className='name'>
                                    <span>Иван Сергеевич Смирнов</span>
                                    <p>Индивидуальный предприниматель</p>
                                </div>
                            </div>
                            <p>Добро пожаловать на Альбион, расположенную в самом сердце города! Мы предлагаем вам топливо премиум-класса, которое обеспечит максимальную мощность и производительность вашего автомобиля. </p>
                        </div>
                        
                    </div>
                </SplideSlide>
                <SplideSlide >
                    <div className='card-tab'>
                        
                        <div className='content'>
                        <div className="profile">
                                <div className='avatar'>
                                    <img src='' alt=''/>
                                </div>
                                <div className='name'>
                                    <span>Иван Сергеевич Смирнов</span>
                                    <p>Индивидуальный предприниматель</p>
                                </div>
                            </div>
                            <p>Добро пожаловать на Альбион, расположенную в самом сердце города! Мы предлагаем вам топливо премиум-класса, которое обеспечит максимальную мощность и производительность вашего автомобиля. </p>
                        </div>
                       
                    </div>
                </SplideSlide>
                <SplideSlide >
                    <div className='card-tab'>
                        
                        <div className='content'>
                        <div className="profile">
                                <div className='avatar'>
                                    <img src='' alt=''/>
                                </div>
                                <div className='name'>
                                    <span>Иван Сергеевич Смирнов</span>
                                    <p>Индивидуальный предприниматель</p>
                                </div>
                            </div>
                            <p>Добро пожаловать на Альбион, расположенную в самом сердце города! Мы предлагаем вам топливо премиум-класса, которое обеспечит максимальную мощность и производительность вашего автомобиля. </p>
                        </div>
                        
                    </div>
                </SplideSlide>
                <SplideSlide >
                    <div className='card-tab'>
                        
                        <div className='content'>
                        <div className="profile">
                                <div className='avatar'>
                                    <img src='' alt=''/>
                                </div>
                                <div className='name'>
                                    <span>Иван Сергеевич Смирнов</span>
                                    <p>Индивидуальный предприниматель</p>
                                </div>
                            </div>
                            <p>Добро пожаловать на Альбион, расположенную в самом сердце города! Мы предлагаем вам топливо премиум-класса, которое обеспечит максимальную мощность и производительность вашего автомобиля. </p>
                        </div>
                        
                    </div>
                </SplideSlide>
                <SplideSlide >
                    <div className='card-tab'>
                        
                        <div className='content'>
                        <div className="profile">
                                <div className='avatar'>
                                    <img src='' alt=''/>
                                </div>
                                <div className='name'>
                                    <span>Иван Сергеевич Смирнов</span>
                                    <p>Индивидуальный предприниматель</p>
                                </div>
                            </div>
                            <p>Добро пожаловать на Альбион, расположенную в самом сердце города! Мы предлагаем вам топливо премиум-класса, которое обеспечит максимальную мощность и производительность вашего автомобиля. </p>
                        </div>
                        
                    </div>
                </SplideSlide>
                <SplideSlide >
                    <div className='card-tab'>
                        
                        <div className='content'>
                        <div className="profile">
                                <div className='avatar'>
                                    <img src='' alt=''/>
                                </div>
                                <div className='name'>
                                    <span>Иван Сергеевич Смирнов</span>
                                    <p>Индивидуальный предприниматель</p>
                                </div>
                            </div>
                            <p>Добро пожаловать на Альбион, расположенную в самом сердце города! Мы предлагаем вам топливо премиум-класса, которое обеспечит максимальную мощность и производительность вашего автомобиля. </p>
                        </div>
                        
                    </div>
                </SplideSlide>
                
            </Splide>
        </div>

    )
}

export default SLiderHome
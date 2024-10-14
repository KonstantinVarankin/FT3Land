import React from 'react'
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide"
import '@splidejs/react-splide/css'
import card1 from './../../../assets/svg/cardimg.svg'
import './../style.css'
import card2 from './../../../assets/svg/card2.svg'
import card3 from './../../../assets/svg/card3.svg'


function SliderSplide() {
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
        <div>

            <Splide options={splideOptions} classname="">
                <SplideSlide >
                    <div className='card-tab'>
                        <div className='img'>
                            <img src={card1} alt='' />
                        </div>
                        <div className='content'>
                            <h3>Заправка «Альбион» в сердце города, с топливом премиум-класса</h3>
                            <p>Добро пожаловать на Альбион, расположенную в самом сердце города! Мы предлагаем вам топливо премиум-класса, которое обеспечит максимальную мощность и производительность вашего автомобиля. </p>
                        </div>
                        <div className='buttons'>
                            <button className='green'>Заказать</button>
                            <button className='default'>Предложить свою цену</button>
                        </div>
                    </div>
                </SplideSlide>
                <SplideSlide >
                    <div className='card-tab'>
                        <div className='img'>
                            <img src={card2} alt='' />
                        </div>
                        <div className='content'>
                            <h3>Заправка «Альбион» в сердце города, с топливом премиум-класса</h3>
                            <p>Добро пожаловать на Альбион, расположенную в самом сердце города! Мы предлагаем вам топливо премиум-класса, которое обеспечит максимальную мощность и производительность вашего автомобиля. </p>
                        </div>
                        <div className='buttons'>
                            <button className='green'>Заказать</button>
                            <button className='default'>Предложить свою цену</button>
                        </div>
                    </div>
                </SplideSlide>
                <SplideSlide >
                    <div className='card-tab'>
                        <div className='img'>
                            <img src={card3} alt='' />
                        </div>
                        <div className='content'>
                            <h3>Заправка «Альбион» в сердце города, с топливом премиум-класса</h3>
                            <p>Добро пожаловать на Альбион, расположенную в самом сердце города! Мы предлагаем вам топливо премиум-класса, которое обеспечит максимальную мощность и производительность вашего автомобиля. </p>
                        </div>
                        <div className='buttons'>
                            <button className='green'>Заказать</button>
                            <button className='default'>Предложить свою цену</button>
                        </div>
                    </div>
                </SplideSlide>
            </Splide>
        </div>

    )
}

export default SliderSplide
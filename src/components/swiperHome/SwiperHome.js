import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import imgbg from './../../assets/svg/crs.webp'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './styles.css';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';

export default function SwiperHome() {
  return (
    <>
      <Swiper
        pagination={{
          type: 'fraction',
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className='container'>
            <div className='slide_item'>
              <div className='img'>
                <img src={imgbg} alt='' />
              </div>
              <div className='content'>
                <h3>Кейс 1. Транспортная компания «Название».</h3>
                <span>Задача:</span>
                <p>Организовать закупку топлива по выгодным ценам и упростить управление автопарком</p>
                <span>Решение:</span>
                <div className='number'>
                  <div className='count'>1</div>
                  <p>Скачали мобильное приложение Fulltime и зарегистрировались на платформе</p>
                </div>
                <div className='number'>
                  <div className='count'>2</div>
                  <p>Выбрали подходящих поставщиков по рейтингу, цене и региону</p>
                </div>
                <div className='number'>
                  <div className='count'>3</div>
                  <p>Оформили заказ на поставку топлива с удобной отсрочкой платежа</p>
                </div>
                <div className='number'>
                  <div className='count'>4</div>
                  <p>Получили электронную отчетность для упрощения  бухгалтерского учета</p>
                </div>
                <span>Результат:</span>
                <div className='number'>
                  <div className='count'>1</div>
                  <p>Сократили расходы на топливо на 15% за первый месяц благодаря выгодным предложениям</p>
                </div>
                <div className='number'>
                  <div className='count'>2</div>
                  <p>Упростили процесс управления закупками и контролем за
                    расходами</p>
                </div>
                <div className='number'>
                  <div className='count'>3</div>
                  <p>Обеспечили бесперебойную работу автопарка</p>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='container'>
            Natalia
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='container'>
            Natalia
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}

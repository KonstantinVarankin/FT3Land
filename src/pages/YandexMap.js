import React from 'react'
import './../assets/YandexMapStyle/style.css'
import MenuBar from '../components/menu/menu'
import BtmMenu from '../components/bottomMenu/bottomMenu'
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';
import search1 from './../assets/svg/search1.svg'
import search2 from './../assets/svg/search2.svg'
import search3 from './../assets/svg/searchicon.svg'
import drop from './../assets/svg/drop.svg'

function YandexMap() {
    return (
        <div className='yandexmap'>
            <div className='home-nav w-100' >
                <div className="container">
                    <MenuBar></MenuBar>
                </div>
            </div>
            <div className="headeryan">
                <div className='container d-lg-flex  justify-content-between align-items-baseline'>
                    <h2>Карта заправок</h2>
                    <div className='d-lg-flex'>
                        <div className='icon1'>
                            <img src={search1} alt='' />
                            Топливо
                        </div>
                        <div className='icon1'>
                        <img src={search2} alt='' />
                        </div>
                        <label>
                            <input placeholder='Город, адрес' />
                            <img src={search3}  alt=''/>
                        </label>
                        <div className='drop'>
                        Сеть АЗС
                        <img src={drop} alt='' />
                        </div>
                    </div>
                </div>
            </div>
            <div className='desktop'>
                <YMaps
                    width={"100%"}
                    // height={"100%"}
                    query={{
                        ns: "use-load-option",
                        load: "Map,Placemark,control.ZoomControl,control.FullscreenControl,geoObject.addon.balloon",
                    }}
                >
                    <Map
                        width={"100%"}
                        height={"100%"}
                        defaultState={{
                            center: [55.75, 37.57],
                            zoom: 9,
                            controls: ["zoomControl", "fullscreenControl"],
                        }}
                    >
                        <Placemark
                            defaultGeometry={[55.75, 37.57]}
                            properties={{
                                balloonContentBody:
                                    "This is balloon loaded by the Yandex.Maps API module system",
                            }}
                        />
                    </Map>
                </YMaps>
            </div>
        </div>
    )
}

export default YandexMap
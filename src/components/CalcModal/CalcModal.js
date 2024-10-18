import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './style.css'
import { Link } from 'react-router-dom';
import check from './../../assets/svg/Group.svg'
import Table from 'react-bootstrap/Table';


function CalcModal({ open, children, handleSubmit }) {
    const [showLogin, setShowLogin] = useState(false);
    const [showRegistr, setShowRegistr] = useState(false);
    const [showPassword, setShowPassword] = useState(false)
    const [showSuccess, setShowSuccess] = useState(false)

    const handleCloseRegistr = () => setShowRegistr(false);

    const submit = (e) => {
        e.preventDefault()
    }

    const handleCloseLogin = () => {
        setShowLogin(false);
        setShowRegistr(false);
        setShowPassword(false)
        setShowSuccess(false)
    };

    const handleShowLogin = () => {
        setShowLogin(true);
        setShowRegistr(false);
        setShowPassword(false)
        setShowSuccess(false)

    };
    const handleShowRegistr = () => {
        setShowLogin(false); // Close login modal
        setShowRegistr(true); // Open registration modal
        setShowPassword(false)
        setShowSuccess(false)
    };
    const handleShowPassword = () => {
        setShowLogin(false);
        setShowRegistr(false);
        setShowPassword(true)
        setShowSuccess(false)
    }
    const handleShowSuccess = () => {
        setShowLogin(false);
        setShowRegistr(false);
        setShowPassword(false)
        setShowSuccess(true)
    }


    return (
        <>
            {/* CALLMODAL */}
            <div className='calcmodal'>
                <Button onClick={handleShowLogin}>
                    Связаться с нами
                </Button>

                <Modal className='def-2' show={showLogin} onHide={handleCloseLogin} backdrop="static" keyboard={false}>
                    <Modal.Header closeButton>
                        <Modal.Title onClick={handleCloseLogin}></Modal.Title>
                    </Modal.Header>

                    <div className='modal-content-login-calc w-100 d-lg-flex'>
                        <div className='content-text mt-lg-5'>
                            <h2>Рассчитайте вашу экономию</h2>
                            <p>FuelTime <span>помогает</span> оптимизировать раходы и <span>экономит</span> ваши финансы</p>
                            <span>Сервисы FuelTime:</span>
                            <div className='checkboxs d-lg-flex gap-lg-4 mt-2 mb-4'>
                                <div class="checkbox-wrapper-21">
                                    <label class="control control--checkbox">
                                        АЗС
                                        <input type="checkbox" />
                                        <div class="control__indicator"></div>
                                    </label>
                                </div>
                                <div class="checkbox-wrapper-21">
                                    <label class="control control--checkbox">
                                        Мобильная заправка
                                        <input type="checkbox" />
                                        <div class="control__indicator"></div>
                                    </label>
                                </div>
                                <div class="checkbox-wrapper-21">
                                    <label class="control control--checkbox">
                                        Оптовая доставка
                                        <input type="checkbox" />
                                        <div class="control__indicator"></div>
                                    </label>
                                </div>
                            </div>
                            <span className=''>Вы плательщик НДС?</span>
                            <div className='checkboxs d-lg-flex gap-lg-4 mt-2 mb-4'>
                                <div class="checkbox-wrapper-21">
                                    <label class="control control--checkbox">
                                        Да
                                        <input type="checkbox" />
                                        <div class="control__indicator oval"></div>
                                    </label>
                                </div>
                                <div class="checkbox-wrapper-21">
                                    <label class="control control--checkbox">
                                        Нет
                                        <input type="checkbox" />
                                        <div class="control__indicator oval"></div>
                                    </label>
                                </div>
                            </div>
                            <h3 className='pt-3 mb-3'>Ваша экономия в год: <span>10 477 420, 80 ₽</span></h3>
                            <p className='grey'>Расчет примерный, цифра зависит от индивидуальных показателей</p>
                        </div>
                        <form className='formstyle ' onSubmit={submit}>
                            <div className='inputs'>
                                <div className='head d-flex justify-content-center align-items-center w-100'>
                                    <div className='texnic w-50'>Тип техники</div>
                                    <div className='gruzovik w-50'>Количество</div>
                                </div>
                                <div className='table_body d-flex justify-content-center align-items-center w-100'>
                                    <div className='name w-50'>Грузовая</div>
                                    <div className='count w-50'>
                                        <p>11</p>
                                        <button>+</button>
                                    </div>
                                </div>
                                <div className='table_body d-flex justify-content-center align-items-center w-100'>
                                    <div className='name w-50'>Коммерческая</div>
                                    <div className='count w-50'>
                                        <p>11</p>
                                        <button>+</button>
                                    </div>
                                </div>
                                <div className='table_body d-flex justify-content-center align-items-center w-100'>
                                    <div className='name w-50'>Спецтехника</div>
                                    <div className='count w-50'>
                                        <p>11</p>
                                        <button>+</button>
                                    </div>
                                </div>
                            </div>
                            <button className='green p-3' onClick={handleShowSuccess}>Начать экономить</button>
                        </form>
                    </div>
                </Modal>

                {/* Conditionally render RegistrModal */}

            </div>


            {/* SUCCESS MODAL */}
        </>
    );
}

export default CalcModal;

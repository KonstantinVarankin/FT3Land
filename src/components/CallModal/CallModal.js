import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import logo from './../../assets/svg/logo.svg';
import './style.css'
import { Link } from 'react-router-dom';
import Whatsapp from './../../assets/svg/WhatsApp 1.svg'
import viber from './../../assets/svg/viber-tile 1.svg'
import tg from './../../assets/svg/Telegram_logo 1.svg'
import gmail from './../../assets/svg/Gmail_icon_(2020) 1.svg'


function CallModal({ open, children, handleSubmit }) {
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
            <div className='callmodal'>
                <Button onClick={handleShowLogin}>
                    Связаться с нами
                </Button>

                <Modal className='def-1' show={showLogin} onHide={handleCloseLogin} backdrop="static" keyboard={false}>
                    <Modal.Header closeButton>
                        <Modal.Title onClick={handleCloseLogin}></Modal.Title>
                    </Modal.Header>

                    <div className='modal-content-login w-100 d-lg-flex'>
                        <h2>Узнайте ваши актуальные данные, и мы свяжемся с Вами в <span>течении 15 минут</span></h2>
                        <form className='formstyle ' onSubmit={submit}>
                            <div className='inputs'>
                                <input placeholder='Введите имя' type="text" />
                                <input placeholder='Введите номер телефона' type='tell' />
                                <input placeholder='Ваш e-mai' type="email" />
                            </div>
                            <button className='green' onClick={handleShowSuccess}>Узнать больше</button>
                        </form>
                    </div>
                </Modal>

                {/* Conditionally render RegistrModal */}

            </div>


            {/* SUCCESS MODAL */}
            <div className='successModal'>
                <Modal className='successModall' show={showSuccess} onHide={handleCloseLogin} backdrop="static" keyboard={false}>
                    <Modal.Header closeButton>
                        <Modal.Title onClick={handleCloseLogin}></Modal.Title>
                    </Modal.Header>

                    <div className='modal-content-success w-100'>
                        <form className='formstyle'>
                            <div className='loginlogo w-100 d-flex justify-content-center align-items-center'>
                                <img src={logo} alt="" />
                            </div>
                            <h2 className='w-100 text-center'>Спасибо, ваша заявка отправлена!</h2>
                            <p className='w-100 text-center'>Долго ждать?</p>
                            <h3 className='w-100 text-lg-center'>Наберите нас прямо сейчас</h3>
                            <div className='data w-100 text-center'>+ 0 (000) 000 00 000</div>
                            <h3 className='w-100 text-lg-center mt-2'>Наберите нас прямо сейчас</h3>
                            <div className='social d-flex w-100 justify-content-center align-items-center gap-4 mt-4'>
                                <Link to=".." relative="path">
                                    <img src={Whatsapp} alt=''/>
                                </Link>
                                <Link to=".." relative="path">
                                    <img src={viber} alt=''/>
                                </Link>
                                <Link to=".." relative="path">
                                    <img src={tg} alt=''/>
                                </Link>
                                <Link to=".." relative="path">
                                    <img src={gmail} alt=''/>
                                </Link>
                            </div>
                        </form>
                    </div>
                </Modal>

                {/* Conditionally render RegistrModal */}

            </div>
        </>
    );
}

export default CallModal;

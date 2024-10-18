import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import logo from './../../assets/svg/logo.svg';
import './style.css';

function LoginModal({ open, children, handleSubmit }) {
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
      {/* MODAL LOGIN */}
      <div className='modalLogin'>
        <Button onClick={handleShowLogin}>
          <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_333_1919)">
              <path d="M12 12C13.1867 12 14.3467 11.6481 15.3334 10.9888C16.3201 10.3295 17.0892 9.39246 17.5433 8.2961C17.9974 7.19975 18.1162 5.99335 17.8847 4.82946C17.6532 3.66557 17.0818 2.59648 16.2426 1.75736C15.4035 0.918247 14.3344 0.346802 13.1705 0.115291C12.0067 -0.11622 10.8003 0.00259972 9.7039 0.456725C8.60754 0.910851 7.67047 1.67989 7.01118 2.66658C6.35189 3.65328 6 4.81331 6 6C6.00159 7.59081 6.63424 9.11601 7.75911 10.2409C8.88399 11.3658 10.4092 11.9984 12 12ZM12 2C12.7911 2 13.5645 2.2346 14.2223 2.67412C14.8801 3.11365 15.3928 3.73836 15.6955 4.46927C15.9983 5.20017 16.0775 6.00444 15.9231 6.78036C15.7688 7.55629 15.3878 8.26902 14.8284 8.82843C14.269 9.38784 13.5563 9.7688 12.7804 9.92314C12.0044 10.0775 11.2002 9.99827 10.4693 9.69552C9.73836 9.39277 9.11365 8.88008 8.67412 8.22228C8.2346 7.56449 8 6.79113 8 6C8 4.93914 8.42143 3.92172 9.17157 3.17158C9.92172 2.42143 10.9391 2 12 2Z" fill="#00B962" />
              <path d="M12 14C9.61386 14.0026 7.32622 14.9517 5.63896 16.639C3.95171 18.3262 3.00265 20.6139 3 23C3 23.2652 3.10536 23.5196 3.29289 23.7071C3.48043 23.8946 3.73478 24 4 24C4.26522 24 4.51957 23.8946 4.70711 23.7071C4.89464 23.5196 5 23.2652 5 23C5 21.1435 5.7375 19.363 7.05025 18.0503C8.36301 16.7375 10.1435 16 12 16C13.8565 16 15.637 16.7375 16.9497 18.0503C18.2625 19.363 19 21.1435 19 23C19 23.2652 19.1054 23.5196 19.2929 23.7071C19.4804 23.8946 19.7348 24 20 24C20.2652 24 20.5196 23.8946 20.7071 23.7071C20.8946 23.5196 21 23.2652 21 23C20.9974 20.6139 20.0483 18.3262 18.361 16.639C16.6738 14.9517 14.3861 14.0026 12 14Z" fill="#00B962" />
            </g>
            <defs>
              <clipPath id="clip0_333_1919">
                <rect width="24" height="24" fill="white" />
              </clipPath>
            </defs>
          </svg> Личный кабинет
        </Button>

        <Modal className='def'  show={showLogin} onHide={handleCloseLogin} backdrop="static" keyboard={false}>
          <Modal.Header closeButton>
            <Modal.Title onClick={handleCloseLogin}></Modal.Title>
          </Modal.Header>

          <div className='modal-content-login-1 w-100'>
            <form className='formstyle' onSubmit={submit}>
              <div className='loginlogo w-100 d-flex justify-content-center align-items-center'>
                <img src={logo} alt="" />
              </div>
              <h3 className='w-100 text-lg-center'>Вход в личный кабинет</h3>
              <div className='inputs'>
                <input placeholder='Телефон/email' type="text" />
                <input placeholder='Пароль' type="password" />
              </div>
              <button className='green' onClick={handleShowSuccess}>Войти </button>
              <div className='forget_password w-100 text-end mt-2' onClick={handleShowPassword}>Забыли пароль?</div>
              <div className='registr w-100 text-center mt-lg-3' onClick={handleShowRegistr}>
                <span>Нет аккаунта? </span> <div className='greentext' onClick={handleShowRegistr}> Регистрация</div>
              </div>
            </form>
          </div>
        </Modal>

        {/* Conditionally render RegistrModal */}

      </div>

      {/* MODAL REGISTR */}
      <div className='modalLoginRegistr'>

        <Modal className='def'   show={showRegistr} onHide={handleCloseRegistr}>
          <Modal.Header closeButton onClick={handleCloseRegistr}>
            <Modal.Title></Modal.Title>
          </Modal.Header>
          <div className='modal-content-login-1 w-100'>
            <form className='formstyle'>
              <div className='loginlogo w-100 d-flex justify-content-center align-items-center'><img src={logo} alt="" /> </div>
              <h3 className='w-100 text-lg-center'>Вход в личный кабинет</h3>
              <div className='inputs'>
                <input placeholder='Имя' type="text" />
                <input placeholder='Телефон' type="text" />
                <input placeholder='E-mail' type="text" />
              </div>
              <button className='green'>Войти</button>
              <div className='forget_password w-100 text-center mt-4'>Пароль от личных кабинета будет отправлен в СМС</div>
              <div className='registr w-100 text-center mt-lg-3 '><span>Нет аккаунта? </span> <div className='greentext' onClick={handleShowLogin}> Войти</div></div>
            </form>

          </div>
        </Modal>
      </div>
      {/* FORGOT PASSWORD */}

      <div className='modalPassWord'>
        <Modal className='def'   show={showPassword} onHide={handleCloseLogin} backdrop="static" keyboard={false}>
          <Modal.Header closeButton>
            <Modal.Title onClick={handleCloseLogin}></Modal.Title>
          </Modal.Header>

          <div className='modal-content-login-1 w-100'>
            <form className='formstyle'>
              <div className='loginlogo w-100 d-flex justify-content-center align-items-center'>
                <img src={logo} alt="" />
              </div>
              <h3 className='w-100 text-lg-center'>Восстановление пароля</h3>
              <div className='inputs'>
                <input placeholder='Телефон/email' type="text" />
              </div>
              <button className='green'>Отправить </button>
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

          <div className='modal-content-login-1 w-100'>
            <form className='formstyle'>
              <div className='loginlogo w-100 d-flex justify-content-center align-items-center'>
                <img src={logo} alt="" />
              </div>
              <p className='w-100 text-center'>Спасибо за регистрацию на платформе FuelTime! Мы рады приветствовать вас среди первых пользователей нашей системы.</p>
              <h3 className='w-100 text-lg-center'>Официальный запуск проекта</h3>
              <div className='data w-100 text-center'>24.10.2024</div>
              <div className='timer w-100 d-flex justify-content-center align-items-center '>
                <div className='hour'>12</div>
                <div className='minut'>13</div>
                <div className='secund'>05</div>
              </div>
              <p className='w-100 text-center successp'>Будьте первыми, кто оценит все возможности FuelTime и получить доступ к уникальным функциям</p>
            </form>
          </div>
        </Modal>

        {/* Conditionally render RegistrModal */}

      </div>
    </>
  );
}

export default LoginModal;

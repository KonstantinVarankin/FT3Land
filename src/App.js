import React from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/Home';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ContactPage from './pages/Contact'
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/StandartStyle/style.css'
import Program from './pages/Dashboard';
import Home from './pages/Home';
import PrivacyPolicy from './pages/PrivacyPolicy';
import PrivacyPDN from './pages/PrivacyPDN';
import Secure from './pages/Secure';
import YandexMap from './pages/YandexMap';
import Question from './pages/Question';

// Конфигурация axios
axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = 'X-CSRFToken';
axios.defaults.withCredentials = true;

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path='/contact'  element={<ContactPage />}/>
                <Route path="/programm" element={<Program />} />
                <Route path='/privacyPolicy' element={<PrivacyPolicy />} />
                <Route path="/privacyPDN" element={<PrivacyPDN />} />
                <Route path="/secure" element={<Secure />} />
                <Route path="/yandexmap" element={<YandexMap />} />
                <Route path="/question" element={<Question />} />
                {/* Здесь будут добавлены другие маршруты по мере необходимости */}
            </Routes>
        </Router>
    );
}

export default App;
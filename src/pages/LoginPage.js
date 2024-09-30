import React, { useState, useEffect } from 'react';
import { TextField, Button, Container, Typography, Grid, ThemeProvider, CssBaseline } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import redirectUser from '../utils/redirectUser';
import theme from '../theme';
const apiUrl = process.env.REACT_APP_API_URL;

const getCsrfToken = () => {
    const name = 'csrftoken';
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
};

const LoginPage = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const [error, setError] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        axios.defaults.headers.common['X-CSRFToken'] = getCsrfToken();
    }, []);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        try {
            const response = await axios.post(`${apiUrl}/api/users/login/`, {
                email: formData.email,
                password: formData.password
            }, {
                headers: {
                    'Content-Type': 'application/json',
                    'X-CSRFToken': getCsrfToken()
                },
                withCredentials: true
            });

            if (response.status === 200) {
                const { user_id, user_type, is_superuser } = response.data;
                localStorage.setItem('userId', user_id);
                redirectUser(user_type, is_superuser, navigate);
            } else {
                console.error('Ошибка при входе: ', response.data.error);
            }
        } catch (error) {
            console.error(error);
            if (error.response) {
                if (error.response.status === 400) {
                    setError('Неверные данные. Проверьте введенные данные и попробуйте снова.');
                } else if (error.response.status === 401) {
                    setError('Неправильные учетные данные. Проверьте свои данные и попробуйте снова.');
                } else {
                    setError('Произошла ошибка. Попробуйте позже.');
                }
            } else {
                setError('Произошла ошибка. Попробуйте позже.');
            }
        }
    };

    const handleRegisterClick = () => {
        navigate('/register');
    };

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Container maxWidth="xs" className="bg-white p-6 rounded-lg shadow-lg">
                <Typography variant="h4" align="center" gutterBottom>
                    Добро пожаловать в FuelTime
                </Typography>
                <form onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                                label="Электронная почта"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                fullWidth
                                margin="normal"
                                size="small"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                label="Пароль"
                                name="password"
                                type="password"
                                value={formData.password}
                                onChange={handleChange}
                                fullWidth
                                margin="normal"
                                size="small"
                            />
                        </Grid>
                        {error && (
                            <Grid item xs={12}>
                                <Typography color="error" align="center">
                                    {error}
                                </Typography>
                            </Grid>
                        )}
                        <Grid item xs={12}>
                            <Button type="submit" variant="contained" color="primary" fullWidth>
                                Войти
                            </Button>
                        </Grid>
                        <Grid item xs={12}>
                            <Button
                                variant="text"
                                color="primary"
                                fullWidth
                                onClick={handleRegisterClick}
                                sx={{ mt: 2 }}
                            >
                                Зарегистрироваться
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </Container>
        </ThemeProvider>
    );
};

export default LoginPage;
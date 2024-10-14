// import React, { useState, useEffect } from 'react';
// import { TextField, Button, Container, Typography, Box, Autocomplete, MenuItem } from '@mui/material';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import regionsCities from '../data/regions_cities.json';
// const apiUrl = process.env.REACT_APP_API_URL;


// const RegisterPage = () => {
//     const [formData, setFormData] = useState({
//         first_name: '',
//         last_name: '',
//         email: '',
//         phone_number: '',
//         application: '',
//         region: '',
//         city: '',
//         referred_by: '',  // Поле referred_by
//         password: ''
//     });

//     const [error, setError] = useState('');
//     const [success, setSuccess] = useState('');
//     const [regions, setRegions] = useState([]);
//     const [cities, setCities] = useState([]);
//     const navigate = useNavigate();

//     const applications = [
//         { value: 'supplier', label: 'Поставщик' },
//         { value: 'client', label: 'Клиент' },
//         { value: 'partner', label: 'Партнер' },
//         { value: 'investor', label: 'Инвестор' }
//     ];

//     useEffect(() => {
//         const regionsSet = new Set(regionsCities.map(item => item.region));
//         setRegions([...regionsSet]);
//         setCities(regionsCities);
//     }, []);

//     const handleChange = (e) => {
//         setFormData({
//             ...formData,
//             [e.target.name]: e.target.value
//         });
//     };

//     const handleRegionChange = (event, value) => {
//         setFormData({
//             ...formData,
//             region: value,
//             city: ''
//         });
//     };

//     const handleCityChange = (event, value) => {
//         setFormData({
//             ...formData,
//             city: value
//         });
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         setError('');
//         setSuccess('');

//         for (let key in formData) {
//             if (formData[key] === '' && key !== 'referred_by') {
//                 setError('Пожалуйста, заполните все поля.');
//                 return;
//             }
//         }

//         axios.post(`${apiUrl}/api/users/register/`, formData, {
//             headers: {
//                 'Content-Type': 'application/json',
//                 'X-CSRFToken': getCsrfToken()
//             },
//             withCredentials: true
//         })
//         .then(response => {
//             setSuccess('Регистрация прошла успешно!');
//             setTimeout(() => {
//                 navigate('/login'); // Перенаправление на страницу входа
//             }, 2000); // Задержка в 2 секунды для отображения сообщения об успехе
//         })
//         .catch(error => {
//             if (error.response) {
//                 console.error('Error response data:', error.response.data);
//                 const errorMessage = error.response.data.detail || 'Попробуйте снова.';
//                 setError(`Ошибка регистрации: ${errorMessage}`);
//             } else {
//                 console.error('Error message:', error.message);
//                 setError('Ошибка регистрации. Нет ответа от сервера. Проверьте соединение.');
//             }
//         });
//     };

//     const getCsrfToken = () => {
//         const name = 'csrftoken';
//         const value = `; ${document.cookie}`;
//         const parts = value.split(`; ${name}=`);
//         if (parts.length === 2) return parts.pop().split(';').shift();
//     };

//     useEffect(() => {
//         axios.defaults.headers.common['X-CSRFToken'] = getCsrfToken();
//     }, []);

//     return (
//         <Container maxWidth="xs" sx={{ mt: 4, mb: 4 }}>
//             <Typography variant="h4" align="center" gutterBottom>
//                 Регистрация
//             </Typography>
//             <form onSubmit={handleSubmit}>
//                 <Box sx={{ mb: 2 }}>
//                     <TextField
//                         label="Имя"
//                         name="first_name"
//                         value={formData.first_name}
//                         onChange={handleChange}
//                         fullWidth
//                         margin="dense"
//                     />
//                     <TextField
//                         label="Фамилия"
//                         name="last_name"
//                         value={formData.last_name}
//                         onChange={handleChange}
//                         fullWidth
//                         margin="dense"
//                     />
//                     <TextField
//                         label="Электронная почта"
//                         name="email"
//                         value={formData.email}
//                         onChange={handleChange}
//                         fullWidth
//                         margin="dense"
//                     />
//                     <TextField
//                         label="Номер телефона"
//                         name="phone_number"
//                         value={formData.phone_number}
//                         onChange={handleChange}
//                         fullWidth
//                         margin="dense"
//                     />
//                     <TextField
//                         select
//                         label="Приложение"
//                         name="application"
//                         value={formData.application}
//                         onChange={handleChange}
//                         fullWidth
//                         margin="dense"
//                     >
//                         {applications.map((option) => (
//                             <MenuItem key={option.value} value={option.value}>
//                                 {option.label}
//                             </MenuItem>
//                         ))}
//                     </TextField>
//                     <Autocomplete
//                         options={regions}
//                         value={formData.region}
//                         onChange={handleRegionChange}
//                         renderInput={(params) => (
//                             <TextField
//                                 {...params}
//                                 label="Регион"
//                                 fullWidth
//                                 margin="dense"
//                             />
//                         )}
//                     />
//                     <Autocomplete
//                         options={cities.filter(city => city.region === formData.region).map(city => city.city)}
//                         value={formData.city}
//                         onChange={handleCityChange}
//                         renderInput={(params) => (
//                             <TextField
//                                 {...params}
//                                 label="Город"
//                                 fullWidth
//                                 margin="dense"
//                             />
//                         )}
//                     />
//                     <TextField
//                         label="Кем рекомендован"
//                         name="referred_by"
//                         value={formData.referred_by}  // Поле referred_by
//                         onChange={handleChange}
//                         fullWidth
//                         margin="dense"
//                     />
//                     <TextField
//                         label="Пароль"
//                         name="password"
//                         type="password"
//                         value={formData.password}
//                         onChange={handleChange}
//                         fullWidth
//                         margin="dense"
//                     />
//                 </Box>
//                 {error && <Typography color="error" variant="body2" align="center">{error}</Typography>}
//                 {success && <Typography color="primary" variant="body2" align="center">{success}</Typography>}
//                 <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
//                     Зарегистрироваться
//                 </Button>
//             </form>
//         </Container>
//     );
// };

// export default RegisterPage;
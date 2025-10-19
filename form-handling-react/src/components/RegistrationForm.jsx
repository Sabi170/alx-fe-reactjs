import React, { useState } from 'react';

const RegistrationForm = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});
    const [message, setMessage] = useState('');

    const validateForm = () => {
        const newErrors = {};
        if (!username) newErrors.username = 'Username is required';
        if (!email) newErrors.email = 'Email is required';
        if (!password) newErrors.password = 'Password is required';
        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const formErrors = validateForm();
        if (Object.keys(formErrors).length > 0) {
            setErrors(formErrors);
            setMessage('Please correct the errors in the form.');
        } else {
            setErrors({});
            setMessage('Registration successful! (Not actually sent to an API yet');
            console.log('Form Submitted:', { username, email, password });

            setUsername('');
            setEmail('');
            setPassword('');
        }
    };
    
    return (
        <form onSubmit={handleSubmit} style={{display: 'flex', flexDirection: 'column', maxWidth:
            '300px', margin: '20px auto', padding: '20px', border: '1px solid #ccc',
            borderRadius: '8px' }}>
                <h2>Register (Controlled Components)</h2>
                {message && <p style={{color: errors.length > 0 ? 'red' : 'green' }}>{message}</p>}
                <div style={{ marginBottom: '10px'}}>
                    <label htmlFor="username">Username:</label>
                    <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        style={{ width: '100px', padding: '8px', boxSizing: 'border-box' }}
                        />
                        {errors.username && <p style={{ color: 'red', fontSize: '0.8em' }}> {errors.username}</p>}

                </div>
                <div style={{ marginBottom: '10px' }}>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
                        />
                        {errors.email && <p style={{ color: 'red', fontSize: '0.8em' }}>{errors.email}</p>}
                </div>
                <div style={{ marginBottom: '20px' }}>
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
                        />
                        {errors.password && <p style={{ color: 'red', fontSize: '0.8em' }}>{errors.password}</p>}
                </div>
                <button type="submit" style={{ padding: '10px 15px', backgroundColor: '#007bff', color: 'white', 
                    border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
                        Register
                    </button>
            </form>
    );
};

export default RegistrationForm;
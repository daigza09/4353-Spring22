import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom'; 
import axios from 'axios';

function Login() {
    const navigate = useNavigate(); 
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [accessToken, setAccessToken] = useState('');
    const [refreshToken, setRefreshToken] = useState('');

    useEffect(() => {
        const storedAccessToken = localStorage.getItem('accessToken');
        const storedRefreshToken = localStorage.getItem('refreshToken');

        if (storedAccessToken && storedRefreshToken) {
            setAccessToken(storedAccessToken);
            setRefreshToken(storedRefreshToken);
        }
    }, []);

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
        setEmailError('');
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
        setPasswordError('');
    };

    const handleTogglePassword = () => {
        setShowPassword(!showPassword);
    };

    const handleSignIn = async (e) => {
        e.preventDefault();
        if (!email) {
            alert('Please enter an email.');
            return;
        }
        if (!password) {
            alert('Please enter a password.');
            return;
        }

        try {
            const response = await axios.post('http://localhost:8080/login/', { email, password });
            const { accessToken, refreshToken } = response.data;


            localStorage.setItem('accessToken', accessToken);
            localStorage.setItem('refreshToken', refreshToken);


            setAccessToken(accessToken);
            setRefreshToken(refreshToken);

            alert('Successfully Logged In!');
            navigate('/home');
        } catch (error) {
            console.error('Login error:', error.response.data.error);
            alert('Incorrect email or password.'); 
        }
    };

    return (
        <main style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div className="p-4 rounded" style={{ width: '50%', minWidth: '300px', maxWidth: '500px', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)'}}>
                <h2 className="text-white mb-3" style={{ marginTop: '-80px', fontSize: '24px' }}><strong>WELCOME BACK!</strong></h2>
                <p className="text-white mb-5">
                    Don't have an account, <Link to ="/signup" className="text-white">Sign Up</Link>
                </p>
                <form onSubmit={handleSignIn}>
                    <div className="mb-4" style={{ position: 'relative' }}>
                        <label htmlFor="email" className="text-white mb-2">
                            <strong>Email</strong>
                        </label>
                        <div className="position-relative">
                            <input
                                type="email"
                                placeholder="Enter Email"
                                autoComplete="off"
                                name="email"
                                value={email}
                                onChange={handleEmailChange}
                                className="form-control rounded-pill"
                                style={{ borderRadius: '20px', padding: '8px', height: '45px', color: 'black', width: '470px' }}
                            />
                            {emailError && <span className="text-danger">{emailError}</span>}
                        </div>
                    </div>
                    <div className="mb-4" style={{ position: 'relative' }}>
                        <label htmlFor="password" className="text-white mb-2">
                            <strong>Password</strong>
                        </label>
                        <div className="position-relative">
                            <input
                                type={showPassword ? "text" : "password"}
                                placeholder="Enter Password"
                                name="password"
                                value={password}
                                onChange={handlePasswordChange}
                                className="form-control rounded-pill"
                                style={{ borderRadius: '20px', padding: '8px', height: '45px', color: 'black', width: '470px' }}
                            />
                            {password && (
                                <button
                                    type="button"
                                    className="btn btn-link text-black"
                                    onClick={handleTogglePassword}
                                    style={{ position: 'absolute', top: '65%', right: '10px', transform: 'translateY(-50%)' }}
                                >
                                    {showPassword ? 'Hide' : 'Show'}
                                </button>
                            )}
                            {passwordError && <span className="text-danger">{passwordError}</span>}
                        </div>
                    </div>
                    <div className="d-flex align-items-center justify-content-between mb-4">
                        <div className="form-check d-flex align-items-center">
                        </div>
                    </div>
                    <button type="submit" className="btn btn-success rounded-pill mb-3" style={{ height: '50px', width: '100%', borderRadius: '25px', backgroundColor: '#02363d', marginTop: '40px', color: '#fff' }}>
                        Sign In
                    </button>
                </form>
            </div>
        </main>
    );
}

export default Login;








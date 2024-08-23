import React, { useState } from 'react';
import {useNavigate} from "react-router";

const LoginForm = ({setAuth}) => {
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');
    const navigate= useNavigate()



    const handleIdChange = (e) => {
        const value = e.target.value;
        setId(value);
    };

    const handlePasswordChange = (e) => {
        const value = e.target.value;
        setPassword(value);
    };

    const onSubmit = (e) => {
        e.preventDefault();
            alert('Login successful!');
            setAuth(true)
            navigate('/')


    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-white ">
            <div className="bg-stone-100  p-8 rounded-3xl shadow-lg w-full max-w-md border border-stone-200">
                <h2 className="text-2xl font-bold mb-6 text-center text-stone-800">Login</h2>
                <form onSubmit={onSubmit}>
                    <div className="mb-4">
                        <label htmlFor="id" className="block text-sm font-medium text-stone-600 mb-1">
                            Email
                        </label>
                        <div className="relative">
                            <input
                                type="text"
                                id="id"
                                className={`w-full px-4 py-3 border rounded-full focus:outline-none focus:ring-2 transition-colors ${id ? 'border-stone-500 focus:ring-stone-500' : 'border-stone-300 focus:ring-stone-400'}`}
                                placeholder="Enter your email"
                                value={id}
                                onChange={handleIdChange}
                                required
                            />
                        </div>
                    </div>
                    <div className="mb-6">
                        <label htmlFor="password" className="block text-sm font-medium text-stone-600 mb-1">
                            Password
                        </label>
                        <div className="relative">
                            <input
                                type="password"
                                id="password"
                                className={`w-full px-4 py-3 border rounded-full focus:outline-none focus:ring-2 transition-colors ${password ? 'border-stone-500 focus:ring-stone-500' : 'border-stone-300 focus:ring-stone-400'}`}
                                placeholder="Enter your password"
                                value={password}
                                onChange={handlePasswordChange}
                                required
                            />
                        </div>
                    </div>
                    <button
                        type="submit"
                        className={`w-full bg-stone-600 text-white py-3 px-4 rounded-full font-semibold hover:bg-stone-700 focus:outline-none focus:ring-2 focus:ring-stone-500 focus:ring-offset-2 transition-colors ${(!id || !password) && 'opacity-50 cursor-not-allowed'}`}
                        disabled={!id || !password }
                    > sign in
                    </button>
                </form>
            </div>
        </div>
    );
};

export default LoginForm
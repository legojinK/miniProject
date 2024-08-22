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
        <div className="min-h-screen flex items-center justify-center bg-[#F8F7F5]">
            <div className="bg-white p-8 rounded-none shadow-md w-full max-w-md border border-[#E5E2DE]">
                <h2 className="text-2xl font-serif mb-6 text-center text-[#333333]">Sign In</h2>
                <form onSubmit={onSubmit}>
                    <div className="mb-4">
                        <label htmlFor="id" className="block text-sm font-medium text-[#333333] mb-1">
                            Email
                        </label>
                        <div className="relative">
                            <input
                                type="text"
                                id="id"
                                className={`w-full px-4 py-3 border rounded-none focus:outline-none focus:ring-1 transition-colors ${id ? 'border-[#333333] focus:ring-[#333333]' : 'border-[#E5E2DE] focus:ring-[#333333]'}`}
                                placeholder="Enter your email"
                                value={id}
                                onChange={handleIdChange}
                                required
                            />
                        </div>
                    </div>
                    <div className="mb-6">
                        <label htmlFor="password" className="block text-sm font-medium text-[#333333] mb-1">
                            Password
                        </label>
                        <div className="relative">
                            <input
                                type="password"
                                id="password"
                                className={`w-full px-4 py-3 border rounded-none focus:outline-none focus:ring-1 transition-colors ${password ? 'border-[#333333] focus:ring-[#333333]' : 'border-[#E5E2DE] focus:ring-[#333333]'}`}
                                placeholder="Enter your password"
                                value={password}
                                onChange={handlePasswordChange}
                                required
                            />
                        </div>
                    </div>
                    <button
                        type="submit"
                        className={`w-full bg-[#333333] text-white py-3 px-4 rounded-none font-medium hover:bg-[#555555] focus:outline-none focus:ring-2 focus:ring-[#333333] focus:ring-offset-2 transition-colors ${(!id || !password) && 'opacity-50 cursor-not-allowed'}`}
                        disabled={!id || !password }
                    > sign in
                    </button>
                </form>
            </div>
        </div>
    );
};

export default LoginForm
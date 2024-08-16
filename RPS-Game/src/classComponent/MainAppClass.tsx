import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import StartPage from '@/StartPage';
import App from '@/App';

class MainAppClass extends Component {
    render() {
        return (
            <Router>
                <Routes>
                    <Route path="/" element={<StartPage />} />
                    <Route path="/game" element={<App />} />
                </Routes>
            </Router>
        );
    }
}

export default MainAppClass;

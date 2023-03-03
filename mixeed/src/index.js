import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './style.css';
import Dashboard from './pages/Dashboard';
import Posts from './pages/Posts';
import Main from './components/Main';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Router>
        <Routes>
            <Route path="/" element={<Main />}>
                <Route path="dashboard" element={<Dashboard />} />
                <Route path="/posts" element={<Posts />} />
            </Route>
        </Routes>
    </Router>
);

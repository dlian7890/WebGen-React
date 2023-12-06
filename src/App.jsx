import React, { useState, useEffect } from 'react';
import Home from './components/home';
import About from './components/about';
import Error from './components/error';
import Header from './components/shared/Header';
import Footer from './components/shared/Footer';
import { Routes, Route } from 'react-router-dom';
import './App.css';

const App = () => {
    return (
        <>
            <Header />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='*' element={<Error />} />
            </Routes>
            <Footer />
        </>
    );
};

export default App;

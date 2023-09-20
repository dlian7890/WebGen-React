import React from 'react';
import Box from '@mui/material/Box';
import Header from './components/shared/Header';
import Footer from './components/shared/Footer';
import './App.css';

const App = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <Header />
            <Footer />
        </Box>
    );
};

export default App;

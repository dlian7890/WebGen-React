import React from 'react';
import './About.css';
import { Typography } from '@mui/material';

const index = () => {
    return (
        <main className='about'>
            <div className='about-container'>
                <Typography variant='h4'>About Us</Typography>
                <Typography variant='body1'>
                    WebGen was created by the WebGen Vertically-Integrated
                    Project team at Stony Brook University. This app is hosted
                    by GitHub Pages.
                </Typography>
                <Typography variant='h6'>Current Contributors</Typography>
                <ul>
                    <li>Richard Moffitt, PhD</li>
                    <li>Jonas Almeida, PhD</li>
                </ul>
                <Typography variant='h6'>Alumni</Typography>
                <ul>
                    <li>Jillian Unkenholz</li>
                    <li>Soma Kobayashi</li>
                    <li>Yuwei Zhang</li>
                    <li>Ethan Earlie</li>
                    <li>Hunter Jimenez</li>
                    <li>Ki Oh</li>
                    <li>Anthony Xiang</li>
                    <li>Shweta Sankaranarayanan</li>
                    <li>Nayan Pasari</li>
                    <li>Tony Jin</li>
                    <li>Chinoso Nwabueze</li>
                    <li>Fenghsi Yu</li>
                    <li>Wen Cheng</li>
                    <li>Sam Wang</li>
                    <li>Anuki Liyanage</li>
                    <li>Kevin Chang</li>
                    <li>Jonathon Krog</li>
                    <li>Chantelle Dsilva</li>
                </ul>
            </div>
        </main>
    );
};

export default index;

import React from 'react'
import {  Route,  ReactLocation } from "react-location";
import Header from './Header';
import HomePage from './HomePage';
import Footer from './Footer';

export const routes: Route[] = [
    {
        path: "logo",
        element: <Header />
    },
    {
        path: "/",
        element: <HomePage />
    },
    {
        path: "footer",
        element:<Footer />
            
    }
];

export const location = new ReactLocation();
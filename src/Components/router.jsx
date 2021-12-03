import React from 'react'
import {  Route,  ReactLocation } from "react-location";
import Header from './Header';
import HomePage from './HomePage';

export const routes: Route[] = [
    {
        path: "logo",
        element: <Header />
    },
    {
        path: "/",
        element: <HomePage />
    },
    // {
    //     path: "todo",
    //     element:<Todos />
            
    // }
];

export const location = new ReactLocation();
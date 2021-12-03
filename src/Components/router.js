import React from 'react'
import {  Route,  ReactLocation } from "react-location";
import Header from './Header';
import HomePage from './HomePage';

import HOME_PAGE from './HOME_PAGE';

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
       path:"home",
       element: <HOME_PAGE />
   },
    // {
    //     path: "todo",
    //     element:<Todos />
    {
        path: "footer",
        element:<Footer />
            
    }
];

export const location = new ReactLocation();
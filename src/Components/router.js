import React from 'react'
import {  Route,  ReactLocation } from "react-location";
import Container2 from './Container2';
import Header from './Header';
import HomePage from './HomePage';

import Home_page from './Home_page';

import Footer from './Footer';

import Accordion from './Accordion';


import Container4 from './Container4';


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
       element: <Home_page />
   },
    // {
    //     path: "todo",
    //     element:<Todos />
    {
        path: "c2",
        element: <Container2 />
    },
    {
    //     path: "todo",
    //     element:<Todos />
        path: "footer",
        element:<Footer />   
    },
    {
        path: "accordion",
        element:<Accordion />

            
    },
    {
        path: "cont4",
        element:<Container4 />
    },
];

export const location = new ReactLocation();
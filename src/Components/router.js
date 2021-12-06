import React from 'react'
import {  Route,  ReactLocation } from "react-location";
import Container2 from './Container2';
import Header from './Header';
import HomePage from './HomePage';
import Home_page from './Home_page';
import Footer from './Footer';
import Container1 from './Container1';
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
    {
        path: "c2",
        element: <Container2 />
    },
    {
        path: "footer",
        element:<Footer />
            
    },
    {
        path: "c1",
        element:<Container1 />
    },
    
    {
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
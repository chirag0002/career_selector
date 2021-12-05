import React from 'react'
import {  Route,  ReactLocation } from "react-location";
import Container2 from './Container2';
import Header from './Header';
import HomePage from './HomePage';

import HOME_PAGE from './HOME_PAGE';

import Footer from './Footer';
import Accordion from './Accordion';


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
        path: "c2",
        element: <Container2 />
    },
    // {
    //     path: "todo",
    //     element:<Todos />
    {
        path: "footer",
        element:<Footer />
            
    },
    {
        path: "accordion",
        element:<Accordion />
            
    }
];

export const location = new ReactLocation();
import React from 'react'
import {  Route,  ReactLocation } from "react-location";
import Container2 from './Container2';
import HomePage from './HomePage';
import Footer from './Footer';
import Accordion from './Accordion';
import Container4 from './Container4';
import Container1 from './Container1';
import Searchbox from "./Search_box"
import Login from './Login';
// import CPContainer1 from './CP_Container1';
import School from "./School"


export const routes: Route[] = [
        {
        path: "/",
        element: <HomePage />
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
        path: "accordion",
        element:<Accordion />   
    },
    {
        path: "c1",
        element:<Container1 />     
    },
    {
        path: "cont4",
        element:<Container4 />
    },
    {
        path: "search",
        element:<Searchbox />
    },
    
    {
        path: "login",
        element:<Login />
    },
    // {
    //     path: "cpc1",
    //     element:<CPContainer1 />
    // },
    {
        path: "school",
        element:<School />
    },
];

export const location = new ReactLocation();
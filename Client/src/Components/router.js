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
<<<<<<< HEAD
import School from "./School";
import Colleges from './Colleges';

=======
import School from "./School"
import Pg from "./PG.js"
import Ug from "./UG.js"
>>>>>>> upstream/main


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
<<<<<<< HEAD



    {
        path: "college",
        element:<Colleges />
    },

=======
>>>>>>> upstream/main
    {
        path: "school",
        element:<School />

    },
<<<<<<< HEAD
   
=======
    {
        path:"Pg",
        element: <Pg />
    },
    {
        path:"ug",
        element: <Ug />
    }
>>>>>>> upstream/main
];

export const location = new ReactLocation();
import React from 'react'
import {  Route,  ReactLocation } from "react-location";
import Container2 from './Container2';
import HomePage from './HomePage';
import Footer from './Footer';
import Accordion from './Accordion';
import Container4 from './Container4';
import Container1 from './Container1';
import Searchbox from "./Search_box"
import School from "./School"
import PG from "./PG.js"
import UG from "./UG.js"
import College from "./College.jsx";
import Exams from "./Exams"
import About from './About'
import Blogs from "./Blogs.js";
import Developers from "./Developers";
import Header from "./Header.jsx";
import Helpus from "./Helpus";


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
        path: "school",
        element:<School />
    },
    {
        path:"pg",
        element: <PG />
    },
    {
        path:"ug",
        element: <UG/>
    },
    {
        path:"college",
        element:<College />
    },
    {
        path:"exams",
        element:<Exams/>
    },
    {
        path:"blog",
        element:<Blogs />
    },
    {
        path:"developers",
        element:<Developers />
    },
    {
        path:"Header",
        element:<Header/>
    },
    {
        path:"about",
        element:<About/>
    },
    {
        path:"helpus",
        element:<Helpus/>
    }
];

export const location = new ReactLocation();
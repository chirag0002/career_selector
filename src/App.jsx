import './App.css';
import React,{useEffect} from 'react'
import { Router, Outlet } from 'react-location';
import { routes, location } from "./Components/router"
import { useDispatch } from "react-redux";
import {getHomePage} from "./actions/SiteAction.js"



function App() {

        const dispatch = useDispatch();

        useEffect(()=> {
            dispatch(getHomePage());
        },[dispatch]);

    return (
        <Router routes={routes} location={location}>
        <div className="App" >
            <Outlet />     
              
        </div>
        </Router>
    );
}

export default App;
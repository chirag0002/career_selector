import './App.css';
import Header from './Components/Header';
import { Router, Outlet } from 'react-location';
import { routes, location } from "./Components/router"

function App() {
    return (
        <Router routes={routes} location={location}>
        <div className="App" >
            <Outlet />        
        </div>
        </Router>
    );
}

export default App;
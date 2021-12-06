import './App.css';
import Header from './Components/Header';
import Container2 from './Components/Container2';
import Container5 from './Components/Container5';
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
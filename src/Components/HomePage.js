import React from 'react'
import {Link} from "react-location"
import Header from './Header'
import Accordion from './Accordion.js'
import Container2 from './Container2'
import Container4 from './Container4'
import Footer from './Footer'
const HomePage = () => {
    return (
        <div>
         <Header />
         <Container2 />
         <Container4 />
            <Accordion />
            <Footer />
            {/* <Link to="/logo"><button>Routing</button></Link> */}
        </div>
    )
}

export default HomePage

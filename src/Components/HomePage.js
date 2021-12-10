import React from 'react'
import Accordion from './Accordion.js'
import Container2 from './Container2'
import Container4 from './Container4'
import Footer from './Footer'
import Container1 from './Container1'
import Chat from './Chat'
const HomePage = () => {
    return (
        <div>   
            <Container1/>
            <Container2 />
            <Container4 />
            <Accordion />
            <Footer />
            <Chat/>
        </div>
    )
}

export default HomePage

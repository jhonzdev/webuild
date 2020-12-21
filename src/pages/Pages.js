import React, {useState} from 'react';
import TopNav from '../components/TopNav/TopNav';
import Nav from '../components/Nav/Nav';
import Sidebar from '../components/Sidebar/Sidebar';
import Landing from '../components/Landing/Landing';
import About from '../components/About/About';
import ProjectCount from '../components/PorjectCount/ProjectCount';
import Offer from '../components/Offer/Offer';
import Contact from '../components/Contact/Contact';
import Footer from '../components/Footer/Footer';
import Portfolio from '../components/Portfolio/Portfolio';

const Pages = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    }

    return (
        <>
            <TopNav />
            <Nav toggle={toggle} />
            { isOpen ? <Sidebar isOpen={isOpen} toggle={toggle} /> : null }
            <Landing />
            <About />
            <Portfolio />
            <ProjectCount />
            <Offer />
            <Contact />
            <Footer />
        </>
    )
}


export default Pages;

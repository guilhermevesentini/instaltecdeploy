import React, { Component } from 'react'
import Navbar from './Main/Navbar.js';
import SideMenu from './Main/SideMenu.js';
import Dashboard from './Home/Dashboard';
import Footer from './Main/Footer.js';



export default class Home extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <SideMenu />
                <Dashboard/>               
                <Footer />
                
            </div>
        )
    }
};




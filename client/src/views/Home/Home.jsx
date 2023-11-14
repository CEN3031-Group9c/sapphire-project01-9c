import React from 'react';
import Logo from "../../assets/CodeSparks_logo.png";
import NavBar from "../../components/NavBar/NavBar";
import './Home.less';
import HomeJoin from "./HomeJoin";

const Home = () => (
    <div className='container nav-padding'>
        <NavBar />
        <div id='join-wrapper'>
            <img src={Logo} id='CodeSparks-logo' alt='logo'/>
            <HomeJoin />
        </div>
    </div>
)

export default Home;
import React from 'react';
import './Home.css';
//import Landingimage from '../Assets/bank.png';
import Background from '../Assets/banker.jpg'
import * as Reactbootstrap from 'react-bootstrap';


//Home page contents
const Home = () => {
    return ( 
        <div>
            <Reactbootstrap.Row>
                <Reactbootstrap.Col>
                    <div className="landing-page">
                        <h1 style={{color:'yellow'}}><b>Welcome to Sparks Bank</b></h1>
                        <h4>The Safest Place to Secure your Hard Earned Money</h4>
                    </div>
                </Reactbootstrap.Col>
                <Reactbootstrap.Col className="home-image" >
                    <img src={Background} className="webpic" alt="Home-page-Graph" height='500px' width='600px'/>
                </Reactbootstrap.Col>
            </Reactbootstrap.Row>
        </div>
     );
}
 
export default Home;
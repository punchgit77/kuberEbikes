/* eslint-disable no-unused-vars */
import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './NavbarArea';
import './styles/styles.css'

const Home = () => {

    const title = useRef();

    return (
        <div className='container'>

            <Navbar title={title}/>
              
                <div className='images'>
                  <img className="img" src="https://www.kuberebikes.com/static/media/mdls.d6f112c6.png" alt="none"/>

                </div>

                

            
            <div className='features'>
     
                    <h1>FEATURES</h1>
                    <div className='feature-elements'>

                    <ul>
                        <li><i class="fas fa-leaf"></i><p>eco friendly</p></li>
                        <li><i class="fas fa-tools"></i><p>low maintenance</p></li>
                        <li><i class="fas fa-id-badge"></i><p>no license</p></li>
                        <li><i class="fas fa-book"></i><p>no registration</p></li>
                    </ul>
                    </div>
                        </div>
            <section>
            <div ref={title} className='about'>
                <h1 className='about-header'>ABOUT US</h1>
                    <p className='about-detailed'>
                    Kuber E-bikes is one of India’s leading electric two-wheeler manufacturer. Our goal is to build a better, cleaner and greener future for the generations to come.
                    </p>
                    <p className='choose'> why choose us?</p>
                    <ul>
                       <li>Best Products</li>
                       <li>Quality Service</li>
                       <li>Trusted Dealers</li>
                       <li>Excellent Support</li>    
                    </ul>


            </div>
            </section>

            <section>
                <div className='footer'>     
                   <div className="touch">
                    <h1>Get in Touch</h1>
                     <ul>
                         <li>Contact Us on +918950754626</li>
                         <li>Email Us on info@kuberebikes.com</li>
                         <li></li>
                     </ul>
                </div>
                <div className="links">
                    <h1>Quick Links</h1>
                     <ul>
                         <li>Home</li>
                         <li>About Us</li>
                         <li>Become a Dealer</li>
                     </ul>
                </div>

                <div className="models">
                    <h1>Models</h1>
                     <ul>
                         <li>Juniper</li>
                         <li>Festiva</li>
                         <li>Vamos</li>
                     </ul>
                </div>
            </div>
                <div className='imager' >
                  <img src="https://us.123rf.com/450wm/booblgum/booblgum1804/booblgum180400246/99485676-india-city-skyline-with-color-buildings-isolated-on-white-delhi-mumbai-bangalore-chennai-vector-illu.jpg?ver=6" alt=""/>

                </div>

            </section>
                <div className='scooter'></div>
            <div className="end" style={{display:'flex',justifyContent:'space-evenly',fontWeight:'bolder',marginTop:'5%'}}>
                <p> © Kuber E-Bikes 2021 All rights reserved.</p>
                 <a href='https://www.facebook.com/kuberebikes' target='_blank'><i class="fab fa-facebook"></i></a>
                <p>Made with in Kuber E-Bikes</p>
            </div>
        
        </div>
    )
}

export default Home;
import React from 'react';
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons'

import '../styles/landing.css';
import CardPrimary from "./Cards";
import { ButtonPrimary, ButtonSecondary } from './Buttons'
import cglogo from '../imgs/CG_Full+Logo.png';
import { faMugHot, faCouch, faGuitar } from '@fortawesome/free-solid-svg-icons';


function Landing () {
    return (
        <Parallax pages={2.73}>
            <div>
               
                <section className='section section-top animate'>
                    <ParallaxLayer offset={0} speed={1} >
                        <div className='content'>
                            <h1>Common Grounds Waco</h1>
                            <ButtonPrimary text='Order Now' target="https://orders.cake.net/11118835" />
                            <ButtonSecondary text='Menu' target="https://orders.cake.net/11118835" />
                            
                        </div>
                    </ParallaxLayer>
                </section>
            

                <section className='section-about'>
                    <ParallaxLayer offset={0} speed={-.15}>
                        <img
                            src={cglogo}
                            className='logo'
                            alt="#"
                        />
                    </ParallaxLayer>
                
                    <ParallaxLayer offset={.87} speed={1}>
                        <div className='content'>
                            <div>
                                <h3 className='primary-text'>COVID-19 Update</h3>
                                <p>
                                    <span className="covid-notice">We are OPEN daily 7A-7P!</span>
                                    Guests can use our drive-thru or order inside to-go. In effort to minimize contact and increase efficiency, we encourage you to use our Order Ahead function no matter how you plan to pickup your drink. <br/>
                                    Retail coffee is now available through order ahead! If you would like us to grind it for you, tell us in the special instructions area when you place your order.
                                </p>
                            </div>
                            <div>
                                <h3 className='primary-text'>Granola Notice</h3>
                                <p>Common Grounds Serves Responsibly Sourced And Carefully Roasted Coffees From All Over The World.</p>
                            </div>
                        </div>
                    </ParallaxLayer>
                </section>

                <section className='section-grid'>
                    
                    {/* <ParallaxLayer offset={1} speed={2} factor={.40}> */}
                            <CardPrimary
                                className='grid-item'
                                icon={faMugHot} 
                                heading="Drink Coffee"
                                text="We have dope coffee. Plain and simple. We pride ourselves on the sourcing of our products and our creative creations."
                            />
                    {/* </ParallaxLayer> */}
                    
                    {/* <ParallaxLayer offset={.75} speed={1.15} factor={.40}> */}
                            <CardPrimary
                                className='grid-item'
                                icon={faCouch} 
                                heading="Relax"
                                text="Common Grounds Waco has amazing homey vibes. With our large selection of collegiate couches and extensive variety of wall outlets, you'll feel right at home!"
                            />
                    {/* </ParallaxLayer> */}
 
                    {/* <ParallaxLayer offset={1} speed={2} factor={.40}> */}
                            <CardPrimary
                                className='grid-item'
                                icon={faGuitar} 
                                heading="Concerts"
                                text="Common Grounds Waco has amazing homey vibes. With our large selection of collegiate couches and extensive variety of wall outlets, you'll feel right at home!"
                            />
                    {/* </ParallaxLayer> */}
                    
                </section>


                <footer className='footer'>
                    <ul>
                        <li><a href="#" className="footerItem">Menu</a></li>
                        <li><a href="#" className="footerItem">Locations</a></li>
                        <li><a href="#" className="footerItem">Apply</a></li>
                        <li><a href="#" className="footerItem">Contact Us</a></li>
                        <li><a href="#" className="footerItem">Follow Us</a></li>
                    </ul>
                    <div class="footer-notice">Copyright © 2020 Common Grounds Waco</div>
                </footer>
            </div>

        </Parallax>
    )
}

export default Landing;
import React from 'react';
import Headshot from '../images/jonah-picture.JPG';
import Timeline from '../images/Timeline.png';
import BoardGame from '../images/board-games.JPG';
import BuildingLego from '../images/building-lego.jpg';
import Whitewater from '../images/whitewater-rafting.jpg';

function About()
{
    return( 
        <div className="bg-white pt-12 md:pt-16 relative">
            <div className="w-full">
                <section className="bg-white py-20">
                    <div className="grid lg:grid-cols-2 mx-auto px-4 xl:px-60 container">
                        <img src={Headshot} alt="A picture of me. A white male with brown hair and hazel eyes." className="object-cover object-top rounded-full w-80 h-80 mx-auto mb-8 lg:mb-0"></img>
                        <div>
                            <p className="font-display text-black text-3xl md:text-5xl font-semibold pb-6">Why I Design</p>
                            <p className="text-gray-800 md:text-lg max-w-xl">Hey there! I'm Jonah. My passion is designing useful, enjoyable, and equitable digital products. I believe that as a designer, I play a critical role in shaping the future of technology.
                            <br></br><br></br>
                            I design because I enjoy designing! It's as simple as that. I love problem solving - and being a designer allows me to solve problems using my creative toolkit.</p>
                        </div>
                    </div>              
                </section>
                <section className="bg-black py-20 md:bg-angled-lg bg-angled-xl">
                    <div className="grid lg:grid-cols-2 mx-auto px-4 xl:px-60 container xl:py-12 gap-4">
                        <div>
                            <p className="font-display text-white text-3xl md:text-5xl pb-6 font-semibold">My Background</p>
                            <p className="text-white md:text-lg max-w-xl">I have 3+ years of experience designing and developing enterprise software. Although I'm relatively new to UX, I've had a wide range of experiences in other disciplines. I've worked in different industries with teams of different sizes and on products for different platforms.
                        <br></br><br></br>At this point in my career, I'd consider myself a UX generalist - I have strong foundations in visual design, interaction design, user research, and UX writing. Looking ahead, I want to dive deeper into interaction design and visual design. Eventually I'd like to become a UX leader.</p>
                        </div>
                        <img src={Timeline} alt="A timeline that shows my work experience from 2015 to 2021." className="mx-auto"></img>
                    </div>
                </section>
                <section className="bg-white py-20">
                    <div className="mx-auto px-4 xl:px-60 container">
                        <div className="grid lg:grid-cols-2 lg:grid-rows-2 gap-4 pt-6">
                            <div className="lg:col-span-2">
                                <p className="font-display text-black text-3xl md:text-5xl pb-6 font-semibold">Hobbies & Interests</p>
                                <p className="text-gray-800 md:text-lg max-w-xl">I enjoy just about anything competitive - but especially board games, pickleball, ping pong, and Age of Empires II. There are very few board games I haven't played (or at least heard of). Some of my current favorites are 7 Wonders, Terra Mystica, and Catan.
                                <br></br><br></br>I'm also a LEGO fanatic. I don't think I'd be into UX if it weren't for LEGO. Building LEGO is my creative outlet outside of work. Below, you can see me finishing up one of my latest creations.</p>
                            </div>
                            <img alt="A picture of me building a large lego spaceship." src={BuildingLego}></img>
                            <img alt="A group of people playing a board game inside a bar." src={BoardGame}></img>
                        </div>
                    </div>
                </section>
            </div>
            <section className="py-8 bg-black">
                <div className="max-w-4xl mx-auto px-4 md:px-0">
                <p className="font-display text-white font-semibold text-2xl md:text-4xl text-center">Connect with me on LinkedIn</p>
                <div className="mx-auto max-w-max pt-8">
                    <a className="transition font-semibold text-center uppercase text-brandGreen bg-transparent font-display border-2 border-brandGreen hover:bg-brandGreen hover:text-black shadow-md hover:shadow-lg active:shadow-sm px-12 py-2" href="https://www.linkedin.com/in/jonah-miller-b98346136/">View LinkedIn Profile</a>
                </div>
                </div>
            </section>
        </div>                 
    );
}

export default About;
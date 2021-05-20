import React from 'react';
import {Link} from "react-router-dom";
import TKImage from '../../images/tk-project.png';
import Inspiration1 from '../../images/etrade.png';
import Inspiration2 from '../../images/thermokingdotcom.PNG';
import StyleGuide from '../../images/styleguide.PNG';
import VehicleListOld from '../../images/vehiclelist-old.png';
import VehicleListNew from '../../images/vehiclelist-new.png';
import SelectFleet from '../../images/selectfleet.gif';

function ThermoKingProject()
{
    return( 
        <div className="bg-black pt-20">
            <section className="px-4 md:px-0 max-w-4xl mx-auto py-6">
                    <div className="flex flex-col space-y-2">
                        <p className="font-display text-white font-semibold text-3xl md:text-4xl lg:text-5xl leading-tight">Designing a New Mobile Experience for Thermo King Customers</p> 
                        <p className="text-gray-400 text-lg pt-1 pb-4">3 min read&nbsp;&nbsp;//&nbsp;&nbsp;January 2021 - Present</p>  
                    </div>           
            </section>
            <section className="flex flex-row">
                <div className="flex flex-col w-5/12">
                    <div className="bg-black h-1/5"></div>
                    <div className="bg-white h-4/5"></div>
                </div>
                <img src={TKImage} alt="Screens from Thermo King Connect placed onto several phones." className="w-full max-w-4xl"></img>
                <div className="flex flex-col w-5/12">
                    <div className="bg-black h-1/5"></div>
                    <div className="bg-white h-4/5"></div>
                </div>
            </section>
            <section className="bg-white py-4">
                <div className="max-w-4xl mx-auto px-4 md:px-0">
                    <div className="grid md:grid-cols-3 md:space-x-4 space-y-2 md:space-y-0">
                        <div className="bg-white p-8 shadow-lg border border-gray-200">
                            <p className="text-black font-semibold font-display text-2xl pb-2">My Role</p>
                            <hr></hr>
                            <p className="text-gray-800 md:text-lg pt-4">Visual Designer. Responsible for defining look & feel, icons, and gestures. Worked closely with a Senior User Researcher/Strategist who provided wireframes.</p>
                        </div>
                        <div className="bg-white p-8 shadow-lg border border-gray-200">
                            <p className="text-black font-semibold font-display text-2xl pb-2">Project Team</p>
                            <hr></hr>
                            <p className="text-gray-800 md:text-lg pt-4">Product Manager, Senior User Researcher/Strategist, Marketing</p>
                        </div>
                        <div className="bg-white p-8 shadow-lg border border-gray-200">
                            <p className="text-black font-semibold font-display text-2xl pb-2">Tools I Used</p>
                            <hr></hr>
                            <p className="text-gray-800 md:text-lg pt-4">Adobe XD, Axure, Visio, Microsoft Teams, Excel, PowerPoint</p>
                        </div>    
                    </div>
                </div>
            </section>
            <section className="bg-white py-4">
                <div className="max-w-4xl mx-auto px-4 md:px-0">
                    <p className="text-black text-2xl md:text-4xl font-display font-semibold pb-4">Background</p>
                    <p className="text-black md:text-lg mb-8">Today, there are a lot of Thermo King mobile apps (11 in Apple’s App Store at the time of writing this). This is problematic because each app has different features, different designs, and in some cases different sign-on methods. Recently, we’ve been working to improve the mobile experience for our customers by consolidating the most used features into a single app. I was tasked with defining the visual design for this app.
                    </p>
                    <p className="text-black text-2xl md:text-4xl font-display font-semibold pb-4">Stakeholder Interviews</p>
                    <p className="text-black md:text-lg pb-8">I started the design process by meeting with the product manager who had initiated the project. Before designing anything, I wanted to understand specific details about the project. I asked questions to identify the problems we were trying to solve and to learn about our user base.                    
                    </p>
                    <p className="text-black text-2xl md:text-4xl font-display font-semibold pb-4">Visual Research</p>
                    <p className="text-black md:text-lg pb-4">My next step was gathering references for the visual design. I knew the app would need to display a lot of data, so I looked for apps that displayed complex data in a way that was meaningful and easy-to-digest.              
                    </p>
                    <img src={Inspiration1} alt="A line chart from the E*TRADE app" className="mx-auto border border-gray-200 max-w-md"></img>
                    <p className="text-gray-500 mx-auto pt-2 pb-4 max-w-3xl text-center text-sm md:text-base">I was inspired by how the E*TRADE app uses color to convey meaning.</p>
                    <p className="text-black md:text-lg pb-4">We also wanted the app to feel like a Thermo King product. The visual design needed to adhere to our brand guidelines, so I looked for examples of how we presented our brand in other digital mediums.               
                    </p>
                    <img src={Inspiration2} alt="A screenshot from ThermoKing.com" className="mx-auto border border-gray-200"></img>
                    <p className="text-gray-500 mx-auto pt-2 pb-4 max-w-3xl text-center text-sm md:text-base">I borrowed many design elements from Thermoking.com, including buttons and the title bar.</p>
                    <p className="text-black text-2xl md:text-4xl font-display font-semibold pb-4">Creating a Style Guide</p>
                    <p className="text-black md:text-lg pb-4">Feeling sufficiently inspired, I began to sketch some ideas in Adobe XD. At this point, only two weeks remained before I had to present design concepts for 11 screens to the stakeholders (some of these would be redesigns of existing screens, others were entirely new screens). Because of the tight timeline, I chose to settle on one style that met the criteria that I’d been given. After building a library of components in this style, I started working on individual screen designs.               
                    </p>
                    <img src={StyleGuide} alt="A style guide that describes how to use colors, fonts, and components in Thermo King Connect." className="mx-auto border border-gray-200"></img>
                    <p className="text-gray-500 mx-auto pt-2 pb-4 max-w-3xl text-center text-sm md:text-base">In the interest of time and cross-platform consistency, we decided to create one component library that could work on both iOS and Android. Many of our components were taken from (or inspired by) the iOS and Material Design UI kits.</p>
                    <p className="text-black text-2xl md:text-4xl font-display font-semibold pb-4">Redesigning the Vehicle List</p>
                    <p className="text-black md:text-lg pb-4">The Vehicle List screen was one of the screens that would be migrating from one of the existing apps to the new app. Customers use this screen to view and manage their fleets. They want to see a lot of data on this screen, but that data needs to be easily digestible.  
<br></br><br></br>When I redesigned this screen, I thought a lot about how the new design could meet this need. The existing design was hard to scan because there wasn’t really any visual hierarchy. Important information looked very similar to less important information. In the new design, I used different font weights, colors, and sizes to emphasize key information. 
<br></br><br></br>I also wanted to make better use of space. Because of how the information was arranged in the existing design, only display three data points could be displayed for each vehicle. The new design has no such limitation. Users can view any number of data points by scrolling from left to right.              
                    </p>
                    <div className="mx-auto grid grid-cols-2 gap-4">
                        <img src={VehicleListOld} alt="The old version of the vehicle list" className="border border-gray-200"></img>
                        <img src={VehicleListNew} alt="The new version of the vehicle list" className="border border-gray-200"></img>
                    </div>
                    <p className="text-gray-500 mx-auto pt-2 pb-8 max-w-3xl text-center md:text-base text-sm">Side-by-side comparison of the existing vehicle list (left) and the redesigned vehicle list (right).</p>
                    <p className="text-black text-2xl md:text-4xl font-display font-semibold pb-4">Adding a Way to Change Fleets</p>
                    <p className="text-black md:text-lg pb-8">In the existing Thermo King vehicle monitoring app, the “dealer view” of the vehicle list shows information for all the dealer’s customers. There’s a lot of information to take in and it’s difficult to determine which vehicle belongs to which customer. Unsurprisingly, Thermo King dealers have been asking for a way to filter the vehicle list by customer fleet for a long time. 
<br></br><br></br>Since this was such a widely requested feature, I wanted to ensure it was easy to find. The title of the Vehicle List page became the name of the currently selected fleet. Dealers could change the fleet by tapping on the title. I added a chevron for tap affordance.             
                    </p>
                    <img src={SelectFleet} alt="An animated gif that demonstrates how to change a fleet in Thermo King Connect." className="mx-auto border border-gray-200 pb-8 max-w-sm"></img>
                    <p className="text-black text-2xl md:text-4xl font-display font-semibold pb-4">Outcome</p>
                    <p className="text-black md:text-lg pb-8">Work on the new app is ongoing. We’re currently planning a usability test to determine if users have any issues performing basic tasks with the new app.             
                    </p>
                </div>
            </section>
            <section className="py-8">
                <div className="max-w-4xl mx-auto px-4 md:px-0">
                <p className="font-display text-white font-semibold text-2xl md:text-4xl text-center">Thanks for reading!</p>
                <div className="mx-auto max-w-max pt-4">
                    <Link to="/EnsembleProject">
                        <button className="transition border-transparent font-semibold text-center uppercase hover:text-brandGreen hover:bg-transparent font-display h-10 border-2 hover:border-brandGreen bg-brandGreen text-black shadow-md hover:shadow-lg active:shadow-sm px-12">Next Project</button>
                    </Link>
                </div>
                </div>
            </section>
        </div>                 
    );
}

export default ThermoKingProject;
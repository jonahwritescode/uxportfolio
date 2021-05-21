import React from 'react';
import {Link} from "react-router-dom";
import ExternalLink from './ExternalLink';
import T3DPImage from '../images/trace-project.png';
import TraceCompetitiveAnalysis from '../images/trace-competitive analysis.png';
import TraceRefiningDesign from '../images/trace-refining-design.PNG';
import TraceSketch from '../images/trace-sketch.png';

function TraceProject()
{
    return( 
        <div className="bg-black pt-20">
            <section className="md:px-0 px-4 max-w-4xl mx-auto py-6">
                    <div className="flex flex-col space-y-2">
                        <p className="font-display text-white font-semibold text-3xl md:text-4xl lg:text-5xl leading-tight">Designing a Solar Shading Analysis Tool in TRACE&reg; 3D Plus</p> 
                        <p className="text-gray-400 text-lg pt-1 pb-4">5 min read&nbsp;&nbsp;//&nbsp;&nbsp;December 2019 - June 2020</p>  
                    </div>           
            </section>
            <section className="flex flex-col lg:flex-row">
                <div className="flex flex-col w-5/12">
                    <div className="bg-black h-1/5"></div>
                    <div className="bg-white h-4/5"></div>
                </div>
                <img src={T3DPImage} alt="A desktop computer with TRACE 3D Plus on the screen" className="w-full max-w-4xl"></img>
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
                            <p className="text-gray-800 md:text-lg pt-4">Designer & front-end developer. Responsible for defining the interactions and implementing the user interface.</p>
                        </div>
                        <div className="bg-white p-8 shadow-lg border border-gray-200">
                            <p className="text-black font-semibold font-display text-2xl pb-2">Project Team</p>
                            <hr></hr>
                            <p className="text-gray-800 md:text-lg pt-4">2 Product Owners, Backend Developer, Software Architect, Portfolio Manager</p>
                        </div>
                        <div className="bg-white p-8 shadow-lg border border-gray-200">
                            <p className="text-black font-semibold font-display text-2xl pb-2">Tools I Used</p>
                            <hr></hr>
                            <p className="text-gray-800 md:text-lg pt-4">Axure, XAML, WPF, Wireframe Pro, Slack</p>
                        </div>    
                    </div>
                </div>
            </section>
            <section className="bg-gray-100 py-6">
            <p className="text-black text-2xl md:text-4xl text-center font-display font-semibold pb-6">Feature Demo</p>
                <div className="mx-auto px-4 md:px-0 max-w-screen-2xl">
                    <div className="w-full relative overflow-hidden aspect-ratio-standard">
                        <iframe className="absolute w-full h-full top-0 left-0 right-0 bottom-0" src="https://www.youtube.com/embed/Uvkw9uuALcY" title="Solar Position Demo" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"></iframe>
                    </div>
                </div>
            </section>
            <section className="bg-white py-4">
                <div className="max-w-4xl mx-auto px-4 md:px-0">
                    <p className="text-black text-2xl md:text-4xl font-display font-semibold pb-4">Background</p>
                    <p className="text-black md:text-lg mb-8">Before diving into the world of UX, I was a developer. I worked on a desktop application called 
                    &nbsp;<ExternalLink path="https://www.trane.com/commercial/north-america/us/en/products-systems/design-and-analysis-tools/trane-design-tools/trace-3d-plus.html" text="TRACE&reg; 3D Plus"></ExternalLink>. 
              We were tasked with developing a feature that would allow the user to change the position of the sun in their building model. We lacked a designer, so I volunteered to 
              design the feature. This was one of the first projects that helped me realize my passion for UX.
                    </p>
                    <p className="text-black text-2xl md:text-4xl font-display font-semibold pb-4">Competitive Analysis</p>
                    <p className="text-black md:text-lg pb-4">A few months before we would need to start building the feature, our product owners provided us with a high-level list of requirements 
                    that our solution needed to fulfill. After we reviewed the requirements as a team, we had a lot of questions. What should moving the sun feel like? 
                    How can we make this feature intuitive and accessible? What options should we provide for controlling the sun's position?

                    I performed a competitive analysis to discover how our competitors tackled these issues.          
                    </p>
                    <img src={TraceCompetitiveAnalysis} alt="A screenshot from AutoDesk Revit: A building with a compass around it and the sun above it" className="mx-auto border border-gray-200"></img>
                    <p className="text-gray-500 mx-auto pt-2 pb-8 max-w-3xl text-center text-sm md:text-base">Autodesk Revit, Google SketchUp, and IESVE were some of the products I analyzed.</p>
                    <p className="text-black text-2xl md:text-4xl font-display font-semibold pb-4">Initial Concepts</p>
                    <p className="text-black md:text-lg pb-4">I began sketching some ideas using the insights that I gained from the competitive analysis.
                    These sketches helped us figure out where we wanted to go with the feature. 
                    </p>
                    <img src={TraceSketch} alt="An early wireframe: A building with a sun above it and a user interface to control the sun" className="mx-auto border border-gray-200"></img>
                    <p className="text-gray-500 mx-auto pt-2 pb-8 max-w-3xl text-center text-sm md:text-base">The first tool I used for creating mock-ups and wireframes was a free online tool called Wireframe Pro. I've come a long way since then!</p>
                    <p className="text-black text-2xl md:text-4xl font-display font-semibold pb-4">Refining the Design</p>
                    <p className="text-black md:text-lg pb-4">
                    I continued iterating on the design until it was time to start implementing it. By this point, I managed to get hold of an extra Axure license and my rapid prototyping abilities had improved significantly. 
                    I shared my design iterations with stakeholders and internal users to gather feedback. The cycle of sharing updates, gathering feedback, and making design changes continued until it was time to start developing.                 
                    </p>
                    <img src={TraceRefiningDesign} alt="A more recent design: A popup-window with radio buttons, date pickers, and checkboxes to control the sun" className="mx-auto border border-gray-200"></img>
                    <p className="text-gray-500 mx-auto pt-2 pb-8 max-w-3xl text-center text-sm md:text-base">We provided two different options for controlling the sun's position. The slider was designed to allow users to quickly see how the daylight would hit their building over the course of a day. The popup window was designed to allow users to see the sun's position at a specific date and time.</p>
                    <p className="text-black text-2xl md:text-4xl font-display font-semibold pb-4">Building It</p>
                    <p className="text-black md:text-lg pb-4">Being both the designer and the front-end developer on this feature worked out nicely. 
                    Usually when I hand off designs to the developers, some details get lost in translation. That wasn't the case here. I knew exactly what we needed to build. The challenge was building it in the time we had.
                    <br></br><br></br>
                    Fortunately, the design reused a lot of existing UI components. The only new component was a slider that could communicate with the building model as the user moved it. 
                    We also needed to figure out how to calculate the solar position based on a time, date, and location. The backend developer that I worked with found an incredibly useful 
                    &nbsp;<ExternalLink path="https://www.esrl.noaa.gov/gmd/grad/solcalc/" text="Solar Position calculator from NOAA"></ExternalLink> that we used to get the data we needed to display the sun accurately.          
                    </p>
                    <p className="text-black text-2xl md:text-4xl font-display font-semibold pb-4">Gathering Feedback</p>
                    <p className="text-black md:text-lg pb-8">One of the things that I think made this feature successful was the fact that we continually gathered feedback. 
                    The design went through a ton of changes before we even started writing any code. After we started implementing it, it continued to evolve (albeit in smaller ways).  
                    The addition of a date slider, the ability to quickly turn the shadows on/off, and the ability to move the slider with the arrow keys were all changes that resulted from
                    feedback that we received.          
                    </p>
                    <p className="text-black text-2xl md:text-4xl font-display font-semibold pb-4">Outcome</p>
                    <p className="text-black md:text-lg pb-8">The feature received a lot of positive reception when it launched in mid-2020. Customers praised its simplicity and ease of use. 
                    They especially liked being able to quickly move the sun using the sliders.   
                    </p>
                </div>
            </section>
            <section className="py-8">
                <div className="max-w-4xl mx-auto px-4 md:px-0">
                <p className="font-display text-white font-semibold text-2xl md:text-4xl text-center">Thanks for reading!</p>
                <div className="mx-auto max-w-max pt-4">
                    <Link to="/PortfolioProject">
                        <button className="transition border-brandGreen font-semibold text-center uppercase hover:text-black hover:bg-brandGreen font-display h-10 border-2 bg-transparent text-brandGreen px-12">Next Project</button>
                    </Link>
                </div>
                </div>
            </section>
        </div>                 
    );
}

export default TraceProject;
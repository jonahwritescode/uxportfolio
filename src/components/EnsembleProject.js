import React from 'react';
import {Link} from "react-router-dom";
import ExternalLink from './ExternalLink';
import EnsembleImage from '../images/ensemble-project.png';
import EnsembleInitialConcepts from '../images/ensemble-initial-concepts.jpg';
import EnsembleRefiningDesign from '../images/ensemble-refining-design.png';
import EnsembleRolesNew from '../images/ensemble-roles-new.PNG';
import EnsembleRolesOld from '../images/ensemble-roles-old.PNG';

function EnsembleProject()
{
    return( 
        <div className="bg-black pt-20">
            <section className="px-4 md:px-0 max-w-4xl mx-auto py-6">
                    <div className="flex flex-col space-y-2">
                        <p className="font-display text-white font-semibold text-3xl md:text-4xl lg:text-5xl leading-tight">Redesigning User Permissions for Tracer&reg; Ensemble&reg;</p> 
                        <p className="text-gray-400 text-lg pt-1 pb-4">5 min read&nbsp;&nbsp;//&nbsp;&nbsp;July 2020 - January 2021</p>  
                    </div>           
            </section>
            <section className="flex flex-col lg:flex-row">
                <div className="flex flex-col w-5/12">
                    <div className="bg-black h-1/5"></div>
                    <div className="bg-white h-4/5"></div>
                </div>
                <img src={EnsembleImage} alt="A laptop on a desk with Tracer Ensemble on the screen" className="w-full max-w-4xl"></img>
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
                            <p className="text-gray-800 md:text-lg pt-4">Sole UX resource assigned to project. Responsible for all user research & design work. Mentored
                            by a senior UX Designer who was not directly involved in the project.</p>
                        </div>
                        <div className="bg-white p-8 shadow-lg border border-gray-200">
                            <p className="text-black font-semibold font-display text-2xl pb-2">Project Team</p>
                            <hr></hr>
                            <p className="text-gray-800 md:text-lg pt-4">2 Product Owners, Portfolio Manager, Product Planning Engineer, Software Developers</p>
                        </div>
                        <div className="bg-white p-8 shadow-lg border border-gray-200">
                            <p className="text-black font-semibold font-display text-2xl pb-2">Tools I Used</p>
                            <hr></hr>
                            <p className="text-gray-800 md:text-lg pt-4">Axure, Microsoft Teams, Confluence, PowerPoint, Miro, Cisco WebEx</p>
                        </div>    
                    </div>
                </div>
            </section>
            <section className="bg-gray-100 py-6">
            <p className="text-black text-2xl md:text-4xl text-center font-display font-semibold pb-6">The Redesign: Before and After</p>
                <div className="mx-auto px-4 md:px-0 max-w-screen-2xl">
                    <img-comparison-slider>
                        <img slot="before" alt="The newly designed interface for the user roles feature" src={EnsembleRolesNew}/>
                        <img slot="after" alt="The old interface for the user roles feature" src={EnsembleRolesOld} />
                    </img-comparison-slider>
                </div>
            </section>
            <section className="bg-white py-4">
                <div className="max-w-4xl mx-auto px-4 md:px-0">
                    <p className="text-black text-2xl md:text-4xl font-display font-semibold pb-4">Background</p>
                    <p className="text-black md:text-lg mb-8">During my tenure at Trane, I redesigned the user permissions flow for
                    &nbsp;<ExternalLink path="https://www.trane.com/commercial/north-america/us/en/services/operate-maintain-repair/connectivity-and-cloud-services/tracer-ensemble-enterprise-building-management-systems.html" text="Tracer&reg; Ensemble&reg;"></ExternalLink> - 
              a web application used to remotely manage the HVAC equipment in buildings. Admin users wanted more control over other users' permissions than the current feature could provide.
              I was brought in to design a solution that would meet their needs.
                    </p>
                    <p className="text-black text-2xl md:text-4xl font-display font-semibold pb-4">Identifying User Needs</p>
                    <p className="text-black md:text-lg">I started the design process by figuring out what these needs were. I was new to the 
                    Ensemble team, so I met with stakeholders to learn more about who the users are and why they use the product. Together, we identified 
                    three problems that we needed to address with the redesign:                    
                    </p>
                    <div className="grid space-y-2 pt-4 pb-8">
                        <div className="bg-white p-8 shadow-lg border border-gray-200">
                            <p className="text-black font-semibold font-display text-2xl pb-2">Problem #1</p>
                            <hr></hr>
                            <p className="text-gray-800 md:text-lg pt-4">Users can't setup permissions the way they want to.</p>
                        </div>
                        <div className="bg-white p-8 shadow-lg border border-gray-200">
                            <p className="text-black font-semibold font-display text-2xl pb-2">Problem #2</p>
                            <hr></hr>
                            <p className="text-gray-800 md:text-lg pt-4">Users don't understand our terminology.</p>
                        </div>
                        <div className="bg-white p-8 shadow-lg border border-gray-200">
                            <p className="text-black font-semibold font-display text-2xl pb-2">Problem #3</p>
                            <hr></hr>
                            <p className="text-gray-800 md:text-lg pt-4">The current permissions structure is hard to maintain.</p>
                        </div>    
                    </div>
                    <p className="text-black text-2xl md:text-4xl font-display font-semibold pb-4">Initial Concepts</p>
                    <p className="text-black md:text-lg pb-4">Users wanted more control over permissions than the original permissions feature could provide. 
                    We would need to add additional permissions (and therefore additional complexity) to an already long and complicated workflow. 
                    My challenge was to design a solution that could disguise this complexity and help users set up permissions with confidence. 
                    I had a lot of different ideas on how to accomplish this. Below is a screenshot from one of the early prototypes I built in Axure to show the team.              
                    </p>
                    <img src={EnsembleInitialConcepts} alt="An early mock-up of a web form with multiple steps" className="mx-auto border border-gray-200"></img>
                    <p className="text-gray-500 mx-auto pt-2 pb-8 max-w-3xl text-center text-sm md:text-base">A senior UX Designer who was familiar with Ensemble provided early feedback 
                    and helped familiarize me with the Ensemble design patterns.</p>
                    <p className="text-black text-2xl md:text-4xl font-display font-semibold pb-4">Customer Feedback</p>
                    <p className="text-black md:text-lg">After putting together a prototype, I sought feedback from customers to determine if the design was suitable. 
                    I recruited individuals from a variety of market segments to ensure that my sample adequately represented our user base. I met with each individual 
                    virtually. I shared my screen while I asked them questions. The questions were designed to figure out users' preferences and to determine if they 
                    understood the design. Surprisingly, a majority of the participants didn't even know that the current permissions feature existed in the product.                 
                    </p>
                    <div className="grid space-y-2 pt-4 pb-8">
                        <div className="bg-white p-8 shadow-lg border border-gray-200">
                            <p className="text-black font-semibold font-display text-2xl pb-2">Quote #1</p>
                            <hr></hr>
                            <p className="text-gray-800 md:text-lg pt-4">This is much better than how I do it today.</p>
                        </div>
                        <div className="bg-white p-8 shadow-lg border border-gray-200">
                            <p className="text-black font-semibold font-display text-2xl pb-2">Quote #2</p>
                            <hr></hr>
                            <p className="text-gray-800 md:text-lg pt-4">I didn't know this feature existed, but I like it.</p>
                        </div>
                        <div className="bg-white p-8 shadow-lg border border-gray-200">
                            <p className="text-black font-semibold font-display text-2xl pb-2">Quote #3</p>
                            <hr></hr>
                            <p className="text-gray-800 md:text-lg pt-4">The new workflow makes me confident that I'm going to get what I expect when I set up a new user.</p>
                        </div>    
                    </div>
                    <p className="text-black text-2xl md:text-4xl font-display font-semibold pb-4">Refining the Design</p>
                    <p className="text-black md:text-lg pb-4">I used the research findings to improve the design. After all the research sessions had concluded, 
                    I met with the stakeholders to determine our next steps. Since many participants didn't know about the existing permissions feature, we wanted to
                    ensure that the new feature would be easy to find. To help customers discover the feature, we renamed the 
                    permissions setup page and all links to the page from "User Roles" to "Roles" (we learned that users often confused User Roles with Users).             
                    </p>
                    <img src={EnsembleRefiningDesign} alt=">A screenshot from a prototype I created after the first round of research." className="mx-auto border border-gray-200"></img>
                    <p className="text-gray-500 mx-auto pt-2 pb-8 max-w-3xl text-center md:text-base text-sm">A screenshot from a prototype I created after the first round of research.</p>
                    <p className="text-black text-2xl md:text-4xl font-display font-semibold pb-4">Usability Testing</p>
                    <p className="text-black md:text-lg pb-8">With the time left before the project deadline, I conducted a usability test. I wanted to 
                    uncover usability issues before I handed off the design to the developers. I recruited three participants 
                    and wrote a task list for them to complete. The task list required them to perform user management tasks as they would in the real world.<br></br><br></br>
                    While we didn't uncover any glaring design flaws during usability testing, we did observe that users spent more time trying to find permissions 
                    in the permissions wizard than we originally thought. My solution to this problem was to migrate the permissions wizard from a modal to a full page. 
                    I suspected that it would be easier for users to scan and find permissions if we displayed more permissions at a time.                 
                    </p>
                    <p className="text-black text-2xl md:text-4xl font-display font-semibold pb-4">Outcome</p>
                    <p className="text-black md:text-lg pb-8">I created the final visual design by following our style guidelines and handed it off to 
                    the developers. At the time of me writing this, the design has not yet been implemented. We got a lot of positive feedback from customers 
                    throughout the design process, so I'm confident the feature will be well-received when it is released.              
                    </p>
                </div>
            </section>
            <section className="py-8">
                <div className="max-w-4xl mx-auto px-4 md:px-0">
                <p className="font-display text-white font-semibold text-2xl md:text-4xl text-center">Thanks for reading!</p>
                <div className="mx-auto max-w-max pt-4">
                    <Link to="/TraceProject">
                        <button className="transition border-brandGreen font-semibold text-center uppercase hover:text-black hover:bg-brandGreen font-display h-10 border-2 bg-transparent text-brandGreen px-12">Next Project</button>
                    </Link>
                </div>
                </div>
            </section>
        </div>                 
    );
}

export default EnsembleProject;
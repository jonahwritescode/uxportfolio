import React from 'react';
import {Link} from "react-router-dom";
import Home from '../images/Home.png';
import iOSDeposit from '../images/iOS Check Deposit - Step 1 (1).png';
import Moodboard from '../images/moodboard.png';
import Objectives from '../images/project objectives.png';
import Sitemap from '../images/Sitemap.png'
import TutorialPage from '../images/Tutorial Page (1).png';
import BranchProjectImage from '../images/branch project image.png';
import IDE from '../images/IDE screenshot.png';

function BranchPilotProject()
{
    return( 
        <div className="bg-black pt-20">
            <section className="px-4 md:px-0 max-w-4xl mx-auto py-6">
                    <div className="flex flex-col space-y-2">
                        <p className="font-display text-white font-semibold text-3xl md:text-4xl lg:text-5xl leading-tight">Convincing Truist's branch customers to transact digitally</p> 
                        <p className="text-gray-400 text-lg pt-1 pb-4">5 min read&nbsp;&nbsp;//&nbsp;&nbsp;February 2023 - April 2023</p>  
                    </div>           
            </section>
            <section className="flex flex-col lg:flex-row">
                <div className="flex flex-col w-5/12">
                    <div className="bg-black h-1/5"></div>
                    <div className="bg-white h-4/5"></div>
                </div>
                <img src={BranchProjectImage} alt="A laptop on a desk with Tracer Ensemble on the screen" className="w-full max-w-4xl"></img>
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
                            <p className="text-gray-800 md:text-lg pt-4">Design lead. Oversaw and had final say on the design work of a UI designer, a content
designer, and myself. Served as the point of contact for design.</p>
                        </div>
                        <div className="bg-white p-8 shadow-lg border border-gray-200">
                            <p className="text-black font-semibold font-display text-2xl pb-2">Project Team</p>
                            <hr></hr>
                            <p className="text-gray-800 md:text-lg pt-4">UI Designer, Content Designer, Business Strategist, Product Manager, App Developer, Engineering Manager, IT Support</p>
                        </div>
                        <div className="bg-white p-8 shadow-lg border border-gray-200">
                            <p className="text-black font-semibold font-display text-2xl pb-2">Tools I Used</p>
                            <hr></hr>
                            <p className="text-gray-800 md:text-lg pt-4">Figma, Miro, Tailwind CSS</p>
                        </div>    
                    </div>
                </div>
            </section>
            <section className="bg-gray-100 py-6">
            <p className="text-black text-2xl md:text-4xl text-center font-display font-semibold pb-6">Figma Prototype</p>
                <div className="mx-auto px-4 md:px-0 max-w-screen-2xl">
                <iframe className="w-full" height="720" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2F1rtQJSSrBRPPjxMVqJAIm9%2FBranch-Transformation%3Ftype%3Ddesign%26node-id%3D129-5190%26t%3DoYZTEKQy8ghKJXp2-1%26scaling%3Dmin-zoom%26page-id%3D44%253A1106%26starting-point-node-id%3D129%253A5190%26show-proto-sidebar%3D1%26mode%3Ddesign&hide-ui=1&scaling=scale-down" allowfullscreen></iframe>
                </div>
            </section>
            <section className="bg-white py-4">
                <div className="max-w-4xl mx-auto px-4 md:px-0">
                    <p className="text-black text-2xl md:text-4xl font-display font-semibold pb-4">Background</p>
                    <p className="text-black md:text-lg mb-8">A core pillar of Truist's strategy is to increase adoption of digital banking. After all, it's less
expensive for the bank and more time-efficient for consumers if they transact on their phone
rather than in a branch.
<br/><br/>
In early 2023, a team had formed to think of ways to do just this. Specifically, the team sought
to make changes in branches that would encourage visitors to do straightforward banking tasks
(such as depositing a check and withdrawing money) on their phone or an ATM.
<br/><br/>
Their main idea was simple: to convince people to transact digitally, we need to show them that they can. I
was brought on - along with one other designer - to turn this idea into a reality. Our goal was to create an app of digital banking tutorials that teammates could use to show clients our digital banking capabilities. 
                    </p>
                    <p className="text-black text-2xl md:text-4xl font-display font-semibold pb-4">Working under a tight timeline</p>
                    <p className="text-black md:text-lg mb-8">We didn't have long to do it either. The team wanted to debut the app by the first week of
April as part of a pilot study. Factoring in the engineering team's timeline to build it, we had just under 6 weeks to
design the entire thing.
                    </p>
                    <p className="text-black text-2xl md:text-4xl font-display font-semibold pb-4">Hitting the ground running</p>
                    <p className="text-black md:text-lg mb-8">To work quickly, we would need to clearly understand the scope of work. How will teammates and
clients interact with these tutorials? What tasks should be covered? Are there existing tutorials with content we can leverage? These are just a few of the many questions I asked during our
kickoff meetings.
                    </p>
                    <img src={Objectives} alt="A slide showing solution opportunities" className="mx-auto border border-gray-200"></img>
                    <p className="text-gray-500 mx-auto pt-2 pb-8 max-w-3xl text-center text-sm md:text-base">A figma slide I created following our first few meetings to track the project. It's messy, but it got the job done!</p>
                    <p className="text-black text-2xl md:text-4xl font-display font-semibold pb-4">Delegating the work</p>
                    <p className="text-black md:text-lg pb-8">We would need to work efficiently to complete everything before our deadline. Both of us spent time brainstorming together initially, then our paths diverged. While I worked on
the information architecture and interaction design, the other designer gathered screenshots
and videos for the tutorials and started working on visual design ideas.
<br/><br/>
Knowing this project would be content-heavy, I recruited the assistance of a content designer
I'd worked with previously. She wrote the instructional content within the tutorials based on
the flows, screenshots, and videos we provided.    
                    </p>
                    <img src={Moodboard} alt="A slide showing solution opportunities" className="mx-auto border border-gray-200"></img>
                    <p className="text-gray-500 mx-auto pt-2 pb-8 max-w-3xl text-center text-sm md:text-base">Our brainstorming sessions resulted in the creation of this moodboard, which we continued to reference throughout the design process.</p>
                    <p className="text-black text-2xl md:text-4xl font-display font-semibold pb-4">Information architecture: Nailing down navigation</p>
                    <p className="text-black md:text-lg pb-8">
                    Ensuring the tutorials could be easily found was just as important as the
tutorials themselves. I knew that teammates would be using the tutorials to help clients with
specific tasks. To make it easy and intuitive for teammates to find tutorials, I organized them by tasks.
                    </p>
                    <img src={Sitemap} alt="A slide showing solution opportunities" className="mx-auto border border-gray-200"></img>
                    <p className="text-gray-500 mx-auto pt-2 pb-8 max-w-3xl text-center text-sm md:text-base">An early version of a site map I created. Having a dedicated app certainly enabled us to keep the IA
simple! I choose a relatively flat hierarchy to ensure all tutorials could be found quickly from the home
screen.</p>
<img src={Home} alt="A slide showing solution opportunities" className="mx-auto border border-gray-200"></img>
<p className="text-gray-500 mx-auto pt-2 pb-8 max-w-3xl text-center text-sm md:text-base">The final version of the home page remained faithful to the site map, though we added a device
filter so teammates could quickly find all tutorials for a specific device.</p>
<p className="text-black text-2xl md:text-4xl font-display font-semibold pb-4">Designing the tutorials</p>
                    <p className="text-black md:text-lg pb-4">
As the other designer gathered assets for the tutorials, I thought of ways to organize the information. While designing, two things were top of mind:
                    </p>
                    <div className="grid space-y-2 pt-4 pb-8">
                        <div className="bg-white p-8 shadow-lg border border-gray-200">
                            <p className="text-black font-semibold font-display text-2xl pb-2">Factor #1</p>
                            <hr></hr>
                            <p className="text-gray-800 md:text-lg pt-4">Our target audience skewed older. Someone with limited technology proficiency needed to be able to follow the steps of each tutorial.</p>
                        </div>
                        <div className="bg-white p-8 shadow-lg border border-gray-200">
                            <p className="text-black font-semibold font-display text-2xl pb-2">Factor #2</p>
                            <hr></hr>
                            <p className="text-gray-800 md:text-lg pt-4">Respect peoples' time. We wanted each tutorial to be able to be completed in 5
minutes or less. We feared that long tutorials would dissuade clients from wanting to engage with them.</p>
                        </div> 
                    </div>
                    <img src={TutorialPage} alt="A slide showing solution opportunities" className="mx-auto border border-gray-200"></img>
                    <p className="text-gray-500 mx-auto pt-2 pb-8 max-w-3xl text-center text-sm md:text-base">I drew several low-fidelity wireframes, such as this one, to quickly explore ways of presenting the
information. Truist's original mobile check deposit tutorial (upon which our design is based) was a slideshow with six slides. In an effort to simplify the steps and make them easier to follow, I expanded the steps from 6 to 16.</p>
<img src={iOSDeposit} alt="A slide showing solution opportunities" className="mx-auto border border-gray-200"></img>
<p className="text-gray-500 mx-auto pt-2 pb-8 max-w-3xl text-center text-sm md:text-base">We knew that not everyone would need to read through each and every step. Some folks might only have issues with specific parts of the process. To that end, I added a progress indicator that allows users to navigate through steps as you would slides of a slideshow. In later versions of this design (such as the one shown above), this feature became more visually prominent.</p>
<p className="text-black text-2xl md:text-4xl font-display font-semibold pb-4">Building it</p>
                    <p className="text-black md:text-lg pb-8">As we wrapped up the design work, we ran into another hurdle. Knowing that they wouldn't
have time or resources to build an app from scratch, the engineering team planned to build the
app by wrapping web pages. We both assumed Figma's prototype
could be used to generate the web pages - but we were mistaken.

Luckily, I had prior web programming experience, and I was able to create a site from the Figma
mock-ups in the two weeks we had left.
                    </p>
                    <img src={IDE} alt="A slide showing solution opportunities" className="mx-auto border border-gray-200"></img>
                    <p className="text-gray-500 mx-auto pt-2 pb-8 max-w-3xl text-center text-sm md:text-base">The nice thing about developing designs that you worked is that you know exactly what needs to be built. The not nice thing is remembering how to build it - I was definitely rusty! Thankfully Truist's design system team provided a toolkit that handled most of the hard work for me.</p>
                    <p className="text-black text-2xl md:text-4xl font-display font-semibold pb-4">Outcome</p>
                    <p className="text-black md:text-lg pb-8">The pilot was a success - teammates praised app's ease of use and the general
usefulness of having iPads that they could use during conversations with clients. Shortly after
the pilot concluded, the project was approved to be expanded to
additional branches.   
                    </p>
                    <p className="text-black text-2xl md:text-4xl font-display font-semibold pb-4">No user research?</p>
                    <p className="text-black md:text-lg pb-8">I wanted to address this question since it's one that I was asked at several points during the
design and build process (and one that you may naturally be wondering). Because of the tight
timeline and the fact that this was a pilot project, I chose not to conduct any research.
<br/><br/>
Fitting user testing into our schedule would have meant sacrificing design time, and I felt that it was more
important to deliver a great first experience using existing research and our design intuition. In
addition, I knew that the feedback we would get from the pilot itself would be more realistic
than any study we could've done in the time we had.  
                    </p>
                </div>
            </section>
            <section className="py-8">
                <div className="max-w-4xl mx-auto px-4 md:px-0">
                <p className="font-display text-white font-semibold text-2xl md:text-4xl text-center">Thanks for reading!</p>
                <div className="mx-auto max-w-max pt-4">
                    <Link to="/TruistTradeProject">
                        <button className="transition border-brandGreen font-semibold text-center uppercase hover:text-black hover:bg-brandGreen font-display h-10 border-2 bg-transparent text-brandGreen px-12">Next Project</button>
                    </Link>
                </div>
                </div>
            </section>
        </div>                 
    );
}

export default BranchPilotProject;
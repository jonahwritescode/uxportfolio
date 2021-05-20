import React from 'react';
import {Link} from "react-router-dom";
import HomeConcept1 from '../images/home-concept1.PNG';
import Scribble from '../images/scribble.jpg';
import ProjectPageOld from '../images/project-page-old.png';
import ProjectPageRecent from '../images/project-page-recent.png';
import ValueProposition from '../images/value-proposition.png';
import PortfolioProjectImage from '../images/portfolio-project.png';

function PortfolioProject()
{
    return( 
        <div className="bg-black pt-20">
            <section className="px-4 md:px-0 max-w-4xl mx-auto py-6">
                    <div className="flex flex-col space-y-2">
                        <p className="font-display text-white font-semibold text-3xl md:text-4xl lg:text-5xl leading-tight">Behind the Screens: The Making of this Site</p> 
                        <p className="text-gray-400 text-lg pt-1 pb-4">4 min read&nbsp;&nbsp;//&nbsp;&nbsp;July 2020 - May 2021</p>  
                    </div>           
            </section>
            <section className="flex flex-row">
                <div className="flex flex-col w-5/12">
                    <div className="bg-black h-1/5"></div>
                    <div className="bg-white h-4/5"></div>
                </div>
                <img src={PortfolioProjectImage} alt="Four images that show what this site looked look at various stages of the design process" className="w-full max-w-4xl"></img>
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
                            <p className="text-gray-800 md:text-lg pt-4">Designer, developer, writer, creator</p>
                        </div>
                        <div className="bg-white p-8 shadow-lg border border-gray-200">
                            <p className="text-black font-semibold font-display text-2xl pb-2">Project Team</p>
                            <hr></hr>
                            <p className="text-gray-800 md:text-lg pt-4">Me, myself, and I</p>
                        </div>
                        <div className="bg-white p-8 shadow-lg border border-gray-200">
                            <p className="text-black font-semibold font-display text-2xl pb-2">Tools I Used</p>
                            <hr></hr>
                            <p className="text-gray-800 md:text-lg pt-4">Adobe XD, React, HTML, Tailwind CSS</p>
                        </div>    
                    </div>
                </div>
            </section>
            <section className="bg-white py-4">
                <div className="max-w-prose mx-auto px-4 md:px-0">
                    <p className="text-black text-2xl md:text-4xl font-display font-semibold pb-4">Background</p>
                    <p className="text-black md:text-lg mb-8">What kind of portfolio includes a section showcasing itself? Well, this one apparently. This site was an ambitious project – I used almost every tool in my toolbox to make it just right. And I learned a lot along the way. 
                    </p>
                    <p className="text-black text-2xl md:text-4xl font-display font-semibold pb-4">Initial Concepts</p>
                    <p className="text-black md:text-lg pb-8">I started thinking about building an online portfolio shortly after I landed my first UX role. We were hiring at that time, and my manager began sharing our applicants’ portfolios with us. I was inspired by what I saw. Many of the applicants had beautiful web-based portfolios that were packed with interesting content about their experiences. 
<br></br><br></br>Eager to create a portfolio of my own, I began sketching ideas. My early sketches went in a dozen different directions – and I wasn’t satisfied with any of them.                 
                    </p>
                    <img src={Scribble} alt="A drawing in a sketchbook that shows an early site layout" className="mx-auto border max-w-md border-gray-200"></img>
                    <p className="text-gray-500 mx-auto pt-2 pb-8 max-w-3xl text-center text-sm md:text-base">The very first designs were done with pencil and paper.</p>
                    <img src={HomeConcept1} alt="A colorful early design of the home page with a navy blue, orange, and white color palette." className="mx-auto border border-gray-200"></img>
                    <p className="text-gray-500 mx-auto pt-2 pb-8 max-w-3xl text-center text-sm md:text-base">Figuring out the right color palette was difficult at first - there are so many options! The colors in this early mock-up were sampled from a photo I took.</p>
                    <p className="text-black text-2xl md:text-4xl font-display font-semibold pb-4">Creating my Personal Brand</p>
                    <p className="text-black md:text-lg pb-4">Something was missing. None of the designs that I’d come up with told a story about who I was. I was trying to decide on a look before I created my brand. 
<br></br><br></br>Creating a brand was new to me. I knew how to work within brand guidelines, but I didn’t have any experience creating a brand from scratch. It was time to do some research. Over the next few weeks, I learned as much as I could about personal brands.
<br></br><br></br>I learned that a personal brand should reflect ones’ values, skills, and personality. As I developed my brand, I thought about the traits that make me unique. One such trait is my programming background. Having programming experience enables me to communicate effectively with developers, and it helps me to determine whether my designs will be feasible. I wanted my brand to visually communicate my technical background. The color scheme, binary patterns, and the typing animation on the home page are examples of design elements that reflect this aspect of my brand.           
                    </p>
                    <img src={ValueProposition} alt="A screenshot of the typing animation on the home page. It says Hello, I'm Jonah. I design products that people enjoy using." className="mx-auto border border-gray-200"></img>
                    <p className="text-gray-500 mx-auto pt-2 pb-8 max-w-3xl text-center text-sm md:text-base">Many design elements were inspired by Windows Command Prompt.</p>
                    <p className="text-black text-2xl md:text-4xl font-display font-semibold pb-4">Dusting off my Programming Hat</p>
                    <p className="text-black md:text-lg pb-8">While I’m working on a design, I like to switch to different tasks. I find that working on different tasks helps me think of new ideas and will sometimes push me in a direction that I hadn’t initially considered. So instead of finishing the design, I chose to start programming what I had.
<br></br><br></br>I used this site as an opportunity to familiarize myself with the latest web technologies. As a designer, I think it’s important to have a working knowledge of the tools that developers use. React seemed to be the latest and greatest tool, so I challenged myself to build the site using React.               
                    </p>
                    <p className="text-black text-2xl md:text-4xl font-display font-semibold pb-4">Designing the Homepage</p>
                    <p className="text-black md:text-lg pb-4">The homepage was the first page I worked on and it’s the page that underwent the most changes. I knew that most site visitors wouldn’t navigate past the homepage, so I wanted it to make an impression. 
<br></br><br></br>Early renditions of the homepage didn’t make the impression that I wanted. Those who saw these renditions wanted more information on the homepage. Why do I design? What are some of my strengths? What design tools and methodologies am I familiar with? They felt that the information I presented was too generic. If I wanted to make an impression and capture peoples’ attention, I needed to differentiate myself. 
<br></br><br></br>The feedback inspired me to make several key changes. The generic “Hi, I’m Jonah” copy became the much-more engaging typing animation that you see today. I added a section about my design skills and another section with testimonials from coworkers. I added charts, images, and animations to add visual interest.              
                    </p>
                    <p className="text-black md:text-lg pb-4"></p>
                    <p className="text-black text-2xl md:text-4xl font-display font-semibold pb-4">Anatomy of the Project Page</p>
                    <p className="text-black md:text-lg pb-8">I spent a considerable amount of time optimizing the project pages. Almost every aspect of the project page – from layout to content to visual design – was based on research that I’d done. 
<br></br><br></br>I started with figuring out what to say for each of my featured projects. At first, I wasn’t sure how much detail I should go into. Some people that I spoke to wanted to see every single nitty-gritty detail, others didn’t want to be overwhelmed with walls of text. I decided to be somewhere in the middle. Each project page has a descriptive narrative for Details Dan that is broken up into sections and packed with pictures to satisfy Big-Picture Bob.           
                    </p>
                    <img src={ProjectPageOld} alt="An old version of the project page with a black background, a picture of a desktop computer, and a few paragraphs of text." className="mx-auto border max-w-md border-gray-200"></img>
                    <p className="text-gray-500 mx-auto pt-2 pb-8 max-w-3xl text-center text-sm md:text-base">One of many project page iterations - this one was scrapped because it was too jarring to read.</p>
                    <p className="text-black md:text-lg pb-8">
The layout was largely informed by other online portfolios that I’d seen. I pulled together different ideas from different portfolios that I felt would optimize the reading experience.            
                    </p>
                    <img src={ProjectPageRecent} alt="A recent version of the project page with a white bacground and a picture of a desktop computer on a green background"className="mx-auto border border-gray-200"></img>
                    <p className="text-gray-500 mx-auto pt-2 pb-8 max-w-3xl text-center text-sm md:text-base">I played around with a lot of different project images before I found one that I felt fit the theme of the site.</p>
                    <p className="text-black text-2xl md:text-4xl font-display font-semibold pb-4">Outcome</p>
                    <p className="text-black md:text-lg pb-8">I’m really pleased with how this site has turned out. When I started working on this project, I wanted to create a portfolio that helped me stand out – and I believe that I’ve done that. I hope you enjoyed reading about this project as much as I enjoyed working on it.            
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

export default PortfolioProject;
import React from 'react';
import {Link} from "react-router-dom";
import ExternalLink from './ExternalLink';
import Research1 from '../images/research 1.png';
import Research2 from '../images/research 2.png';
import Iteration1 from '../images/iteration 1.png';
import FinalIteration from '../images/final iteration.png';
import TradeProjectImage from '../images/trade project image.png'
import QA from '../images/QA.png';
import Flow from '../images/Flow - Truist Trade.jpg';

function TradeProject()
{
    return( 
        <div className="bg-black pt-20">
            <section className="px-4 md:px-0 max-w-4xl mx-auto py-6">
                    <div className="flex flex-col space-y-2">
                        <p className="font-display text-white font-semibold text-3xl md:text-4xl lg:text-5xl leading-tight">Bringing Truist's first all-digital brokerage account to market</p> 
                        <p className="text-gray-400 text-lg pt-1 pb-4">8 min read&nbsp;&nbsp;//&nbsp;&nbsp;July 2021 - November 2022</p>  
                    </div>           
            </section>
            <section className="flex flex-col lg:flex-row">
                <div className="flex flex-col w-5/12">
                    <div className="bg-black h-1/5"></div>
                    <div className="bg-white h-4/5"></div>
                </div>
                <img src={TradeProjectImage} alt="A laptop on a desk with Tracer Ensemble on the screen" className="w-full max-w-4xl"></img>
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
                            <p className="text-gray-800 md:text-lg pt-4">Product designer + design strategist. Responsible for setting design strategy and servicing all account opening UI/UX needs for the duration of the project.</p>
                        </div>
                        <div className="bg-white p-8 shadow-lg border border-gray-200">
                            <p className="text-black font-semibold font-display text-2xl pb-2">Project Team</p>
                            <hr></hr>
                            <p className="text-gray-800 md:text-lg pt-4">Product Manager, Product Owner, Business Strategists, Researchers, Content Strategist, Service Designer, Project Manager</p>
                        </div>
                        <div className="bg-white p-8 shadow-lg border border-gray-200">
                            <p className="text-black font-semibold font-display text-2xl pb-2">Tools I Used</p>
                            <hr></hr>
                            <p className="text-gray-800 md:text-lg pt-4">Axure, Figma, Miro</p>
                        </div>    
                    </div>
                </div>
            </section>
            <section className="bg-white py-4">
                <div className="max-w-4xl mx-auto px-4 md:px-0">
                    <p className="text-black text-2xl md:text-4xl font-display font-semibold pb-4">Background</p>
                    <p className="text-black md:text-lg mb-8">In July 2021, I embarked on a journey to create <ExternalLink path="https://www.truist.com/investing-retirement/self-directed-investing" text="Truist Trade"></ExternalLink>, Truist's first all-digital, self-directed (investors choose how to invest their money)
brokerage account. At first, I thought this would be a simple, straightforward project. Truist
already had online account opening experiences for many other products - from checking
accounts to small business loans. I felt that we'd simply be adding one more product to our
portfolio. Little did I know that Truist Trade would become the largest, most
complicated, and most rewarding design project of my career so far.
                    </p>
                    <p className="text-black text-2xl md:text-4xl font-display font-semibold pb-4">Another brokerage account? Why?</p>
                    <p className="text-black md:text-lg mb-8">One of the very first things I sought out to do when I joined Truist was to learn the “why”
behind the project. So many firms already offered brokerage accounts - Robinhood, E*TRADE,
Charles Schwab, to name a few. How could we possibly hope to compete in such a crowded
market?<br /><br />I learned that our strategy wasn't necessarily to attract new customers to the bank - but rather
to retain existing ones. People who banked with Truist wanted to invest with us too. But
because our current offerings were lackluster &#40;opening a brokerage account required calling an
advisor and paying $15 per trade!&#41;, customers were taking their money elsewhere. To retain these customers, we needed
to give them a way to invest with the convenience and digital capabilities that they
expected.
                    </p>
                    <img src={Research1} alt="A slide showing different types of investors" className="mx-auto border border-gray-200"></img>
                    <p className="text-gray-500 mx-auto pt-2 pb-8 max-w-3xl text-center text-sm md:text-base">A significant amount of research was conducted prior to my arrival to understand the needs and behaviours of our target audience. We eventually distilled this research into the archetypes shown above.</p>
                    <p className="text-black text-2xl md:text-4xl font-display font-semibold pb-4">Charting a path forward</p>
                    <p className="text-black md:text-lg mb-8">Early on, one of the biggest challenges with Truist Trade was figuring out where to start. This
project already had quite a history. It had been in various stages of development for a couple
years, and this latest iteration had formally kicked off several months before I joined the team.<br/><br/> Despite the project's history, little real progress had been made. The team was stuck. We needed to find a way to move from ideation to execution.       
                    </p>
                    <img src={Research2} alt="A slide showing solution opportunities" className="mx-auto border border-gray-200"></img>
                    <p className="text-gray-500 mx-auto pt-2 pb-8 max-w-3xl text-center text-sm md:text-base">This slide was one of the more actionable artifacts from the existing research. It depicts 21 solution opportunities - based on research - that our team sought to solve for to create the ideal investing experience.</p>
                    <p className="text-black text-2xl md:text-4xl font-display font-semibold pb-4">Socializing our vision</p>
                    <p className="text-black md:text-lg mb-8">To help us move forward, I started sketching design concepts. While I realized that this work
would likely get thrown out as the project evolved, I figured that having a more tangible
representation of our vision could help us socialize the project and get buy-in.       
                    </p>
                    <img src={Flow} alt="A slide showing solution opportunities" className="mx-auto border border-gray-200"></img>
                    <p className="text-gray-500 mx-auto pt-2 pb-8 max-w-3xl text-center text-sm md:text-base">This user flow diagram was one of the first artifacts I generated and was immensely helpful in quickly showcasing our plan to stakeholders.</p>
                    <p className="text-black text-2xl md:text-4xl font-display font-semibold pb-4">Managing the workload</p>
                    <p className="text-black md:text-lg pb-8">Sharing the early concepts with stakeholders proved to be a sucessful strategy, as we were soon given the green light to proceed. To meet our release timeline, I had six months to deliver high-fidelity mock-ups for the entire account opening experience.<br/><br/> To stay on track, I first identified the most important parts of the experience.
                    These were the steps that I would spend most of my time and our research resources on. For the less important steps, I re-used existing designs from other products' account opening experiences.      
                    </p>
                    <p className="text-black text-2xl md:text-4xl font-display font-semibold pb-4">Designing the account selection experience</p>
                    <p className="text-black md:text-lg pb-8">
                         I could write an essay describing what happens next - detailing all of the nitty gritty details of
each and every part of Truist Trade, but I don't think anyone would ever want to read that! In the interest of holding your attention, I'll
focus on one key part of the experience: selecting a type of investing account to open. 
                    </p>
                    <p className="text-black text-2xl md:text-4xl font-display font-semibold pb-4">How can we "hook" users?</p>
                    <p className="text-black md:text-lg pb-4">
Selecting an account is a critical moment in the Truist Trade journey - both because users must make an important decision here (a decision that can have signiciant tax implications) and because it's one of the first steps in the process. From analyzing the fallout rates of other products, we knew that many potential
customers abandoned the application during the first 1-3 screens. We needed to “hook” them
right from the start to encourage them to complete the application. Here's how I went about it:       
                    </p>
                    <div className="grid space-y-2 pt-4 pb-8">
                        <div className="bg-white p-8 shadow-lg border border-gray-200">
                            <p className="text-black font-semibold font-display text-2xl pb-2">Hook #1</p>
                            <hr></hr>
                            <p className="text-gray-800 md:text-lg pt-4">Build trust. Research taught us that an individual's trust in a financial instutition plays a huge role in determining whether they'll invest with that institution. I sought to build trust with users by showing
clear and transparent information about the product and the process they'd need to go through
to open it.</p>
                        </div>
                        <div className="bg-white p-8 shadow-lg border border-gray-200">
                            <p className="text-black font-semibold font-display text-2xl pb-2">Hook #2</p>
                            <hr></hr>
                            <p className="text-gray-800 md:text-lg pt-4">Keep it simple. I kept the first three screens relatively short and clutter-free to give the
impression that the process would be fast and easy.</p>
                        </div> 
                    </div>
                    <img src={Iteration1} alt="A slide showing solution opportunities" className="mx-auto border border-gray-200"></img>
                    <p className="text-gray-500 mx-auto pt-2 pb-8 max-w-3xl text-center md:text-base text-sm">One of the earliest iterations of the account selection page. Initially I experimented with using
badges to denote accounts that were better for retirement. While
this tested well, we had to scrap it for legal reasons. Since Truist Trade is a self-directed brokerage
account, we weren't allowed to show content that could be construed as financial advice. Handling legal requirements is one of the biggest challenges of designing at a bank!</p>
                    <p className="text-black text-2xl md:text-4xl font-display font-semibold pb-4">Finding the right balance of information</p>
                    <p className="text-black md:text-lg pb-8">The second challenge was determining the right amount of content to display. We needed to show enough to educate newbie investors but
not too much to overwhelm them. The design underwent a couple rounds of usability testing and a handful of iterations before I landed on the final design.       
                    </p>
<img src={FinalIteration} alt="A slide showing solution opportunities" className="mx-auto border border-gray-200"></img>
                    <p className="text-gray-500 mx-auto pt-2 pb-8 max-w-3xl text-center md:text-base text-sm">The final version, currently in production. Notable changes include the ability to open multiple accounts at once, tooltips that explain the accounts in further detail, and a more obvious way to contact customer service.</p>
<p className="text-black text-2xl md:text-4xl font-display font-semibold pb-4">Path to production</p>
                    <p className="text-black md:text-lg pb-4">After hundreds of Axure revisions, hours of legal reviews, and frequent discussion between
myself, product, and technology, the design was finally ready to be handed off to development.
<br/><br/>Still, my work wasn't done. I like to stay very involved as designs are implemented. As a former
developer, I know that details can often get lost in translation. To ensure the coded experience
matched the Axure one, I performed rigorous design QA.       
                    </p>
                    <img src={QA} alt="A slide showing solution opportunities" className="mx-auto border border-gray-200"></img>
                    <p className="text-gray-500 mx-auto pt-2 pb-8 max-w-3xl text-center md:text-base text-sm">An excerpt from one of the design QA documents I sent to the dev team.</p>
                    <p className="text-black text-2xl md:text-4xl font-display font-semibold pb-4">Outcome</p>
                    <p className="text-black md:text-lg pb-8">Truist Trade was a huge success when it launched in mid November 2022. Our goal was
to open 100 accounts between launch and the end of the year - which we surpassed less than
two weeks after launch.

<br/><br/>Today, Trade and is an important part of our product portfolio and stills brings in new investors
to Truist every week. Since it's release (10 months at the time of writing), 900 accounts have been opened with a total of $15 million in assets. <br/><br/>Truist Trade also boasts one of the highest
completion rates of any of our products - a testament to the hard work that myself and so
many others put in to building the best experience possible.     
                    </p>
                </div>
            </section>
            <section className="py-8">
                <div className="max-w-4xl mx-auto px-4 md:px-0">
                <p className="font-display text-white font-semibold text-2xl md:text-4xl text-center">Thanks for reading!</p>
                <div className="mx-auto max-w-max pt-4">
                    <Link to="/ThermoKingProject">
                        <button className="transition border-brandGreen font-semibold text-center uppercase hover:text-black hover:bg-brandGreen font-display h-10 border-2 bg-transparent text-brandGreen px-12">Next Project</button>
                    </Link>
                </div>
                </div>
            </section>
        </div>                 
    );
}

export default TradeProject;
import React from 'react';
import {Link} from "react-router-dom";
import CarouselText from './CarouselText';
import TestimonialStream from './TestimonialStream';
import ExternalLink from './ExternalLink';
import ContactForm from './ContactForm';
import ScrollIndicator from './ScrollIndicator';
import AxureIcon from '../images/axure-icon.png';
import ThermoKingImage from '../images/tk-project.png';
import EnsembleImage from '../images/ensemble-project.png';
import T3DPImage from '../images/trace-project.png';
import PortfolioProjectImage from '../images/portfolio-project.png';
import {ReactComponent as XDIcon} from '../images/adobe-xd.svg';
import {ReactComponent as FigmaIcon} from '../images/figma.svg';
import {ReactComponent as HTMLCSSIcon} from '../images/html-css.svg';
import {ReactComponent as JSIcon} from '../images/js.svg';
import {ReactComponent as CSharpIcon} from '../images/csharp.svg';
import {ReactComponent as BinaryTexture} from '../images/binary-texture.svg';
import {ReactComponent as BinaryTextureInverse} from '../images/binary-texture-inverse.svg';

function Home()
{
    return( 
        <div>
            <section className="w-auto h-screen flex relative">
        <div className="mx-auto my-auto">
        <CarouselText textList = {["are easy to use.", "solve problems.", "people enjoy using."]}></CarouselText>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <ScrollIndicator></ScrollIndicator>
        </div>
      </section>
      <section className="flex flex-col mx-auto bg-black px-4 2xl:px-60 h-auto py-20" id="Work">
        <div className="relative mb-8">
          <BinaryTexture className="absolute -top-4 -left-20"></BinaryTexture>
          <p className="font-display text-white font-semibold text-3xl md:text-5xl max-w-3xl leading-tight">I've designed for web, desktop, mobile, and more.</p>
        </div>
        <div className="grid lg:grid-cols-2 gap-4">
          <div className="relative">
              <img src={ThermoKingImage} alt="Screens from Thermo King Connect placed onto several phones." className="object-cover w-full"></img>
          </div>
          <div className="h-auto my-auto lg:px-6">
              <div className="pb-2">
                <p className="text-white font-semibold font-display text-2xl md:text-3xl">Designing a New Mobile Experience for Thermo King Customers</p>
              </div>
              <hr className="border-t border-gray-700 w-full md:w-1/2"></hr>
              <p className="text-gray-400 md:text-lg pt-1">Visual Design // Interaction Design</p>
              <p className="text-gray-200 md:text-lg pt-4 pb-6">Today, there are a lot of Thermo King mobile apps (11 in Apple’s App Store at the time of writing this). This is problematic because each app has different features, different designs, and in some cases different sign-on methods. Recently, we’ve been working to improve the mobile experience for our customers by consolidating the most used features into a single app. I was tasked with definining the visual design for this app.
               </p>
                <button className="transition border-brandGreen font-semibold text-center uppercase font-display h-10 border-2 bg-transparent text-brandGreen hover:bg-brandGreen hover:text-black mx-auto px-20 w-full lg:w-auto">Read More</button>
            </div>
          <div className="relative">
              <img src={EnsembleImage} alt="A laptop on a desk with Tracer Ensemble on the screen" className="object-cover w-full"></img>
          </div>
          <div className="h-auto my-auto lg:px-6">
              <div className="pb-2">
                <p className="text-white font-semibold font-display text-2xl md:text-3xl">Redesigning User Permissions for Tracer&reg; Ensemble&reg;</p>
              </div>
              <hr className="border-t border-gray-700 w-full md:w-1/2"></hr>
              <p className="text-gray-400 md:text-lg pt-1">Interaction Design&nbsp;&nbsp;//&nbsp;&nbsp;Visual Design&nbsp;&nbsp;//&nbsp;&nbsp;User Research</p>
              <p className="text-gray-200 md:text-lg pt-4 pb-6">During my tenure at Trane, I redesigned the user permissions flow for Tracer&reg; Ensemble&reg; - 
              a web application used to remotely manage the HVAC equipment in buildings. Admin users wanted more control over other users' permissions than the current feature could provide.
              I was brought in to design a solution that would meet their needs.
               </p>
              <Link to="/EnsembleProject">
                <button className="transition border-brandGreen font-semibold text-center uppercase font-display h-10 border-2 bg-transparent text-brandGreen hover:bg-brandGreen hover:text-black mx-auto px-20 w-full lg:w-auto">Read More</button>
              </Link>
            </div>
            <div className="relative">
              <img src={T3DPImage} alt="A desktop computer with TRACE 3D Plus on the screen" className="object-cover w-full"></img>
          </div>
          <div className="h-auto my-auto lg:px-6">
              <div className="pb-2">
                <p className="text-white font-semibold font-display text-2xl md:text-3xl">Designing a Solar Shading Analysis Tool in TRACE&reg; 3D Plus</p>
              </div>
              <hr className="border-t border-gray-700 w-full md:w-1/2"></hr>
              <p className="text-gray-400 md:text-lg pt-1 pb-4">Interaction Design&nbsp;&nbsp;//&nbsp;&nbsp;Front-End Development</p>
              <p className="text-gray-200 md:text-lg pb-4">Before diving into the world of UX, I was a developer. I worked on a desktop application called TRACE&reg; 3D Plus. 
              We were tasked with developing a feature that would allow the user to change the position of the sun in their building model. We lacked a designer, so I volunteered to 
              design the feature. This was one of the first projects that helped me realize my passion for UX. 
              </p>
              <Link to="/TraceProject">
                <button className="transition border-brandGreen font-semibold text-center uppercase font-display h-10 border-2 bg-transparent text-brandGreen hover:bg-brandGreen hover:text-black mx-auto px-20 w-full lg:w-auto">Read More</button>
              </Link>
            </div>
            <div className="relative">
              <img src={PortfolioProjectImage} alt="Four images that show what this site looked look at various stages of the design process" className="object-cover w-full"></img>
          </div>
          <div className="h-auto my-auto lg:px-6">
              <div className="pb-2">
                <p className="text-white font-semibold font-display text-2xl md:text-3xl">Behind the Screens: The Making of this Site</p>
              </div>
              <hr className="border-t border-gray-700 w-full md:w-1/2"></hr>
              <p className="text-gray-400 md:text-lg pt-1 pb-4">Visual Design&nbsp;&nbsp;//&nbsp;&nbsp;Interaction Design&nbsp;&nbsp;//&nbsp;&nbsp;Front-End Development</p>
              <p className="text-gray-200 md:text-lg pb-4">What kind of portfolio includes a section showcasing itself? Well, this one apparently. This site was an ambitious project – I used almost every tool in my toolbox to make it just right. And I learned a lot along the way. 
              </p>
              <Link to="/PortfolioProject">
                <button className="transition border-brandGreen font-semibold text-center uppercase font-display h-10 border-2 bg-transparent text-brandGreen hover:bg-brandGreen hover:text-black mx-auto px-20 w-full lg:w-auto">Read More</button>
              </Link>
            </div>
        </div>
      </section>
      <section className="bg-white py-20 md:bg-angled-lg bg-angled-xl">
        <div className="flex flex-col mx-auto px-4 xl:px-60 container pb-12">
          <div className="relative pb-6">
            <p className="font-display text-black text-3xl md:text-5xl pb-2 font-semibold">Versatile designer.</p>
            <p className="font-display text-black text-3xl md:text-5xl pb-2 font-semibold">Lifelong learner.</p>
            <p className="font-display text-black text-3xl md:text-5xl font-semibold">Tech geek.</p>
            <BinaryTextureInverse className="absolute -top-4 -left-20"></BinaryTextureInverse>
          </div>
          <p className="text-gray-800 md:text-lg pb-6 max-w-xl">I'm a versatile creative professional with 3+ years designing and developing enterprise software. 
          I'm always learning new skills. I use sites like <ExternalLink path="https://www.nngroup.com/" text="nngroup.com"></ExternalLink>, <ExternalLink path="https://css-tricks.com/" text="css-tricks.com"></ExternalLink>, and 
          &nbsp;<ExternalLink path="https://www.interaction-design.org/" text="interaction-design.org"></ExternalLink> to stay up to date with industry trends.
          <br></br><br></br>Here are a few of my favorite tools, methods, and technologies that I've picked up along the way.</p>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white p-8 shadow-lg border border-gray-200">
              <p className="text-black font-semibold font-display text-2xl md:text-3xl pb-2">Design Tools</p>
              <hr></hr>
              <div className="flex flex-row pt-4">
                <img src={AxureIcon} className="w-16 mr-3"></img>
                <div className="w-full">
                  <div className="flex flex-row justify-between pb-1">
                    <p className="text-gray-800">Axure</p>
                    <p className="text-black font-bold">Expert</p>
                  </div>
                  <div className="border-gray-200 w-full border h-6 rounded-full bg-gradient-to-r from-blue-400 to-green-400"></div>
                </div>
              </div>
              <div className="flex flex-row pt-4">
                <XDIcon className="w-20 h-20 mr-3"></XDIcon>
                <div className="w-full">
                  <div className="flex flex-row justify-between pb-1">
                    <p className="text-gray-800">Adobe XD</p>
                    <p className="text-black font-bold">Advanced</p>
                  </div>
                  <div className="border-gray-200 w-full border h-6 rounded-full bg-gray-100">
                    <div className="border-gray-200 w-5/6 border h-6 rounded-full bg-gradient-to-r from-pink-400 to-pink-800"></div>
                  </div>
                </div>
              </div>
              <div className="flex flex-row pt-4">
                <FigmaIcon className="w-20 h-20 mr-3"></FigmaIcon>
                <div className="w-full">
                  <div className="flex flex-row justify-between pb-1">
                    <p className="text-gray-800">Figma</p>
                    <p className="text-black font-bold">Intermediate</p>
                  </div>
                  <div className="border-gray-200 w-full border h-6 rounded-full bg-gray-100">
                    <div className="border-gray-200 w-4/6 border h-6 rounded-full bg-gradient-to-r from-red-400 to-red-700"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 shadow-lg border border-gray-200">
              <p className="text-black font-semibold font-display text-2xl md:text-3xl pb-2">Development Stack</p>
              <hr></hr>
              <div className="flex flex-row pt-4">
                <HTMLCSSIcon className="w-20 h-16 mr-3"></HTMLCSSIcon>
                <div className="w-full">
                  <div className="flex flex-row justify-between pb-1">
                    <p className="text-gray-800">HTML/CSS</p>
                    <p className="text-black font-bold">Advanced</p>
                  </div>
                  <div className="border-gray-200 w-full border h-6 rounded-full bg-gray-100">
                    <div className="border-gray-200 w-5/6 border h-6 rounded-full bg-gradient-to-r from-red-400 to-pink-600"></div>
                  </div>
                </div>
              </div>
              <div className="flex flex-row pt-4">
              <CSharpIcon className="w-20 h-20 mr-3"></CSharpIcon>
                <div className="w-full">
                  <div className="flex flex-row justify-between pb-1">
                    <p className="text-gray-800">C#</p>
                    <p className="text-black font-bold">Intermediate</p>
                  </div>
                  <div className="border-gray-200 w-full border h-6 rounded-full bg-gray-100">
                    <div className="border-gray-200 w-4/6 border h-6 rounded-full bg-gradient-to-r from-purple-400 to-purple-800"></div>
                  </div>
                </div>
              </div>
              <div className="flex flex-row pt-4">
              <JSIcon className="w-20 h-20 mr-3"></JSIcon>
                <div className="w-full">
                  <div className="flex flex-row justify-between pb-1">
                    <p className="text-gray-800">Javascript</p>
                    <p className="text-black font-bold">Novice</p>
                  </div>
                  <div className="border-gray-200 w-full border h-6 rounded-full bg-gray-100">
                    <div className="border-gray-200 w-3/6 border h-6 rounded-full bg-gradient-to-r from-yellow-300 to-yellow-600"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-black w-full">
        <div className="container mx-auto px-4 xl:px-60">
          <div className="py-4">
            <div className="relative">
              <BinaryTexture className="absolute -top-4 -left-20"></BinaryTexture>
              <p className="font-display text-white font-semibold text-3xl md:text-5xl max-w-xl">Testimonials</p>
            </div>
          </div>
        </div>
        <TestimonialStream></TestimonialStream>
      </section>
      <section className="relative py-72 lg:py-64" id="Contact">
        <div className="bg-angled-sm bg-white h-80">
        </div> 
        <div className="grid lg:grid-cols-2 absolute left-0 right-0 top-0 bottom-0 mx-auto my-auto z-10 px-4 lg:px-24">
            <div className="place-self-center relative hidden lg:block">
              <p className="font-display text-black text-5xl pb-2">Want to get in touch?</p>
              <p className="font-display text-black text-5xl">Send me a message.</p>
              <BinaryTextureInverse className="absolute -top-4 -left-16"></BinaryTextureInverse>
            </div>
            <div className="place-self-center relative lg:hidden mt-8">
              <p className="font-display text-white text-3xl pb-2">Want to get in touch?</p>
              <p className="font-display text-white text-3xl">Send me a message.</p>
              <BinaryTexture className="absolute -top-4 -left-16"></BinaryTexture>
            </div>
            <ContactForm></ContactForm>
        </div>
      </section>
        </div>                 
    );
}

export default Home;
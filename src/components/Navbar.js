import React from 'react';
import './NavItem';
import '../App.css';
import NavItem from './NavItem';
import {HashLink as Link} from "react-router-hash-link";
import Resume from '../documents/jonah-resume-2023.pdf';

class Navbar extends React.Component
{
    openMenu(){
        let menu = document.getElementById('menu');
        menu.classList.toggle('flex');
        menu.classList.toggle('hidden');
        this.animateMenu();
    }

    animateMenu()
    {
        var menu1 = document.getElementById('menu_bar1');
        var menu2 = document.getElementById('menu_bar2');
        var menu3 = document.getElementById('menu_bar3');
        menu1.classList.toggle('rotate-45');
        menu1.classList.toggle('translate-y-1.5');
        menu2.classList.toggle('opacity-0');
        menu3.classList.toggle('-rotate-45');
        menu3.classList.toggle('-translate-y-1.5');
    }

    render(){
        return( 
            <div className="relative">
                <div className="bg-black border-gray-900 border-b fixed w-full z-50 shadow-lg">
                    <div className="container mx-auto px-5">
                        <nav className="md:flex flex-row md:justify-between py-3 md:py-0">
                            <div className="flex flex-row justify-between my-auto">
                                <Link to="/" className="text-white uppercase text-xl font-display font-bold" href="#">Jonah Miller <span className="text-brandGreen">UX</span></Link>
                                <button onClick={() => this.openMenu()} className="md:hidden bg-black text-white text-xl">
                                    <div id="menu_bar1" className="bg-white h-0.5 w-6 my-1 transition transform"></div>
                                    <div id="menu_bar2" className="bg-white h-0.5 w-6 my-1 transition"></div>
                                    <div id="menu_bar3" className="bg-white h-0.5 w-6 my-1 transition transform"></div>
                                </button>
                            </div>
                            <ul className="hidden md:flex md:flex-row pt-5 transition">
                                <NavItem path="/#Work" text="Work"></NavItem>
                                <li className="relative hover-trigger h-11 mx-5">
                                    <a href="https://www.linkedin.com/in/jonah-miller-b98346136/" target="_blank" className="transition text-white hover:text-brandGreen text-xl font-display font-semibold">LinkedIn</a>
                                </li>
                                <NavItem path="/#Contact" text="Contact"></NavItem>
                                <li className="relative hover-trigger h-11 mx-5">
                                    <a href={Resume} target="_blank" className="transition text-white hover:text-brandGreen text-xl font-display font-semibold">Resume</a>
                                </li> 
                            </ul>
                        </nav>
                    </div> 
                    <div id="menu" className="h-screen w-full hidden bg-black border-t border-gray-900">
                    <ul className="mx-auto pb-8 pt-16">
                        <li className="text-white text-3xl font-display py-2 hover:text-brandGreen text-center">
                            <Link to="/#Work" onClick={() => this.openMenu()}>Work</Link>
                        </li>
                        <li className="text-white text-3xl font-display py-2 hover:text-brandGreen text-center">
                            <a href="https://www.linkedin.com/in/jonah-miller-b98346136/" target="_blank">LinkedIn</a>
                        </li>
                        <li className="text-white text-3xl font-display py-2 hover:text-brandGreen text-center">
                            <Link to="/#Contact" onClick={() => this.openMenu()}>Contact</Link>
                        </li>
                        <li className="text-white text-3xl font-display py-2 hover:text-brandGreen text-center">
                            <a href={Resume} target="_blank" className="transition text-white hover:text-brandGreen text-3xl font-display font-semibold">Resume</a>
                        </li>
                    </ul>
                </div>
                </div>
            </div>
        );
    }
}

export default Navbar;
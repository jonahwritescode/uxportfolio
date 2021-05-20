import React from 'react';
import '../App.css';
import {HashLink as Link} from "react-router-hash-link";

class NavItem extends React.Component
{
    hideMenu(){
        let menu = document.getElementById('menu');
        menu.classList.add('hidden');
        this.animateMenu();
    }

    animateMenu()
    {
        var menu1 = document.getElementById('menu_bar1');
        var menu2 = document.getElementById('menu_bar2');
        var menu3 = document.getElementById('menu_bar3');
        menu1.classList.remove('rotate-45');
        menu1.classList.remove('translate-y-1.5');
        menu2.classList.remove('opacity-0');
        menu3.classList.remove('-rotate-45');
        menu3.classList.remove('-translate-y-1.5');
    }

    render() {
        return( 
            <li className="relative hover-trigger h-11 mx-5">
                <Link to={this.props.path} className="transition text-white hover:text-brandGreen text-xl font-display font-semibold">{this.props.text}</Link>
            </li>                             
        );
    }
}

export default NavItem;
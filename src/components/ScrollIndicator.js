import React from 'react';
import {ReactComponent as BinaryTexture} from '../images/binary-texture.svg'

function ScrollIndicator()
{
    return( 
        <div id="scroll_indicator" className="relative w-full transition">
            <BinaryTexture></BinaryTexture>
            <div className="absolute mx-auto left-0 right-0 text-center bottom-2">
                <p className="text-xl text-white pb-2">my work</p>
                <i className="fas fa-arrow-down text-white text-xl animate-bounce"></i>
            </div>
        </div>                 
    );
}

export default ScrollIndicator;
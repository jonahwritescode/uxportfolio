import React from 'react';

class Testimonial extends React.Component
{
    render(){
        return( 
            <div className="ml-4 md:ml-6 min-w-xs md:min-w-md lg:min-w-lg transform-gpu" style={{...this.props.location}}>
              <div className="bg-gray-900 p-6 relative">
                <p className="text-white text-7xl pb-3 absolute opacity-10"><i className="fas fa-quote-left"></i></p>
                <p className="text-gray-200 md:text-lg py-6">{this.props.person.quote}</p>  
                <hr className="border-t border-gray-700 w-1/2 mx-auto"></hr>
                <p className="text-white text-center font-display text-semibold text-xl md:text-2xl pt-4">{this.props.person.firstName}&nbsp;<span className="text-brandGreen">{this.props.person.lastName}</span></p>
                <p className="text-gray-200 text-center text-lg md:text-xl">{this.props.person.title}</p>
                <p className="text-gray-300 text-center text-lg md:text-xl font-mono">{this.props.person.year}</p>  
              </div>
          </div>                      
        );
    }
}

export default Testimonial;
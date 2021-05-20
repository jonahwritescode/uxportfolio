import React from 'react';

class ExternalLink extends React.Component
{
    render(){
        return( 
            <a href={this.props.path} className="border-b border-gray-400 bg-blue-100 hover:border-gray-800 hover:bg-blue-300">{this.props.text}</a>                         
        );
    }
}

export default ExternalLink;
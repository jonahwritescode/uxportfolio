import React from 'react';
import Testimonial from './Testimonial';

const person1 = {
    firstName: 'Jackson',
    lastName: 'Kruger',
    title: 'UI Software Developer',
    quote: 'Many people act like they care about user experience but never really do anything about it. Jonah is not one of those people. He is someone that is genuinely passionate about UI/UX and turns that passion into concrete improvements for users. It makes brainstorming with him a blast; afterwards, you find yourself caring more about UI/UX than when you started.',
    year: '2021',
};
const person2 = {
    firstName: 'John',
    lastName: 'Evenstar',
    title: 'Software Engineer II',
    quote: 'Jonah is a blast to work with. He is passionate, articulate, and never backs down from a challenge. In addition, he is a great team player and fun to be around!',
    year: '2019',
};
const person3 = {
    firstName: 'Kathylynn',
    lastName: 'Sedro',
    title: 'Senior User Researcher/Strategist',
    quote: 'Jonah is a natural at visual design. Plus, he is always learning and keeping up with design trends so his designs are fresh and inventive. He enjoys visual problem solving and pushes his designs to perfection. I have truly enjoyed working with Jonah.',
    year: '2021',
};
const person4 = {
    firstName: 'Mitch',
    lastName: 'Anderson',
    title: 'Product Owner',
    quote: 'Jonah has continuously demonstrated an ability to take input from early definition around requirements, distill complexity in existing designs, and come up with simple, elegant solutions to user problems.' 
    + ' He has an impressive breadth of UX skills related to gathering inputs from customers and stakeholders, visual design, usability, and user validation. His excitement, initiative and drive for excellence make collaborating on projects so much fun!',
    year: '2020'
};
const person5 = {
    firstName: 'Lizzie',
    lastName: 'Wortham',
    title: 'Senior User Researcher/Strategist',
    quote: 'Jonah seems to naturally "get" UX. With very little formal training, Jonah was able to jump right in and start producing great wireframes, and wasn\'t afraid to turn right around and test those wireframes with real users.',
    year: '2019',
};
const person6 = {
    firstName: 'Sarah',
    lastName: 'Hilden',
    title: 'Product Owner',
    quote: 'I was lucky to have Jonah on our scrum team for a year. Jonah has a passion for UI/UX. He identified a great need to focus in this area - he spearheaded usability sessions to help the team identify, understand, and ' +
    'address usability issues throughout the application. Jonah was also the first in the team to develop interactive mockups - helping us plan features by showing stakeholders how things would work. The team learned a great deal about UX that would not have been achieved without Jonah\'s drive and leadership.',
    year: '2020',
}

var locations = [0, 0, 0, 0, 0, 0];
var translations = [
    {transform: 'TrabslateX(0%)'},
    {transform: 'TrabslateX(0%)'},
    {transform: 'TrabslateX(0%)'},
    {transform: 'TrabslateX(0%)'},
    {transform: 'TrabslateX(0%)'},
];

class TestimonialStream extends React.Component
{
    constructor(props) {
        super(props)
        this.state = {locations: translations};
    }

    componentDidMount()
    {
        this.timerID = setInterval(() => this.moveTestimonials(), 10);
    }

    componentWillUnmount()
    {
        clearInterval(this.timerID);
    }

    moveTestimonials()
    {
        let i = 0;
        for (i = 0; i < locations.length; i++)
        {
            locations[i] -= 0.1;
            if (locations[i] < (i + 1) * -105)
            {
                locations[i] = (locations.length  - (i + 1)) * 105;
            }
            var transform = 'TranslateX(' + locations[i] + '%)';
            translations[i] = {transform: transform};
        }
        this.setState({locations: translations});
    }

    render(){
        return( 
            <div>
                <div className="md:flex flex-row flex-nowrap py-10 overflow-x-hidden hidden">
                    <Testimonial location={this.state.locations[0]} person={person1}></Testimonial>
                    <Testimonial location={this.state.locations[1]} person={person2}></Testimonial>
                    <Testimonial location={this.state.locations[2]} person={person3}></Testimonial>
                    <Testimonial location={this.state.locations[3]} person={person4}></Testimonial> 
                    <Testimonial location={this.state.locations[4]} person={person5}></Testimonial>  
                    <Testimonial location={this.state.locations[5]} person={person6}></Testimonial>                          
                </div>
                <div className="flex flex-row flex-nowrap py-10 overflow-x-auto max-w md:hidden">
                    <Testimonial person={person1}></Testimonial>
                    <Testimonial person={person2}></Testimonial>
                    <Testimonial person={person3}></Testimonial>
                    <Testimonial person={person4}></Testimonial> 
                    <Testimonial person={person5}></Testimonial>  
                    <Testimonial person={person6}></Testimonial> 
                </div> 
            </div>                     
        );
    }
}

export default TestimonialStream;
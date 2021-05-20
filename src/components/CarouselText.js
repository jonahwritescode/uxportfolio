
import React from 'react';

class CarouselText extends React.Component
{
    constructor(props) {
        super(props)
        this.state = {text: ""};
    }
    
    async componentDidMount() {
        let i = 0;       
        while(true)
        {
            await this.typeSentence(this.props.textList[i]);
            await this.wait(1500);
            await this.deleteSentence();
            await this.wait(500);
            i++;
            if (i >= this.props.textList.length) {
            i = 0;
            }
        }
    }

    async typeSentence(sentence, delay = 85) {
        const letters = sentence.split("");
        let typedText = "";
        let i = 0;
        while (i < letters.length) {
          await this.wait(delay);
          typedText += letters[i];
          this.setState({text: typedText});
          i++;
        }
    }

    async deleteSentence(delay = 60) {
      const sentence = this.state.text;
      let typedText = "";
      let i = 0;
      while (i <= sentence.length)
      {
        await this.wait(delay);
        typedText = sentence.substring(0, sentence.length - i);
        this.setState({text: typedText});
        i++;
      }
    }

    async wait(duration) {
        return new Promise(r => setTimeout(r, duration));
    }


    render() {
        return( 
            <div className="px-4 lg:px-0">
                <p className="text-gray-700 font-bold font-display text-4xl md:text-6xl pb-4">Hello, I'm Jonah.</p>
                <p className="text-gray-500 font-bold font-display text-5xl md:text-7xl pb-4">I design products that</p>
                <div className="flex flex-row h-24">
                    <span className="text-white font-bold font-display text-6xl md:text-8xl">{this.state.text}</span>
                    <div className="bg-brandGreen w-3 h-auto ml-2 animated-cursor hidden md:block"></div>
                </div>    
                <p className="text-transparent font-bold font-display text-6xl md:text-8xl ml-5">people enjoy using.</p>
            </div>                       
        );
    }
}

export default CarouselText;
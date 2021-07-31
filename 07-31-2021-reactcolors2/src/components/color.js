import { Component } from 'react';

class Color extends Component {

  randomColor = () => {
    let red = Math.round(Math.random() * 255);
    let green = Math.round(Math.random() * 255);
    let blue = Math.round(Math.random() * 255);

    return { red: red, green: green, blue: blue };
  }

  render() {
    console.log(
      'Rendering my color component for color: '
    );

    const { red, green, blue } = this.randomColor();

    return (
      <div
        className={'color'}
        style={{
          backgroundColor: `rgb(${red} ${green} ${blue})`
        }} ></div>
    )
  }
}

export default Color
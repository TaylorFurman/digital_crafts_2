import { Component } from 'react';
import Color from './components/color';

class ColorsApp extends Component {


  render() {
    return (
      <div className='colorContainer'>
        <Color />
        <Color />
        <Color />
        <Color />
        <Color />
        <Color />
      </div>
    )
  }
}

export default ColorsApp;
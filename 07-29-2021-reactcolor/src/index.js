//import React from 'react'
//import ReactDOM from 'react-dom';
//import './index.css';

randomColor = () =>{
    //Code to generate random color
    //000000 -> FFFFFF
    // RGB -> R(00) G(00) B(00)
    let red = Math.round(Math.random() *255);
    let green = Math.round(Math.random() *255);
    let blue = Math.round(Math.random() *255);
    return {red: red, green: green, blue: blue};
}

console.log(randomColor());
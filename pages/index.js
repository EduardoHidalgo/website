import React from "react";
import Particles from 'react-particles-js';
import '../src/index.css';

export default class Index extends React.Component {
    componentDidMount() {
      document.getElementsByTagName('canvas')[0].removeAttribute('height');
      document.getElementsByTagName('canvas')[0].removeAttribute('width');
      document.getElementsByTagName('canvas')[0].width = 0;
      document.getElementsByTagName('canvas')[0].height = window.innerHeight + 20;
      console.log(document.getElementsByTagName('canvas')[0].width = 0);
    }
  
    render() {
      return (
        <div>
             <Particles
            height={'3000'}
            style={{
                backgroundColor: 'black' 
            }}/>
        </div>
      )
    } 
}

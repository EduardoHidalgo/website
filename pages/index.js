import React, { useEffect, useState } from "react";
import Content from "../components/content.js";
import params from '../src/particles.json';
import '../src/bootstrap';
import '../src/styles/index.css';

function Index() {
  var ParticlesJS = null;

  // importa dinámicamente en Client-side la librería particles
  if (typeof window !== 'undefined') { 
    ParticlesJS = require('particles.js');
  }
  // instancia las particulas dinámicamente en Client-side
  useEffect(() => {
    if (typeof window !== 'undefined') particlesJS('particles-js', params)
  }, []);

  return (
    <div>
      {/* <img className={'background'} src={'../static/darkbg.jpg'} /> */}
      <Content/>
      {ParticlesJS !== null ? <div id="particles-js"></div> : "particles es nulo"}
    </div>
  )
}

export default Index;

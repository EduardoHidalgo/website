import React, { useEffect, useState } from "react";
import Particles from 'react-particles-js';
import '../src/index.css';
import params from '../src/particlesjs-config.json';

function Index() {
  const [width, setWidth] = useState();
  const [height, setHeight] = useState();

  // efecto side principal, sucede antes de cargar el componente.
  // limpia el componente canvas de dos atributos que evitan el escalado correcto.
  useEffect(() => {
    setWidth(window.innerWidth + 20);
    setHeight(window.innerHeight + 20);
    document.getElementsByTagName('canvas')[0].removeAttribute('height');
    document.getElementsByTagName('canvas')[0].removeAttribute('width');
    document.getElementsByTagName('canvas')[0].width = window.innerWidth;
    document.getElementsByTagName('canvas')[0].height = window.innerHeight;
  }, []);

  useEffect(() => {
    const handleResize = () => { setWidth(window.innerWidth); setHeight(window.innerHeight); };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    }
  });

  return (
    <div>
      <Particles
        params={params}
        style={{
          backgroundColor: 'black' 
        }}/>
    </div>
  )
}

export default Index;

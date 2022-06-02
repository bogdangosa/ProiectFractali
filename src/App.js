import { useState,useEffect } from 'react'
import './App.css';
import Koch from './Koch/Koch';
import Sierpinsky from './Sierpinsky/Sierpinsky';

function App() {
  const [fractal_type,setfractal_type] = useState("Sierpinsky");




  return (
    <div className="App">
      <h1 className="Titlu">Fractali</h1>
      <p className="Text"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec molestie turpis sem, in efficitur libero venenatis sed. Nullam tincidunt tincidunt rhoncus. Pellentesque aliquam mauris non quam faucibus lobortis.        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec molestie turpis sem, in efficitur libero venenatis sed. Nullam tincidunt tincidunt rhoncus. Pellentesque aliquam mauris non quam faucibus lobortis. </p>
      
      <iframe width="560" height="315" src="https://www.youtube.com/embed/WFtTdf3I6Ug" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      
      <div>
        <div className="setfractaldiv">
          <p className="setfractalbtn" onClick={()=>setfractal_type("Sierpinsky")} >Sierpinsky</p> 
          <p className="setfractalbtn" onClick={()=>setfractal_type("Koch")}>Koch</p>  
        </div>
      </div>

      {fractal_type=="Koch"?<Koch></Koch>:<></>}
      {fractal_type=="Sierpinsky"?<Sierpinsky></Sierpinsky>:<></>}


    </div>
  );
}

export default App;

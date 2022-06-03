import { useState,useEffect } from 'react'
import './App.css';
import Koch from './Koch/Koch';
import Sierpinsky from './Sierpinsky/Sierpinsky';

function App() {
  const [fractal_type,setfractal_type] = useState("Sierpinsky");




  return (
    <div className="App">
      <h1 className="Titlu">Fractali</h1>
      <div className='TopContainer'>
        <p className="Text">Fractalii sunt forme si modele extraordinare create cu ajutorul ecuatiilor matematice. O definitie intuitiva a fractalului este aceasta: Un fractal este o figura geometrica fragmentata sau franta, care poate fi divizata in parti, astfel incat fiecare dintre acestea sa fie (cel putin aproximativ) o copie miniaturala a intregului. Cuvantul “fractal” a fost introdus de matematicianul Benoit Mandelbrot in 1975 si provine din latinescul “fractus”, care inseamna spart sau fracturat.</p>
        <iframe className="video" width="560" height="315" src="https://www.youtube.com/embed/WFtTdf3I6Ug" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      </div>
      
      <div className="setfractaldiv">
        <div className='fractalbtndiv'>
          <p className="setfractalbtn" onClick={()=>setfractal_type("Sierpinsky")} >Sierpinsky</p> 
          <div className={fractal_type=="Sierpinsky"?"underline":"underline invisible"}></div>
        </div>
        <div className='fractalbtndiv'>
          <p className="setfractalbtn" onClick={()=>setfractal_type("Koch")}>Koch</p>  
          <div className={fractal_type=="Koch"?"underline":"underline invisible"}></div>
        </div>
      </div>

      {fractal_type=="Koch"?<Koch></Koch>:<></>}
      {fractal_type=="Sierpinsky"?<Sierpinsky></Sierpinsky>:<></>}


    </div>
  );
}

export default App;

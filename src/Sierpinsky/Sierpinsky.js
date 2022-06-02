import React, { useRef, useEffect,useState } from 'react'
import './Sierpinsky.css';
import useWindowDimensions from '../useWindowDimensions';

function Sierpinsky(props) {
    const { height, width } = useWindowDimensions();
    const [fractal_limit,setfractal_limit] = useState(0);
    const canvasRef = useRef(null)
  
    useEffect(() => {console.log(fractal_limit)
        if(fractal_limit==undefined)
            return;
        const canvas = canvasRef.current
        const context = canvas.getContext('2d')
        context.canvas.width = width*2/3;
        context.canvas.height = height*2/3;
        
        context.fillStyle = '#8DE2FD';

        let p1={
            x:0,
            y:-321
        },p2={
            x:278,
            y:160
        },p3={
            x:-278,
            y:160
        };

        context.setTransform(1, 0, 0, 1, 0, 0);
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.translate(width/3,height/3);  
        console.log(fractal_limit)
        SierPinski(context,p1,p2,p3,fractal_limit);


}, [fractal_limit])


    const drawTriangle = (context,p1,p2,p3) =>{
        context.beginPath();
        context.moveTo(p1.x,p1.y);
        context.lineTo(p2.x,p2.y);
        context.lineTo(p3.x,p3.y);
        context.fill();
        context.closePath();
    }  

    //drawTriangle(p1,p2,p3);

    const SierPinski =(context,p1,p2,p3,limit) =>{
        if(limit==0){
            drawTriangle(context,p1,p2,p3);
            return;
        }

        let pA={
            x:(p1.x+p2.x)/2,
            y:(p1.y+p2.y)/2
        },pB={
            x:(p2.x+p3.x)/2,
            y:(p2.y+p3.y)/2
        },pC={
            x:(p3.x+p1.x)/2,
            y:(p3.y+p1.y)/2
        };

        
        SierPinski(context,p1,pA,pC,limit-1);
        SierPinski(context,pA,p2,pB,limit-1);
        SierPinski(context,pC,pB,p3,limit-1);

    }


  return (
    <div className="Sierpinsky">
        <input className="Input" type="number" value={fractal_limit} onChange={(e)=>{if(e.target.value<12)setfractal_limit(e.target.value)}}/>
        <canvas className="canvas" ref={canvasRef}></canvas>

    </div>
  );
}

export default Sierpinsky;

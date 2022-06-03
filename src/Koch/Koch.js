import React, { useRef, useEffect,useState } from 'react'
import './Koch.css';
import useWindowDimensions from '../useWindowDimensions';

function Koch(props) {
    const [fractal_limit,setfractal_limit] = useState(0);
    const { height, width } = useWindowDimensions();
    const canvasRef = useRef(null)


    useEffect(() => {
        const canvas = canvasRef.current
        const context = canvas.getContext('2d')
        context.canvas.width = width*3/4;
        context.canvas.height = height;
        
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
        context.translate(width*3/8,height/2);  
        
        koch(context,p1,p2,fractal_limit);
        koch(context,p2,p3,fractal_limit);
        koch(context,p3,p1,fractal_limit);


    }, [fractal_limit])

    
    function koch(context, p1, p2, limit) {
		let dx = p2.x - p1.x;
        let dy = p2.y - p1.y;
        let dist = Math.sqrt(dx * dx + dy * dy);
        let  unit = dist / 3;
        let angle = Math.atan2(dy, dx);
        console.log(Math.PI);
        let pA = {
            x: p1.x + dx / 3,
            y: p1.y + dy / 3
        },
        pC = {
            x: p2.x - dx / 3,
            y: p2.y - dy / 3
        },
        pB = {
            x: pA.x + Math.cos(angle - Math.PI / 3) * unit,
            y: pA.y + Math.sin(angle - Math.PI / 3) * unit
        };

		if(limit > 0) {
			koch(context,p1, pA, limit - 1);
			koch(context,pA, pB, limit - 1);
			koch(context,pB, pC, limit - 1);
			koch(context,pC, p2, limit - 1);
		}
		else {
            context.fillStyle = '#8DE2FD';
			context.beginPath();
			context.moveTo(p1.x, p1.y);
			context.lineTo(pA.x, pA.y);
			context.lineTo(pB.x, pB.y);
			context.lineTo(pC.x, pC.y);
			context.lineTo(p2.x, p2.y);
			context.stroke();
		}
	}

  return (
    <div className="Koch">
        
        <input className="Input" type="number" value={fractal_limit} onChange={(e)=>{if(e.target.value<7&& e.target.value>=0)setfractal_limit(e.target.value)}}/>
        <canvas className="canvas" ref={canvasRef}></canvas>
    </div>
  );
}

export default Koch;

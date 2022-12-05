import { useEffect} from 'react'
import './Drawing.css'

export default function Drawing({ wrongAnswers}) {
    useEffect(() => {
        console.log("wrong answers" + wrongAnswers)
        var canvas = document.getElementById("canvas");
        var ctx = canvas.getContext("2d");
        if(wrongAnswers === 0){
            ctx.clearRect(0, 0, canvas.width, canvas.height);
        }
        if (wrongAnswers >= 0) {
            ctx.beginPath();
            ctx.moveTo(0, 150);
            ctx.lineTo(140, 150);
            ctx.stroke(); 
            ctx.moveTo(70, 150);
            ctx.lineTo(70, 10);
            ctx.stroke();
            ctx.moveTo(70, 10);
            ctx.lineTo(170, 10);
            ctx.stroke();
            ctx.moveTo(170, 10);
            ctx.lineTo(170, 20);
            ctx.stroke();
            ctx.moveTo(160, 20);
            ctx.lineTo(180, 20);
            ctx.stroke();
            console.log("Hello")
            if (wrongAnswers >= 1) {
                ctx.beginPath();
                ctx.arc(170, 35, 15, 0, 2 * Math.PI);
                ctx.stroke();
                if (wrongAnswers >= 2) {
                    ctx.moveTo(170, 50);
                    ctx.lineTo(170, 60);
                    ctx.stroke();
                    if (wrongAnswers >= 3) {
                        ctx.moveTo(170, 60);
                        ctx.lineTo(140, 85);
                        ctx.stroke();
                        if (wrongAnswers >= 4) {
                            ctx.moveTo(170, 60);
                            ctx.lineTo(200, 85);
                            ctx.stroke();
                            if (wrongAnswers >= 5) {
                                ctx.moveTo(170, 60);
                                ctx.lineTo(170, 100);
                                ctx.stroke();
                                if (wrongAnswers >= 6) {
                                    ctx.moveTo(170, 100);
                                    ctx.lineTo(130, 140);
                                    ctx.stroke();
                                    if (wrongAnswers >= 7) {
                                        ctx.moveTo(170, 100);
                                        ctx.lineTo(210, 140);
                                        ctx.stroke();
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    })

    return (
        <div>
            <canvas id="canvas"/>
        </div>
    )
}
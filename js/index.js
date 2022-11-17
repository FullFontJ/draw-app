document.addEventListener("DOMContentLoaded", start, false);
// element.addEventListener('click', start, false);
// document.ready(start);

let draw;
let canvas = document.getElementById('canvas');
let context = canvas.getContext('2d');

let radius = 10;
let minRadious = 2;
let maxRadius = 30;

save();

function pincelSize(){
    document.getElementById("increase").addEventListener('click', function(){
        radius = radius + 2;
        if (radius>=maxRadius){
            radius=maxRadius;
        }
        document.getElementById("pincelval").innerText = radius;
    });

    document.getElementById("decrease").addEventListener('click', function(){
        radius = radius - 2;
        if (radius <= minRadius){
            radius = minRadius;
        }
        document.getElementById("pincelval").innerText = radius;
    });
}

function start(){
    pincelSize();
    canvas.width = window.innerWidth - 15;
    canvas.height = window.innerHeight;


    document.getElementById("canvas").addEventListener('mousedown',press,false);
    document.getElementById("canvas").addEventListener('mousemove',paint,false);
    document.getElementById("canvas").addEventListener('mouseup',leave,false);


    function press(){
        draw = true;
        context.moveTo(event.pageX,event.pageY);
    }

    function paint(){
        if(draw){
            context.lineWidth = radius*2;
            context.lineTo(event.pageX,event.pageY);
            context.stroke();
            context.beginPath();
            context.arc(event.pageX,event.pageY, radius, 0, 2*Math.PI);
            context.fill();

            context.beginPath();
            context.moveTo(event.pageX,event.pageY);
        }
    }

    function leave(){
        draw = false;
    }

}

function save(){
    document.getElementById("save").click(function(){
        let image = canvas.taDataURL("image/png").replace("image/png", "image/octet-stream");
        window.location.href=image;
    });
}
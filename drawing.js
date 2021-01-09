// Project created by ferrandusqui31

var w = document.getElementById('w'),
    a = document.getElementById('a'),
    s = document.getElementById('s'),
    d = document.getElementById('d'),
    drawText = document.getElementById('drawing');
    canvas = document.getElementById('canvas'),
    canvas2 = document.getElementById('canvas2'),
    posXText = document.getElementById('positionX'),
    posYText = document.getElementById('positionY'),
    ctx = canvas.getContext('2d'),
    ctx2 = canvas2.getContext('2d'),
    posX = 150,
    posY = 75,
    draw = false;
    
ctx2.beginPath();
ctx2.arc(posX, posY, 1, 0, 2*Math.PI);
ctx2.stroke();

window.addEventListener('keypress', getKey);

function getKey(event){
    
    var wNUM = parseInt(w.innerHTML),
        aNUM = parseInt(a.innerHTML),
        sNUM = parseInt(s.innerHTML),
        dNUM = parseInt(d.innerHTML);
    
    var key = event.keyCode;
    
    if(key == 119){
        wNUM = wNUM + 1;
        w.innerHTML = wNUM;
        posY = posY - 2;
    } else if(key == 97){
        aNUM = aNUM + 1;
        a.innerHTML = aNUM;
        posX = posX - 2;
    } else if(key == 115){
        sNUM = sNUM + 1;
        s.innerHTML = sNUM;
        posY = posY + 2;
    } else if(key == 100){
        dNUM = dNUM + 1;
        d.innerHTML = dNUM;
        posX = posX + 2;
    }else if(key == 32){
        if(draw === true){
            draw = false;
            drawText.innerHTML = false;
        }else if(draw === false){
            draw = true;
            drawText.innerHTML = true;
        }
    }

positionX.innerHTML = posX;
positionY.innerHTML = posY;

point();    
}

function point(){
    if(draw === true){
        ctx.beginPath();
        ctx.arc(posX, posY, 1, 0, 2*Math.PI);
        ctx.stroke();
    }
    canvas2.width = canvas2.width;
    ctx2.beginPath();
    ctx2.arc(posX, posY, 1, 0, 2*Math.PI);
    ctx2.stroke();
}
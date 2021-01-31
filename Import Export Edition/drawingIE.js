// Project created by ferrandusqui31

// Variables
const drawText = document.getElementById('drawing');
const canvas = document.getElementById('canvas');
const canvas2 = document.getElementById('canvas2');
const canvas3 = document.getElementById('canvas3');
const mixCanvas = document.getElementById('mixCanvas');
const posXText = document.getElementById('positionX');
const posYText = document.getElementById('positionY');
const ctx = canvas.getContext('2d');
const ctx2 = canvas2.getContext('2d');
const ctx3 = canvas3.getContext('2d');
const ctxMix = mixCanvas.getContext('2d');
var posX = 150;
var posY = 75;
var draw = false;
const inputFile = document.getElementById('file');
const clear = document.getElementById('clear');
var clearIMG = document.getElementById('clearIMG');
var downloadBtn = document.getElementById('download');
var imgConverted = document.getElementById('imgConverted');
const infoIcon = document.getElementById('infoIcon');
const infoCross = document.getElementById('infoCross');
const infoContainer = document.getElementById('infoContainer');

// Initial cursor draws
ctx2.beginPath();
ctx2.arc(posX, posY, 1, 0, 2*Math.PI);
ctx2.stroke();
ctx2.beginPath();
ctx2.arc(posX, posY, 1, 0, 2*Math.PI);
ctx2.stroke();
ctx2.beginPath();
ctx2.arc(posX, posY, 1, 0, 2*Math.PI);
ctx2.stroke();

// Event Listeners
window.addEventListener('keypress', getKey);
inputFile.addEventListener('change', displayImage);
clear.addEventListener('click', function(){canvas.width = canvas.width;});
clearIMG.addEventListener('click', funcClearIMG);
downloadBtn.addEventListener('click', download);
infoIcon.addEventListener('click', function(){
    infoContainer.classList.remove('hide');
});
infoCross.addEventListener('click', function(){
    infoContainer.classList.add('hide');
});

function download(){
    // // Create Image
    
    var dataURI = canvas3.toDataURL();
    imgConverted.src = dataURI;
    
    
    setTimeout(step2, 1);
    setTimeout(step3, 2);
    setTimeout(stepDownload, 3);
    
    function step2(){
        ctxMix.drawImage(imgConverted, 0, 0, 300, 150);
        dataURI = canvas.toDataURL();
        imgConverted.src = dataURI;
        
    }
    
    function step3(){
        ctxMix.drawImage(imgConverted, 0, 0, 300, 150);
        dataURI = mixCanvas.toDataURL();
        imgConverted.src = dataURI;
    }
    // Download Image
    
    function stepDownload(){
        const a = document.createElement('a');
        
        document.body.appendChild(a);
        a.href = mixCanvas.toDataURL();
        setTimeout(function(){
            a.download = 'Draw-download.png';
            a.click();
            document.body.removeChild(a);
        }, 1);
        
    }
}

function funcClearIMG(){
    var beforeCanvas = document.getElementById('canvas3');
    var afterCanvas = document.createElement('canvas');
    const parent = document.getElementById('canvas-group');
    
    afterCanvas.setAttribute('class', 'canvasElement');
    afterCanvas.setAttribute('id', 'canvas3');
    
    parent.replaceChild(afterCanvas, beforeCanvas);
}

function displayImage(){
  var preview = document.querySelector('img');
  var file    = document.querySelector('input[type=file]').files[0];
  var reader  = new FileReader();
  var img = document.getElementById('img');

  reader.onloadend = function () {
        preview.src = reader.result;
    };

    if(file){
        reader.readAsDataURL(file);
    }else {
        preview.src = "";
        ctx3 = null;
    }
    
    var interval = setInterval(function(){
        ctx3.drawImage(img, 0, 0, 300, 150);
    }, 1);
}

function getKey(event){
    var key = event.keyCode;
    
    switch(key){
        case 119:
            reviseCoord('y', 'substract');
            break;
        case 97:
            reviseCoord('x', 'substract');
            break;
        case 115:
            reviseCoord('y', 'add');
            break;
        case 100:
            reviseCoord('x', 'add');
            break;
        case 32:
            if(draw === true){
                draw = false;
                drawText.innerHTML = 'Not Drawing';
                drawText.classList.add('drawing--no');
                drawText.classList.remove('drawing--yes');
            }else if(draw === false){
                draw = true;
                drawText.innerHTML = 'Drawing';
                drawText.classList.add('drawing--yes');
                drawText.classList.remove('drawing--no');
            }
    }

function reviseCoord(shaft, action){
    if(shaft === 'x'){
        if(posX < 0){
            posX = 2;
        } else if(posX > 300){
            posX = 298;
        } else{
            if(action === 'add'){
                posX = posX + 2;
            } else if(action === 'substract'){
                posX = posX - 2;
            }
        }
    } else if(shaft === 'y'){
        if(posY < 0){
            posY = 2;
        } else if(posY > 150){
            posY = 148;
        } else{
            if(action === 'add'){
                posY = posY + 2;
            } else if(action === 'substract'){
                posY = posY - 2;
            }
        }
    }
}

positionX.innerHTML = posX;
positionY.innerHTML = posY;

// Drawing in cordinates
if(draw === true){
        ctx.beginPath();
        ctx.arc(posX, posY, 1, 0, 2*Math.PI);
        ctx.stroke();
        ctx.beginPath();
        ctx.arc(posX, posY, 1, 0, 2*Math.PI);
        ctx.stroke();
        ctx.beginPath();
        ctx.arc(posX, posY, 1, 0, 2*Math.PI);
        ctx.stroke();
    }
    canvas2.width = canvas2.width;
    ctx2.beginPath();
    ctx2.arc(posX, posY, 1, 0, 2*Math.PI);
    ctx2.stroke();
    ctx2.beginPath();
    ctx2.arc(posX, posY, 1, 0, 2*Math.PI);
    ctx2.stroke();
    ctx2.beginPath();
    ctx2.arc(posX, posY, 1, 0, 2*Math.PI);
    ctx2.stroke();
}

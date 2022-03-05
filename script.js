var boxes = document.querySelectorAll('.card');
var s = document.querySelector('.rgbspan');
var colors = generateRandomColor(6);
var pickedColor = colors[Math.floor(Math.random() * 6)];  
s.textContent = pickedColor; 
var playagainbtn = document.querySelector('#playagainbtn');
var easybtn = document.querySelector('#easybtn');
var hardbtn = document.querySelector('#hardbtn');
var boxCount;
var statusText = document.querySelector('.status');
statusText.textContent = "Let's Play";


easybtn.addEventListener('click', function () {
document.querySelector('h1').style.background = '#023047';
statusText.textContent = "Let's Play";
boxCount =  3;
this.style.background = '#023047';
this.style.color = 'white';
hardbtn.style.background = 'white';
hardbtn.style.color = '#023047';
colors = generateRandomColor(boxCount);
pickedColor = colors[Math.floor(Math.random() * 3)];
s.textContent = pickedColor;

for(var i = 0; i < boxes.length; i++) {
if (colors[i]) {
    boxes[i].style.background = colors[i];  
}
else{
    boxes[i].style.display = 'none';
}
}
});


hardbtn.addEventListener('click', function(){
document.querySelector('h1').style.background = '#023047';
statusText.textContent = "Let's Play";
this.style.background = '#023047';
this.style.color = 'white';
easybtn.style.background = 'white';
easybtn.style.color = '#023047';
boxCount = 6;
colors = generateRandomColor(boxCount);
pickedColor = colors[Math.floor(Math.random() * 6)];

for(var i = 0; i< boxes.length; i++) {
boxes[i].style.background = colors[i];
boxes[i].style.display = 'block' ;

}
});


playagainbtn.addEventListener('click', function(){
    document.querySelector('h1').style.background = '#023047';
    statusText.textContent = "Let's Play";
    colors = generateRandomColor(boxCount);
    pickedColor = colors[Math.floor(Math.random() * boxCount)];
    s.textContent = pickedColor;
    for (var i = 0; i<boxes.length; i++) {
boxes[i].style.background = colors[i];
    }
});

for (var i = 0; i< colors.length; i++) {
boxes[i].style.background = colors[i];
boxes[i].addEventListener('click', function() {
 var selectedColor = this.style.background;
 if(selectedColor === pickedColor) {
    for (var i = 0; i < colors.length; i++) {
        boxes[i].style.background = pickedColor;
    }
   document.querySelector('h1').style.background = pickedColor;
   statusText.textContent = 'correct!!';  
 } else {
    this.style.background = '#023047';
    statusText.textContent = 'Try Again!';
 }



  });
 }




function generateRandomColor(num) {
 var arr= [];
 for (var i = 0; i< num; i++) {
     arr.push(randomColor());
 }
 return arr;
}
function randomColor() {
var r = Math.floor(Math.random() * 256);
var g = Math.floor(Math.random() * 256);
var b = Math.floor(Math.random() * 256);
 return 'rgb(' + r + ', ' + g + ', ' + b + ')';
}
const button1 = document.querySelector('.box1')
const button2 = document.querySelector('.box2')
const button3 = document.querySelector('.box3')
const button4 = document.querySelector('.box4')
const button5 = document.querySelector('.box5')
const button6 = document.querySelector('.box6')
const button7 = document.querySelector('.box7')
const button8 = document.querySelector('.box8')
const button9 = document.querySelector('.box9')


var counter = 0;

function endgame(){
    alert("Game Over!");
    window.location.reload();
}

button1.onclick = function(){
    counter = counter + 1;
    button1.onclick = false;
    console.log(counter);
    if(counter == 9){
        endgame();
    }
}
button2.onclick = function(){
    counter = counter + 1;
    button2.onclick = false;
    console.log(counter);
    if(counter == 9){
        endgame();
    }
}
button3.onclick = function(){
    counter = counter + 1;
    button3.onclick = false;
    console.log(counter);
    if(counter == 9){
        endgame();
    }
}
button4.onclick = function(){
    counter = counter + 1;
    button4.onclick = false;
    console.log(counter);
    if(counter == 9){
        endgame();
    }
}
button5.onclick = function(){
    counter = counter + 1;
    button5.onclick = false;
    console.log(counter);
    if(counter == 9){
        endgame();
    }
}
button6.onclick = function(){
    counter = counter + 1;
    button6.onclick = false;
    console.log(counter);
    if(counter == 9){
        endgame();
    }
}
button7.onclick = function(){
    counter = counter + 1;
    button7.onclick = false;
    console.log(counter);
    if(counter == 9){
        endgame();
    }
}
button8.onclick = function(){
    counter = counter + 1;
    button8.onclick = false;
    console.log(counter);
    if(counter == 9){
        endgame();
    }
}
button9.onclick = function(){
    counter = counter + 1;
    button9.onclick = false;
    console.log(counter);
    if(counter == 9){
        endgame();
    }
}

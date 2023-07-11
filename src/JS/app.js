var clicked1 = document.querySelector('#clicked1');
var clicked2 = document.querySelector('#clicked2');
var clicked3 = document.querySelector('#clicked3');
var clicked4 = document.querySelector('#clicked4');
var clicked5 = document.querySelector('#clicked5');
var clicked6 = document.querySelector('#clicked6');
var sub = document.querySelector('#sub');

console.log(clicked6);

function onHandleClick(){
    const change = prompt("이름을 입력해주세요");
    clicked6.innerText=change+"님 환영합니다."; 
    change
    console.log("작동됨");
}


clicked6.addEventListener("click", onHandleClick);


var now_1 = 1  
var now_2 = 1   
var now_3 = 1   
var now_4 = 1   
var now_5 = 1    
var now_6 = 1  

clicked1.onclick = function(){
    if(now_1== 1){
        clicked1.style.backgroundColor = "red";
        now_1 = 0;
    }
    else{
        clicked1.style.backgroundColor = "#e0e0e0";
        now_1 = 1;
    }
    }

clicked2.onclick = function(){
    if(now_2== 1){
        clicked2.style.backgroundColor = "red";
        now_2 = 0;
    }
    else{
        clicked2.style.backgroundColor = "#e0e0e0";
        now_2 = 1;
    }
    }
clicked3.onclick = function(){
    if(now_3== 1){
        clicked3.style.backgroundColor = "red";
        now_3 = 0;
    }
    else{
        clicked3.style.backgroundColor = "#e0e0e0";
        now_3 = 1;
    }
    }

clicked4.onclick = function(){
    if(now_4== 1){
        clicked4.style.backgroundColor = "red";
        now_4 = 0;
    }
    else{
        clicked4.style.backgroundColor = "#e0e0e0";
        now_4 = 1;
    }
    }

clicked5.onclick = function(){
    if(now_5== 1){
        clicked5.style.backgroundColor = "red";
        now_5 = 0;
    }
    else{
        clicked5.style.backgroundColor = "#e0e0e0";
        now_5 = 1;
    }
    }
sub.onclick = function(){
    if(now_6== 1){
        sub.style.backgroundColor = "red";
        sub.innerText = "구독중"
        now_6 = 0;
    }
    else{
        sub.style.backgroundColor = "#e0e0e0";
        sub.innerText = "구독"

        now_6 = 1;
    }
    }

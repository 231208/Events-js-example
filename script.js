document.getElementById('btn').addEventListener("click", fun);
function fun() {
    document.getElementById('demo').innerHTML = "hello world" + "<br>" + "This is ClickEvent Work here";}

//This is an example of adding multiple events to see the same element.
function fun() {
    alert("Welcome to the OnClick_function");
}

function fun1(){
    document.getElementById("mypara1").innerHTML = "This is Second Function"
}

function fun2() {
    document.getElementById("mypara2").innerHTML = "This is Third Function"
}

let mybtn = document.getElementById("mybtn")
mybtn.addEventListener("click", fun);
mybtn.addEventListener("click",fun1);
mybtn.addEventListener("click",fun2);


//This is Change the style Btn

function changer() {
    stylebtn.style.width = "50px";
    stylebtn.style.hight = "50px";
    stylebtn.style.background = "yellow";
    stylebtn.style.color = "black";
}

function changer1() {
    document.getElementById("changepara").innerHTML = "This is second function"
}

let stylebtn = document.getElementById("stylebtn");

stylebtn.addEventListener("mouseover",changer);
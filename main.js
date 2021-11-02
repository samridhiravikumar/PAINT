var mouseEvent = "empty";
var lpx, lpy;
var cpx, cpy;
canvas = document.getElementById("mycanvas");
ctx = canvas.getContext("2d");
color = "black";
width = 10;
var color;
var width_of_line;
var radius;

canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown() {
    color=document.getElementById("color1").value;
    width_of_line=document.getElementById("WidthOfLine1").value;
    radius=document.getElementById("radius1").value;
    mouseEvent="mouseDown";
}
canvas.addEventListener("mouseUp", my_mouseUp);
function my_mouseUp() {
    mouseEvent = "mouseUp";
}
canvas.addEventListener("mouseleave", my_mouseleave);
function my_mouseleave() {
    mouseEvent = "mouseleave";
}
canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(e) {
    cpx = e.clientX - canvas.offsetLeft;
    cpy = e.clientY - canvas.offsetTop;
    if (mouseEvent == "mouseDown") 
        console.log("current position of x and y =");
        console.log("x = " + cpx + "y = " + cpy);
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;
        ctx.arc(cpx, cpy,radius,0,2 * Math.PI);
        ctx.stroke();
}
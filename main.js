var mevent = "";
l_p_x = 0;
l_p_y = 0;

canvas = document.getElementById('miCanvas');
ctx = canvas.getContext("2d");

var color = "black";
var lw = 3;

canvas.addEventListener("mousedown", mymdown);

function mymdown(e){

    mevent = "mousedown";

    color = document.getElementById('colour').value;
    lw = document.getElementById('lnwd').value;

}

//over half//
//main part of today's class//
canvas.addEventListener("mousemove", mymmove);

function mymmove(e){

    c_x = e.clientX - canvas.offsetLeft;
    c_y = e.clientY - canvas.offsetTop;

    if(mevent === "mousedown"){

        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = lw;
        
        
        ctx.arc(c_x, c_y, 40, 0, 2*Math.PI);
        ctx.stroke();



    }

    l_p_x = c_x;
    l_p_y = c_y;

}

canvas.addEventListener("mouseup", mymup);
canvas.addEventListener("mouseleave", mymleave);
function mymup(e){

    mevent = "mouseup";


}
function mymleave(e){

    mevent = "mouseLeave";


}

function clearit(){
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}


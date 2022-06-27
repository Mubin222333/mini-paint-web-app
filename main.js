    //Create "mouseEvent" variable and set it as “Empty”.
    mouseEvent = "Empty"
    //Create two variables "last_position_of_x" and  "last_position_of_y".
var last_position_of_x
var last_position_of_y;

    canvas = document.getElementById('myCanvas');
    ctx = canvas.getContext("2d");
    
    //Define two variables color and width_of_line and assign values.
    

    canvas.addEventListener("mousedown", my_mousedown);

    function my_mousedown(e)
    {
      color = document.getElementById("color").value;
       width_of_line = document.getElementById("width_of_line").value;

        mouseEvent = "mouseDown";
    }

    //Create the addEventListener() function for mouseup(). 
canvas.addEventListener("mouseleave",my_mouseleave);
function my_mouseleave(e){
    mouseEvent = "mouseleave"
}

canvas.addEventListener("mouseup",my_mouseup);
function my_mouseup(e){
    mouseEvent = "mouseUp"
}
canvas.addEventListener("mousemove",my_mousemove)
    function my_mousemove(e)
    {
        current_position_of_mouse_x = e.clientX - canvas.offsetLeft;
        current_position_of_mouse_y = e.clientY - canvas.offsetTop;

if(mouseEvent == "mouseDown"){
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = width_of_line;
    console.log("Last position of x and y cordinates =");
    console.log("x = "+last_position_of_x+"  "+"y = "+last_position_of_y)
    ctx.moveTo(last_position_of_x,last_position_of_y)
    console.log("Current position of x and y cordinates =");
    console.log("x = "+current_position_of_mouse_x+"  "+"y = "+current_position_of_mouse_y)
    ctx.lineTo(current_position_of_mouse_x,current_position_of_mouse_y);
    ctx.stroke();
}
        last_position_of_x = current_position_of_mouse_x; 
        last_position_of_y = current_position_of_mouse_y;
    }


//Additional Activity
function clearArea() {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}

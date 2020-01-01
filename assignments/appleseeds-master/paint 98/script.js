const painter={};

painter.color=["white", "black", "brown", "pink", 'purple', 'blue', 'lightblue', 'green', 'lightgreen', 'yellow', 'orange', 'red'];

painter.insertColors=()=>{

    for(const color of painter.color){
        var newElement =document.createElement('div');
        newElement.style.backgroundColor=color;
        document.querySelector("#colors").appendChild(newElement);
    }
}

painter.insertColors();

var my_canvas=document.querySelector("#paintboard");
var eraser = $("#white");
var flag=true;

painter.draw=()=>{

    if(flag){
    
    var newDot=document.createElement('div');
    document.body.appendChild(newDot);
    newDot.style.position="absolute";
    newDot.style.backgroundColor= "black"
    choosecolor= ()=>{
        if (eraser){
            newDot.style.backgroundColor= "white";
        } else{
            newDot.style.backgroundColor= "black"
            }
    }
    newDot.style.width="4px";
    newDot.style.height="4px";
    newDot.style.left=`${event.pageX}px`;
    newDot.style.top=`${event.pageY}px`;
    newDot.style.borderRadius = "50%"

    document.querySelector(".color").appendChild(newDot);
        }
    }

painter.stop=()=>{

flag=false;
}

painter.start=()=>{
    flag=true;

}
my_canvas.addEventListener('mousedown',()=>{my_canvas.addEventListener('mousemove', painter.draw)});
my_canvas.addEventListener('mousemove', painter.draw);
window.addEventListener('mouseup', painter.stop);
window.addEventListener('mousedown', painter.start);

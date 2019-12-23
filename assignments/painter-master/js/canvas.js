var myCanvas = document.querySelector(".canvas");
var point = document.querySelector(".point");
var submit = document.querySelector("#submit");
var color = document.querySelector(".colors");
var brush = document.querySelector(".brushes");
const painter = {};
painter.colors = ["palevioletred", "blue", "black", "green", "yellow", "red"];
painter.brushes = ["pencil", "brush", "eraser"];
painter.choosenColor = 'black';
painter.brush = "brush";
painter.widthPoint = "4px";
painter.hightPoint = "4px";


painter.start = () => {
    painter.insertColor();
    painter.insertBrush();
}
//Added the brushes
painter.insertBrush = () => {
    for (const brush of painter.brushes) {
        var newBrush = document.createElement('div');
        newBrush.classList.add("brush");
        newBrush.setAttribute("id", brush);
        document.querySelector(".brushes").appendChild(newBrush);
        var y = document.createTextNode(brush);
        newBrush.appendChild(y);
        console.log(newBrush);


    }
}

// Take brush
function takeBrush(event) {
    var divClicked = event.target;
    var choosenBrush = divClicked.id;
    console.log(choosenBrush);

    painter.brush = choosenBrush;

    if (painter.brush === "pencil") {
        painter.height = "1px";
        painter.width = "1px";

    }
    else if (painter.brush === "brush") {
        painter.height = "3px";
        painter.width = "3px";
    }
    else if (painter.brush === "eraser") {
        painter.choosenColor = 'white';
        painter.height = "10px";
        painter.width = "10px";
    }
}

//Added the colors
painter.insertColor = () => {
    for (const color of painter.colors) {
        var newColor = document.createElement('div');
        newColor.style.backgroundColor = color;
        newColor.classList.add("color");
        document.querySelector(".colors").appendChild(newColor);
    }
}

//Take color
function takeColor(event) {
    var divClicked = event.target;
    var choosenColor = divClicked.style.backgroundColor;
    painter.choosenColor = choosenColor;
}

//Paint function
function printss() {
    if (isMouseClick) {
        var xPosition = event.clientX;
        var yPosition = event.clientY;
        var point = document.createElement("div");
        point.classList.add("point");
        point.style.top = yPosition + 'px';
        point.style.left = xPosition + 'px';
        point.style.backgroundColor = painter.choosenColor;
        point.style.width = painter.width;
        point.style.height = painter.height;
        console.log(painter.choosenColor);
        myCanvas.appendChild(point);
    }

}
//change size function
function changeSize(event) {
    var newHeight = document.querySelector("#height").value;
    var newWidth = document.querySelector("#width").value;
    myCanvas.style.height = newHeight + 'px';
    myCanvas.style.width = newWidth + 'px';

}

painter.start();
var isMouseClick = false;

window.addEventListener('mouseup', () => {
    isMouseClick = false;
});
myCanvas.addEventListener('mousedown', () => {
    isMouseClick = true;
    myCanvas.addEventListener('mousemove', () => {
        printss();
    });
});
color.addEventListener('click', takeColor);
submit.addEventListener('click', changeSize);
brush.addEventListener('click', takeBrush);



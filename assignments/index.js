const paint = {};
paint.colors = ["black", "yellow", "green", "red", "blue"];
paint.currentColor = "black";
paint.correntTool = "pen";

var can = document.querySelector("#main");
var colors = document.querySelector("#colors");

// creating main div with css properties
var div = document.createElement("div");
div.style.width = "500px";
div.style.height = "500px";
div.style.background = "white";
div.style.color = "red";
div.style.border = "1px solid black";
div.style.position = "absolue";
div.innerHTML = "paint 95";
let x = document.getElementById("main").appendChild(div);

var flag = true;
paint.drawing = () => {
  console.log("hi");

  var newDiv = document.createElement("div");
  document.body.appendChild(newDiv);
  newDiv.style.position = "absolute";
  newDiv.style.left = `${event.pageX}px`;
  newDiv.style.top = `${event.pageY}px`;
  newDiv.style.backgroundColor = paint.currentColor;
  if (paint.currentTool == "pen") {
    newDiv.style.width = "2px";
    newDiv.style.height = "2px";
  } else if (paint.currentTool == "eraser") {
    newDiv.style.backgroundColor = "white";
    newDiv.style.width = "20px";
    newDiv.style.height = "20px";
  } else if (paint.currentTool == "brush") {
    newDiv.style.width = "10px";
    newDiv.style.height = "10px";
  }
};
paint.stop = () => {
  flag = false;
};

paint.start = () => {
  flag = true;
};

can.addEventListener("mousedown", () => {
  can.addEventListener("mousemove", paint.drawing);
});
window.addEventListener("mouseup", paint.stop);
window.addEventListener("mousedown", paint.start);

changeColor = () => {
  var temp = event.target;

  if (temp.id == "colors") {
    return;
  }
  paint.currentColor = temp.id;
};
colors.addEventListener("click", changeColor);

changeTool = () => {
  var temp = event.target;
  if (temp.id == "instruments") {
    return;
  }
  paint.currentTool = temp.id;
};
instruments.addEventListener("click", changeTool);

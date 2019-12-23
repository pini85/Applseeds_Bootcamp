const elem = document.querySelector(".canvas");
const colorWhite = document.querySelector(".white");
const pencil = document.querySelector("#pencil");
const line = document.querySelector("#line");
const colorBlack = document.querySelector("#black");
const colorRed = document.querySelector("#red");
const colorGreen = document.querySelector("#green");
const colorBlue = document.querySelector("#blue");
const colorPurple = document.querySelector("#purple");
const cleanScreen = document.querySelector("#screen");

elem.addEventListener("mousedown", point);
elem.addEventListener("mousemove", draw);
elem.addEventListener("mouseup", stopDraw);

let ifDown;

function point(event) {
  ifDown = true;
}
function draw(event) {
  if (ifDown == true) {
    console.log("draw");
    var rect = event.target.getBoundingClientRect();

    var x = event.clientX - rect.left - 2.5; // Get the horizontal coordinate
    var y = event.clientY - rect.top - 2.5; // Get the vertical coordinate

    var px = "px";

    var pixel = document.createElement("div");
    pixel.classList.add("pixel");
    pixel.style.top = y + px;
    pixel.style.left = x + px;
    pixel.style.backgroundColor = color;
    pixel.style.width = width;
    pixel.style.height = height;
    elem.appendChild(pixel);
  }
}
var color = "black";
var width;
var height;

colorWhite.addEventListener("click", white);
pencil.addEventListener("click", pencilDraw);
// brush.addEventListener ("click", brushDraw)
colorBlack.addEventListener("click", black);
colorRed.addEventListener("click", red((b = "hi")));
colorGreen.addEventListener("click", green);
colorBlue.addEventListener("click", blue);
colorPurple.addEventListener("click", purple);
cleanScreen.addEventListener("click", clean);

// brush.addEventListener ("click",linedraw)

function white() {
  color = "white";

  var divs = document.querySelectorAll(".pixel");
  for (const div of divs) {
    div.onmouseover = function() {
      if (ifDown == true) {
        this.style.backgroundColor = "white";
      }
    };
  }
}

function black() {
  color = "black";

  var divs = document.querySelectorAll(".pixel");
  for (const div of divs) {
    div.onmouseover = function() {
      if (ifDown == true) {
        this.style.backgroundColor = "black";
      }
    };
  }
}

function red(b) {
  console.log(b);
  color = "red";
  var divs = document.querySelectorAll(".pixel");
  for (const div of divs) {
    div.onmouseover = function() {
      if (ifDown == true) {
        console.log("helooooooo");

        this.style.backgroundColor = "red";
      }
    };
  }
}

function green() {
  color = "green";

  var divs = document.querySelectorAll(".pixel");
  for (const div of divs) {
    div.onmouseover = function() {
      if (ifDown == true) {
        this.style.backgroundColor = "green";
      }
    };
  }
}

function blue() {
  color = "blue";

  var divs = document.querySelectorAll(".pixel");
  for (const div of divs) {
    div.onmouseover = function() {
      if (ifDown == true) {
        this.style.backgroundColor = "blue";
      }
    };
  }
}

function purple() {
  color = "purple";

  var divs = document.querySelectorAll(".pixel");
  for (const div of divs) {
    div.onmouseover = function() {
      if (ifDown == true) {
        this.style.backgroundColor = "purple";
      }
    };
  }
}

function pencilDraw() {
  color = color;
  if ((color = "white")) {
    color = "black";
  }
  width = "5px";
  height = "5px";

  var divs = document.querySelectorAll(".pixel");
  for (const div of divs) {
    div.onmouseover = function() {
      if (ifDown == true) {
        this.style.backgroundColor = color;
        // this.style.width = '5px'
        // this.style.height = '5px'
      }
    };
  }
}

// function brushDraw() {

//         color = color;
//         width = "5px"
//         height = '5px'

//     var divs = document.querySelectorAll(".pixel")
//     for (const div of divs) {
//         div.onmouseover = function(){
//             if (ifDown == true) {
//         this.style.backgroundColor =color;
//         // this.style.width = '20px'
//         // this.style.height = '20px'
//         }
//     }
//     }
// };

function stopDraw(event) {
  ifDown = false;
}

function clean() {
  while (elem.firstChild) {
    elem.removeChild(elem.firstChild);
  }
}

//1 get the x y coordiantes from the eventlistener
//2 take those x y cooridantes and give it to your pixel top
line.addEventListener("click", lineTrue);
elem.addEventListener("mousedown", getXY);
// elem.addEventListener ("mouseup", getXY2)

let ifLine = false;

function lineTrue(event) {
  ifLine = true;
}

function linedraw(ax, ay, bx, by) {
  if (ifLine == true) {
    if (ay > by) {
      bx = ax + bx;
      ax = bx - ax;
      bx = bx - ax;
      by = ay + by;
      ay = by - ay;
      by = by - ay;
    }
    var calc = Math.atan((ay - by) / (bx - ax));
    calc = (calc * 180) / Math.PI;
    var length = Math.sqrt((ax - bx) * (ax - bx) + (ay - by) * (ay - by));
    elem.innerHTML +=
      "<div id='line' style='height:" +
      length +
      "px;width:5px;background-color:" +
      color +
      ";position:absolute;top:" +
      ay +
      "px;left:" +
      ax +
      "px;transform:rotate(" +
      calc +
      "deg);-ms-transform:rotate(" +
      calc +
      "deg);transform-origin:0% 0%;-moz-transform:rotate(" +
      calc +
      "deg);-moz-transform-origin:0% 0%;-webkit-transform:rotate(" +
      calc +
      "deg);-webkit-transform-origin:0% 0%;-o-transform:rotate(" +
      calc +
      "deg);-o-transform-origin:0% 0%;'></div>";
    ifLine = false;
  }
}
function getXY(event) {
  if (ifLine == true) {
    var rect = event.target.getBoundingClientRect();

    var x = event.clientX - rect.left; // Get the horizontal coordinate
    var y = event.clientY - rect.top; // Get the vertical coordinate

    elem.addEventListener("mouseup", getXY2);
    function getXY2(event) {
      var rect = event.target.getBoundingClientRect();

      var x2 = event.clientX - rect.left; // Get the horizontal coordinate
      var y2 = event.clientY - rect.top; // Get the vertical coordinate

      linedraw(x, y, x2, y2);
    }
  }
}

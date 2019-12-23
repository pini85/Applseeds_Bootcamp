var x = document.getElementById("container").addEventListener("mousemove", myPaint);
// function paintClic(){
    function myPaint(){
        var point= document.createElement("div");
        const coordinates= getXY();
        const x = coordinates[0];
        const y = coordinates[1];
        point.style.top=y+'px';
        point.style.left=x+'px';
        point.style.backgroundColor= "red";
        point.className="point"
        document.body.appendChild(point);
    
        console.log(getXY());
    }
// }
function getXY() {
    var arry = [event.clientX, event.clientY];
    return arry;
    console.log(x , y);
}
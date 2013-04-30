"use strict";

function drawCircle() {
    var canvas = document.getElementById('myCanvas');
    var context = canvas.getContext('2d');
    var centerX = canvas.width / 2;
    var centerY = canvas.height / 2;
    var radius = 70;

    context.beginPath();
    context.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
    context.fillStyle = 'green';
    context.fill();
    context.lineWidth = 5;
    context.strokeStyle = '#003300';
    context.stroke();
}

function drawSelectedPersonMarker(context, x, y) {          
    context.beginPath();
    context.arc(x, y, 10, 0, 2 * Math.PI, false);    
    context.lineWidth = 1;
    context.strokeStyle = "lime";
    context.stroke();
}

"use strict";

// create function that will draw the space invader profile pic from github

function drawInvader() {
    let canvas = document.querySelector("canvas");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    let context = canvas.getContext("2d");

    // Bckground
    context.beginPath();
    context.fillStyle = "black";
    context.rect(25, 25, 300, 300);
    context.fill();

    //space invader character
    context.beginPath();
    context.fillStyle = "lime";
    context.rect(50, 50, 250, 50);
    context.rect(50, 100, 50, 100);
    context.rect(150, 100, 50, 50);
    context.rect(250, 100, 50, 100);
    context.rect(100, 200, 150, 100);
    context.fill();

}

drawInvader();
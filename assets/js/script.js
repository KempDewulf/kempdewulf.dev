"use strict";

document.addEventListener("DOMContentLoaded", init);

function init() {
    progressAnimation();
    console.log("Hello world")
}

function progressAnimation() {
    let segment = document.querySelector("span");

    setInterval(function() {
        segment.innerHTML === "=" ? segment.innerHTML = "-" : segment.innerHTML = "="
    }, 500);
}
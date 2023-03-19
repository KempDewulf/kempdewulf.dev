"use strict";

document.addEventListener("DOMContentLoaded", init);

function init() {
    progressAnimation();
}

function progressAnimation() {
    let segment = document.querySelector("span");

    setInterval(function() {
        segment.innerText === "=" ? segment.innerText = "-" : segment.innerText = "="
    }, 500);
}
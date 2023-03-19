"use strict";

document.addEventListener("DOMContentLoaded", init);

function init() {
    progressAnimation();
}

function progressAnimation() {
    const $element = document.querySelector("span");

    setInterval(function() {
        if ($element.innerHTML === "=") {
            $element.innerHTML = "-";
        } else {
            $element.innerHTML = "="
        }
    }, 500);
}
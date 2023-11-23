"use strict";

document.addEventListener("DOMContentLoaded", init);

function init() {
    renderProgressBar()
    progressAnimation();
}

function renderProgressBar() {
    const progressBar = document.querySelector("#progress");
    const progress = getProgress();
    const filled = "=";
    const unFilled = "-";
    const segmentAmount = 21;
    const filledSegments = Math.round(21 * progress);
    const unFilledSegments = segmentAmount - filledSegments;
    progressBar.innerHTML = `Progress: [${filled.repeat(filledSegments - 1)}<span id="segment">=</span>${unFilled.repeat(unFilledSegments)}]
                 ${progress.toFixed(2) * 100 + "%"} | ETA: 2025 `;
}
    
    
    

function getProgress() {
    const start = new Date(2022, 8, 21).getTime();
    const now = new Date().getTime();
    const end = new Date(2025, 6, 31).getTime();
    return ((now - start) / (end - start));
}

function progressAnimation() {
    let segment = document.querySelector("#segment");

    setInterval(function() {
        segment.innerText === "=" ? segment.innerText = "-" : segment.innerText = "="
    }, 500);
}

"use strict";

document.addEventListener("DOMContentLoaded", init);

function init() {
    renderProgressBar()
}

function renderProgressBar() {
    const progressBar = document.querySelector("#progress");
    const progress = getProgress();
    const filled = "=";
    const unFilled = "-";
    const segmentAmount = 21;
    const filledSegments = Math.round(segmentAmount * progress);
    const unFilledSegments = segmentAmount - filledSegments;
    progressBar.innerHTML = `Progress: [${filled.repeat(filledSegments - 1)}<span id="segment">=</span>${unFilled.repeat(unFilledSegments)}]
                 ${(progress * 100).toFixed(2) + "%" } | ETA: Summer 2025 `;

    progressAnimation();
}
    
    
    

function getProgress() {
    const start = new Date(2022, 8, 21).getTime();
    const now = new Date().getTime();
    const end = new Date(2025, 5, 30).getTime();
    return (now - start) / (end - start);
}

function progressAnimation() {
    let segment = document.querySelector("#segment");

    if (!segment) return;
    
    setInterval(() => {
        segment.innerText = segment.innerText === "=" ? "-" : "=";
    }, 500);
}

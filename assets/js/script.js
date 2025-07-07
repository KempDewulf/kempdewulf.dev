"use strict";

document.addEventListener("DOMContentLoaded", init);

function init() {
    blinkingCursor();
    const consoleBody = document.querySelector(".console-body");

    document.addEventListener("keydown", (event) => {
        if (event.key.toLowerCase() === "y") {
            handleResponse();
        }
    });

    const yKey = document.querySelector(".y-key");
    if (yKey) {
        yKey.addEventListener("click", () => {
            handleResponse();
        });
    }

    document.addEventListener("keydown", (event) => {
        if (event.key.toLowerCase() === "n") {
            const consoleSection = document.querySelector(".console");
            consoleSection.style.display = "none";
        }
    });
}

function blinkingCursor() {
    const cursor = document.querySelector(".cursor");
    if (!cursor) return;

    setInterval(() => {
        cursor.style.opacity = cursor.style.opacity === "0" ? "1" : "0";
    }, 500);
}

function handleResponse() {
    const cursor = document.querySelector(".cursor");
    if (cursor) {
        cursor.style.display = "none";
    }

    const response = document.querySelector(".response");
    response.textContent = ">> [✓] Ready to contribute - Let's connect!";
    document.querySelector(".console-body").appendChild(response);
    
    const consoleBody = document.querySelector(".console-body");
    consoleBody.scrollTop = consoleBody.scrollHeight;

    window.open("https://www.linkedin.com/in/kempdewulf/", "_blank");
}
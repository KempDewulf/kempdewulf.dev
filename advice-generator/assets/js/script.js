"use strict";

document.addEventListener("DOMContentLoaded", init);

const API_URL = "https://api.adviceslip.com/advice";

function init() {
    let advice = document.querySelector("#advice");
    let adviceID = document.querySelector("#adviceID");
    let button = document.querySelector("button");
    getAdvice(advice, adviceID, button)
    document.querySelector("button").addEventListener("click", function () {
        getAdvice(advice, adviceID, button)});
}

function getAdvice(advice, adviceID, button) {
    fetch(API_URL, {cache: "no-cache"})
        .then(res => res.json())
        .then(data => {
            adviceID.innerText = data.slip.id;
            advice.innerText = "\"" + data.slip.advice + "\"";
        });
    
    button.disabled = true;
    
    setTimeout(function() {
        button.disabled = false;
    }, 1000);
}
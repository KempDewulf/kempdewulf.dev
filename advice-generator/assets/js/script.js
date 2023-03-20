"use strict";

document.addEventListener("DOMContentLoaded", init);

const API_URL = "https://api.adviceslip.com/advice";

function init() {
    getAdvice()
    document.querySelector("button").addEventListener("click", getAdvice)
}

function getAdvice() {
    let advice = document.querySelector("#advice");
    let adviceID = document.querySelector("#adviceID");
    let button = document.querySelector("button");
    
    fetch(API_URL)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            adviceID.innerText = data.slip.id;
            advice.innerText = "\"" + data.slip.advice + "\"";
        });
    
    button.disabled = true;
    
    setTimeout(function() {
        button.disabled = false;
    }, 2000)
}
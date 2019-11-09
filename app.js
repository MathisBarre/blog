"use strict"

const EltWhochangeBackground = document.querySelectorAll("[data-background]");
const background = document.getElementsByClassName("background")[0];
const body = document.getElementsByTagName("body")[0];

var prevLink;
for (let i = 0; i < EltWhochangeBackground.length; i++) {
    const element = EltWhochangeBackground[i];
    element.addEventListener("mouseover", function(e)  {
        e.stopPropagation();
        if (prevLink !== this) {
            let newBackground = this.dataset.background
            background.style.backgroundImage = `url("${ newBackground }.jpg")`
        }
        prevLink = this
        
    }, false)
}
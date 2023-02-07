import { gsap } from "gsap";
import { Timeline } from "gsap/gsap-core";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from 'split-type';

import { showSlides, currentSlide, plusSlides } from "./gallery";

// Html elements
const name = document.getElementById("name")
const surname = document.getElementById("surname")
const subtitle = document.getElementById("subtitle")
const workDivs = document.getElementsByClassName("work")
const nav = document.querySelector("nav")
const cursorBall = document.getElementById("cursor")
const starsWrapper = document.getElementsByClassName("stars-wrapper")
const workImages = document.getElementsByClassName("work-img")
// var canvas = document.getElementById("canvas"), 
//   ctx = canvas.getContext("2d"), mouseX, mouseY;

const budgetInput = document.getElementById("budget")
const budgetOutput = document.getElementById("budget-output")
const labels = document.getElementsByClassName("label")

const decorationDiv = document.getElementById("experiment-div")
const lines = document.getElementsByClassName("line-ex")
const path = document.querySelectorAll(".line-path")
// const canvas = document.getElementById("canvas") 
// const c = canvas.getContext("2d")
var mouseX
var mouseY
document.addEventListener("mousemove", (e) => {
  mouseX = e.clientX
  mouseY = e.clientY
})
// const rect = canvas.getBoundingClientRect();

// REVIEWS SLIDESHOW
const prevButtons = document.getElementsByClassName("prev")
const nextButtons = document.getElementsByClassName("next")

for (let i = 0; i < prevButtons.length; i++) {
  prevButtons[i].addEventListener("click", () =>{
    plusSlides(-1)
  })
  console.log("added");
}

for (let i = 0; i < nextButtons.length; i++) {
  nextButtons[i].addEventListener("click", () =>{
    plusSlides(1)
  })
  console.log("added");
}

// Stars
for (let i = 0; i < starsWrapper.length; i++) {
  const wrapper = starsWrapper[i];
  
  let stars = 5
  for (let i = 0; i < stars; i++) {
    let div = document.createElement("div")
    div.classList.add("star")
    wrapper.appendChild(div) 
    console.log("stars");
  }
  
}

// CANVAS ANIMATION
// canvas.addEventListener("click", () => {
//   const classList = canvas.classList
//   const elementClassList = classList[0]
//   console.log(classList);
//   if (elementClassList === "float-right") {
//     classList.add("float-left")
//     classList.remove("float-right")

//   } else {
//     classList.add("float-right")
//     classList.remove("float-left")
//   }
// })

// CANVAS LINES
// const sectionHeight = 18.3

// // resize the canvas to fill browser window dynamically
// window.addEventListener("resize", resizeCanvas, false);

// window.addEventListener(
//   "mousemove",
//   function(e) {
//     // add mouse effect
//     var rect = canvas.getBoundingClientRect();
//     mouseX = e.clientX - rect.left;
//     mouseY = e.clientY - rect.top;
//   },
//   false
// );

// function resizeCanvas() {
//   canvas.width = 385;
//   canvas.height = 385 / 1.618;

//   drawFrame();
// }
// resizeCanvas();

// function drawFrame() {
  
//   window.requestAnimationFrame(drawFrame, canvas);
//   ctx.clearRect(0, 0, canvas.width, canvas.height);
  
//     const isInsideX = 0 < mouseX && mouseX < canvas.width
//     const isInsideY = 0 < mouseY && mouseY < canvas.height
  
//     const midPointY = canvas.width / 2
//     const isAboveMid = mouseY < midPointY

//   //Create Bezier Curve
//   var startX = 0;
//   var endX = 385;


//   for (let i = 1; i <= 12; i++) {
//     var startY = sectionHeight * i;
//     var endY = sectionHeight * i;

//     if (isInsideX && isInsideY) {
//       let controlPtX1 = mouseX / 1.2
//       let controlPtX2 = mouseX * 1.2
//       let controlPtY1
//       let controlPtY2
//       let lineHeight = sectionHeight * i

//       let mouseYRelative = mouseY - lineHeight

//       controlPtY1 = lineHeight - 15 - (mouseYRelative / 4)
//       controlPtY2 = lineHeight + 15 + (mouseYRelative / 4)


//       //Calculate 1st Control Point
//       var controlPoint1X = Math.floor(controlPtX1);
//       var controlPoint1Y = Math.floor(controlPtY1);
      
//       //Calculate 2nd Control Point
//       var controlPoint2X = Math.floor(controlPtX2);
//       var controlPoint2Y = Math.floor(controlPtY2);  
      
//     } else {
//       //Calculate 1st Control Point
//       var controlPoint1X = 0;
//       var controlPoint1Y = sectionHeight * i;
      
//       //Calculate 2nd Control Point
//       var controlPoint2X = 385;
//       var controlPoint2Y = sectionHeight * i; 
//     }
  
    
//     ctx.beginPath();
//     ctx.strokeStyle = "white";
//     ctx.moveTo(startX, startY);
//     ctx.bezierCurveTo(
//       controlPoint1X,
//       controlPoint1Y,
//       controlPoint2X,
//       controlPoint2Y,
//       endX,
//       endY
//       );
//       ctx.lineWidth = 2
//       ctx.stroke();
//   }

// }

// Cursor
document.body.addEventListener("mousemove", (e) => {
  cursorBall.style.top = `${e.pageY}px`  
  cursorBall.style.left = `${e.pageX}px`  
})

// ANIMATIONS
gsap.registerPlugin(ScrollTrigger);

const splittedName = new SplitType(name)

// Home Loader
console.log("loader");
const timeline = new Timeline({ease: "power2.out"})

timeline.from(surname, {
  delay: 1,
  scale: 2.5, 
  duration: 2, 
})
.to(name, {
  y: 0,
  opacity: 1,
  duration: 1,
}, "home")
.to(subtitle, {
  x: 0,
  opacity: 1,
  duration: 1,
}, "home")
// .to(nav, {
//   y: 0,
//   opacity: 1,
//   duration: 1.5,
// })


// CONTACT FORM
// Animation

for (let i = 0; i < labels.length; i++) {
  const label = labels[i];
  label.addEventListener("focus", () => {
    if (label.className === "hidden-label") {
      label.classList.add("shown-label")
      label.classList.remove("hidden-label")
    } else if (label.className === "shown-label") {
      label.classList.add("hidden-label")
      label.classList.remove("shown-label")
    }

    console.log("focused");
  })
  
}

// Budget range
budgetInput.addEventListener("input", () => {
  budgetOutput.value = `€${budgetInput.value}`
}) 

// Add on Scroll  enty effect
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show")
    } else {
      entry.target.classList.remove("show")
    }
  })
})

const hiddenLeftElements = document.querySelectorAll(".hidden-left")
const hiddenRightElements = document.querySelectorAll(".hidden-right")

hiddenLeftElements.forEach((el) => {
  observer.observe(el)
})

hiddenRightElements.forEach((el) => {
  observer.observe(el)
})




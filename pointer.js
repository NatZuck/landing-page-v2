const bigBall = document.querySelector('.cursor__ball');
const smallBall = document.querySelector('.cursor__ball--small');
const hoverables = document.querySelectorAll('.hoverable');

// Listeners
document.body.addEventListener('mousemove', onMouseMove);
for (let i = 0; i < hoverables.length; i++) {
  hoverables[i].addEventListener('mouseenter', onMouseHover);
  hoverables[i].addEventListener('mouseleave', onMouseHoverOut);
}

// Move the cursor
function onMouseMove(e) {
  gsap.to(bigBall, {
    duration: .4,
    x: e.pageX - 15,
    y: e.pageY - 15
  })
  gsap.to(smallBall, {
    duration: 1,
    x: e.pageX - 5,
    y: e.pageY - 7
  })
}

// Hover an element
function onMouseHover() {
  gsap.to(bigBall,
    {
    duration: .3,
    scale: 4
  })
}
function onMouseHoverOut() {
  gsap.to(bigBall, {
    duration: .3,
    scale: 1
  })
}

export {
    onMouseMove, onMouseHoverOut, onMouseHover
}
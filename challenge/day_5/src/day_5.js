const orgWindow = window.innerWidth;
const midWindow = orgWindow + orgWindow / 2;

function changeWindowColor() {
  let nowWindow = window.innerWidth;
  if (nowWindow > midWindow) {
    document.body.style.background = "yellow";
  } else if (nowWindow > orgWindow && nowWindow < midWindow) {
    document.body.style.backgroundColor = "purple";
  } else {
    document.body.style.backgroundColor = "blue";
  }
}

window.addEventListener("resize", changeWindowColor);


// 정답

import "./styles.css";

const body = document.body;

const BIG_SCREEN = "bigScreen";
const MEDIUM_SCREEN = "mediumScreen";
const SMALL_SCREEN = "smallScreen";

function handleResize() {
  const width = window.innerWidth;
  if (width > 1000) {
    body.classList.add(BIG_SCREEN);
    body.classList.remove(MEDIUM_SCREEN);
  } else if (width <= 1140 && width >= 700) {
    body.classList.add(MEDIUM_SCREEN);
    body.classList.remove(BIG_SCREEN, SMALL_SCREEN);
  } else {
    body.classList.remove(MEDIUM_SCREEN);
    body.classList.add(SMALL_SCREEN);
  }
}

window.addEventListener("resize", handleResize);

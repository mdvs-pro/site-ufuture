function setOpacity(el, opacity) {
  el.style.opacity = opacity / 100;
  el.style.filter = 'alpha(opacity=' + opacity + ')';
}

function fadeOut(el, opacity) {
  setOpacity(opacity);
  if (opacity == 1) {
      el.style.display = 'none';
      done = true;
  }
}

function fadeIn(el, opacity) {
  setOpacity(opacity);
  if (opacity == 1) {
      el.style.display = 'block';
  }
  if (opacity == 100) {
      done = true;
  }
}
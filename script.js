// script to disable right click 
document.addEventListener("contextmenu", function (e) {
  e.preventDefault();
});
document.onkeydown = function (e) {
  if (event.keycode == 123) {
    return false;
  }
  if (e.ctrlKey && e.shiftKey && e.keyCode == "I".charCodeAt(0)) {
    return false;
  }
  if (e.ctrlKey && e.shiftKey && e.keyCode == "C".charCodeAt(0)) {
    return false;
  }
  if (e.ctrlKey && e.shiftKey && e.keyCode == "J".charCodeAt(0)) {
    return false;
  }
  if (e.ctrlKey && e.keyCode == "U".charCodeAt(0)) {
    return false;
  }
}


document.addEventListener("keydown", function (event) {
    if (
        event.key === "F12" ||
        (event.ctrlKey && event.shiftKey && ["I", "J", "C"].includes(event.key.toUpperCase())) ||
        (event.ctrlKey && event.key.toUpperCase() === "U")
    ) {
        event.preventDefault();
        event.stopPropagation();
    }
});


const btn1 = document.querySelector("#primaryDarkToggle");
const btn2 = document.querySelector("#secondaryDarkToggle");
const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
const currentTheme = localStorage.getItem("theme");
if (currentTheme == "dark") {
  document.body.classList.toggle("dark-theme");
} else if (currentTheme == "light") {
  document.body.classList.toggle("light-theme");
}
btn1.addEventListener("click", function() {
  if(document.getElementById("rotateCircle").style.rotate == "180deg") {
    document.getElementById("rotateCircle").style.rotate = "0deg";
  } else {
    document.getElementById("rotateCircle").style.rotate = "180deg";
  }


  if (prefersDarkScheme.matches) {
    document.body.classList.toggle("light-theme");
    var theme = document.body.classList.contains("light-theme") ? "light" : "dark";
  } else {
    document.body.classList.toggle("dark-theme");
    var theme = document.body.classList.contains("dark-theme") ? "dark" : "light";
  }
  localStorage.setItem("theme", theme);
});
btn2.addEventListener("click", function() {
  if(document.getElementById("secondaryRotateCircle").style.rotate == "180deg") {
    document.getElementById("secondaryRotateCircle").style.rotate = "0deg";
    document.getElementById("secondaryRotateCircle").style.filter = "invert(100%)";
  } else {
    document.getElementById("secondaryRotateCircle").style.rotate = "180deg";
    document.getElementById("secondaryRotateCircle").style.filter = "invert(0%)";
  }


  if (prefersDarkScheme.matches) {
    document.body.classList.toggle("light-theme");
    var theme = document.body.classList.contains("light-theme") ? "light" : "dark";
  } else {
    document.body.classList.toggle("dark-theme");
    var theme = document.body.classList.contains("dark-theme") ? "dark" : "light";
  }
  localStorage.setItem("theme", theme);
});
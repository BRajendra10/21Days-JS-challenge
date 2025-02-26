let btn = document.querySelector("#button");
let sun = document.querySelector("#sun");
let moon = document.querySelector("#moon");
let circle = document.querySelector(".circle");
let body = document.querySelector("body");

let mode = "light";

btn.addEventListener("click", () => {
    if(mode == "light") {
        mode = "dark";

        btn.style.padding = "5px 5px 5px 70px";
        btn.style.transition = "0.7s";
        btn.style.backgroundColor = "#333333";

        sun.style.display = "none";
        moon.style.display = "inline-block";

        circle.style.backgroundColor = "black";

        body.style.backgroundColor = "black";
    } else{
        mode = "light";

        btn.style.padding = "5px 70px 5px 5px";
        btn.style.transition = "0.7s";
        btn.style.backgroundColor = "#e6e6e6";

        sun.style.display = "inline-block";
        moon.style.display = "none";

        circle.style.backgroundColor = "white";

        moon.style.color = "white";

        body.style.backgroundColor = "white";
    }
});
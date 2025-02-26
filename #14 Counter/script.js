let count = document.querySelector("#count");
let btn = document.querySelectorAll(".btn");

let value = 0;

btn.forEach(function (item) {
    item.addEventListener("click", function (e){
        const styles = e.currentTarget.classList;

        if(styles.contains("decrease")) {
            value--;
        } else if(styles.contains("increase")) {
            value++;
        } else {
            value = 0;
        }

        if(value > 0) {
            count.style.color = "green";
        } else if( value < 0) {
            count.style.color = "red";
        } else {
            count.style.color = "black";
        }

        count.textContent = value;
    });
});
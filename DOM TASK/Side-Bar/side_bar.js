
let value = document.getElementById("open");
value.style.width = "100px"
value.style.height = "50px"
value.addEventListener("click", function (e) {
    if (value.textContent == "Close") {
        let select = document.querySelector(".side-bar");
        value.textContent = "Open";
        select.style.position = "absolute";
        select.style.left = "0px";
    } else {
        let select = document.querySelector(".side-bar");
        value.textContent = "Close";
        select.style.position = "absolute";
        select.style.left = "-200px";
    }
});
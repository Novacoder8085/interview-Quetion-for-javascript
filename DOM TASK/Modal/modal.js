let btn = document.getElementById('modal');
btn.addEventListener('click', function (e) {
    document.body.style.background = "#e5e5e5";
    if (btn.textContent == "Launch Modal") {
        btn.textContent = "Modal Launched"
        let launch = document.querySelector('.alert');
        launch.style.background = "#FFFFDB"
        launch.style.position = "relative"
        launch.style.top = "100px";
    } else {
        btn.textContent = "Launch Modal"
        let launch = document.querySelector('.alert');
        launch.style.position = "relative"
        launch.style.top = "-500px";

    }
})
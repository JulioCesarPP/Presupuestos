const body = document.querySelector("body"),
    sidebar = document.querySelector(".sidebar"),
    toggle = document.querySelector(".toggle"),
    modeSwitch = document.querySelector(".toggle-switch"),
    modeText = document.querySelector(".mode-text"),
    searchBtn = document.querySelector(".search-bar");

modeSwitch.addEventListener("click", () => {
    body.classList.toggle("dark");
    //   document.querySelector(".mode-text").innertext=""

    if (body.classList.contains("dark")) {
        modeText.innerText = " Modo Luz ";
    } else modeText.innerText = " Dark Mode ";
});

toggle.addEventListener("click", () => {
    sidebar.classList.toggle("close");
});

searchBtn.addEventListener("click", () => {
    sidebar.classList.remove("close");
});







//const body = document.querySelector("body"),
//    sidebar = document.querySelector(".sidebar"),
//    toggle = document.querySelector(".toggle"),
//    modeSwitch = document.querySelector(".toggle-switch"),
//    modeText = document.querySelector(".mode-text"),
//    searchBtn = document.querySelector(".search-bar");

//// Agregar la clase "close" al sidebar al iniciar la aplicación
//sidebar.classList.add("close");

//modeSwitch.addEventListener("click", () => {
//    body.classList.toggle("dark");

//    if (body.classList.contains("dark")) {
//        modeText.innerText = " Modo Luz ";
//    } else modeText.innerText = " Dark Mode ";
//});

//toggle.addEventListener("click", () => {
//    sidebar.classList.toggle("close");
//});

//searchBtn.addEventListener("click", () => {
//    sidebar.classList.remove("close");
//});
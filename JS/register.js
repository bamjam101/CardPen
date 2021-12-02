
function mainFunction() {
    const firstName = document.querySelector(".fname");
    const lastName = document.querySelector(".lname");
    const email = document.querySelector(".email");
    const status = document.querySelectorAll(".status");
    
    let formOne = document.querySelector(".form");
    let formTwo = document.querySelector(".formTwo");
    formOne.style.transform = "translateX(-25vh)";
    formOne.style.opacity = "0";
    formTwo.style.opacity = "1";
    formTwo.style.transform = "translateX(-28vh)";
}
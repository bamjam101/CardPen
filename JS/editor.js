let toggle=true;

function toggleNav() {

    const navbar = document.querySelector(".nav-bar");
    if(toggle==true) {
        navbar.style.transform = "translateY(0)";
        navbar.style.boxShadow = "0 0 10px #66fcf1";
        navbar.style.backgroundColor = "#1F2833";
        // toggle = false;
        // return;
    } else {
        navbar.style.transform = "translateY(-24vh)";
        toggle = true;
        return;
    }

    toggle = false;

}
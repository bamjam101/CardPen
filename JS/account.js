
function profile() {
    let profilePic = document.querySelector(".profilePic");
    let profileBox = document.querySelector(".profile");

    profileBox.style.height = "75vh";

    // profilePic.style.margin = "0";
    profilePic.style.zIndex = "1000";
    profilePic.style.transform = "translateX(32vw) translateY(5vh)";
    profilePic.style.width = "30vw";
    profilePic.style.height = "30vw";
    profilePic.style.borderRadius = "0%";
}

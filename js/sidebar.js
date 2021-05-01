function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("openSidebar").style.marginLeft = "250px";

    document.getElementById("openSidebar").style.visibility = "hidden";
}

function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("openSidebar").style.marginLeft = "0";

    document.getElementById("openSidebar").style.visibility = "visible";
}

if (document.URL.includes("index.html")) {
    document.getElementsByClassName('current').style.color = "red";
}

function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}
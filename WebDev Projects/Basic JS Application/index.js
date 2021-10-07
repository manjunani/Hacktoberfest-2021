const bulbImage = document.getElementById('bulbImage') ;
const catImage = document.getElementById('catImage') ;
const switchStatus =  document.getElementById("switchStatus");


function switchOff() {
    bulbImage.src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-off-img.png";
    catImage.src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-eyes-img.png";
    switchStatus.textContent = "Switched Off";
    document.getElementById("off").style.backgroundColor = "red";
}

function switchOn() {
    bulbImage.src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-on-img.png";
    catImage.src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-img.png";
    switchStatus.textContent = "Switched On";
    document.getElementById("on").style.backgroundColor = "green";
}
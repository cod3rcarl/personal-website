

/* (This code swaps the image on click instead of cyclying through the images)

let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'img/codercarl.png') {
      myImage.setAttribute('src','img/me-2.jpg');
    } else {
      myImage.setAttribute('src','img/codercarl.png');
    }
}*/


let picPath = ['img/title.jpg','img/tm.jpg','img/cake.png','img/fish.jpg'];
var Pic = -1;
//preload the images for smooth animation
var img1 = new Array();
for(i=0; i < picPath.length; i++) {
    img1[i] = new Image();
    img1[i].src = picPath[i];
}

function swapImage() {
    Pic = (++Pic > picPath.length-1)? 0 : Pic;
    imgCont.src = img1[Pic].src;
    setTimeout(swapImage,5000);
}

window.onload=function() {
    imgCont = document.getElementById('interests-photo');
    swapImage();
}






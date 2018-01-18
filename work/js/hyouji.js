


function setRandomLeft(imageWidth) {
    return (Math.random() * (document.getElementById('hyouji').clientWidth - imageWidth)) + "px";
}

function setRandomTop(imageHeight) {
     return (Math.random() * (document.getElementById('hyouji').clientHeight - imageHeight)) + "px";
 }

function zaq() {
     document.getElementById('hyouji').innerHTML = "";
       var image = document.createElement("img");
     image.src = "./../img/click_item/kuppa.PNG";
     image.style.position = "absolute";
     image.style.top = setRandomTop("100");//画像の横の長さをsetRandomTopに。
     image.style.left = setRandomLeft("100");//画像の縦の長さをsetRandomLeftに。
     document.getElementById('hyouji').appendChild(image);
 });


 function displayImage_createElement() {
     var o = document.createElement("img");
     o.setAttribute("id", "btn");
     o.setAttribute("src", "./../img/click_item/iceFlower.PNG");
     document.getElementById("test").appendChild(o);
 }

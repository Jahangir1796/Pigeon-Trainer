let slideimg = document.getElementById("slideimg")
var images = new Array(
  "../img/back2.jpg",
  "../img/crownd.jpg",
  "../img/back.jpg"
);

let len = images.length;
let i = 0;
function slider(){
  if(i >len-1){
    i = 0;
  }
  slideimg.src = images[i];
  i++;
  setTimeout('slider()',10000);
}
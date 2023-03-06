
  //Caruosel

  const caruosel = document.querySelector(".caruosel");
  firstImg = caruosel.querySelectorAll(".caruosel img")[0];
  arrowIcons = document.querySelectorAll(".caruosel-wrapper i")

 
let isDragStart = false, prevPageX, prevScrollLeft;
let firstImgWidth = firstImg.clientWidth + 20; //getting first img width with margin

arrowIcons.forEach(icon => {
    icon.addEventListener("click", () => {
        //if icon clicked, reduce widt value from caruosel left - else add to it
     caruosel.scrollLeft += icon.id == "left" ? - firstImgWidth: firstImgWidth;
    });
});



const dragStart = (e) => {
    isDragStart=true;
    prevPageX= e.pageX;
    prevScrollLeft=caruosel.scrollLeft;
}

  const dragging = (e) => {
    if(!isDragStart) return;
    e.preventDefault();
    let positionDiff = e.pageX - prevPageX;
    caruosel.scrollLeft = prevScrollLeft - positionDiff;
  }


  const dragStop = () => {
    isDragStart=false;
  }


  caruosel.addEventListener("mousedown" , dragStart);
  caruosel.addEventListener("mousemove" , dragging);
  caruosel.addEventListener("mouseup" , dragStop);


  //sidebar background change

  var sidebar = document.getElementById("sidebar");
 
  var workBtn = document.getElementById("workBTN");


function changeBackground() {
  document.sidebar.style.background = "white";
}


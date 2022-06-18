let blink = document.getElementById("blink");
setInterval(function () {
  blink.style.opacity = (blink.style.opacity == 0 ? 1 : 0);
}, 500)

// for crauser part

let imag = document.getElementById("imge");
let buttons = document.getElementsByClassName("but");
let imgArr = ["https://images-static.nykaa.com/uploads/a3b68274-a5e5-44e9-984f-f5c69eee46c9.jpg?tr=w-1200,cm-pad_resize",
  "https://images-static.nykaa.com/uploads/0eaf59f6-efbe-4f8c-886b-64d60e94ea68.gif?tr=w-1200,cm-pad_resize",
  "https://images-static.nykaa.com/uploads/6c220042-b021-457b-bdd5-6acf1b8c56d1.jpg?tr=w-1200,cm-pad_resize",
  "https://images-static.nykaa.com/uploads/c6a622a9-935a-46a6-98ee-a8ab50e6f41d.jpg?tr=w-1200,cm-pad_resize",
  "https://images-static.nykaa.com/uploads/8f7e3fd2-bc1b-4944-ae18-fd028b44ac85.jpg?tr=w-1200,cm-pad_resize",
  "https://images-static.nykaa.com/uploads/526b6c16-dac6-4643-83d6-cfbf7ad1c4a0.jpg?tr=w-1200,cm-pad_resize"]

let imgNum = 0;
buttons[0].addEventListener("click", decfun);
function decfun() {
  if (imgNum === 0) {
    imgNum = (imgArr.length) - 1;
  }
  else {
    imgNum--;
  }
  imag.src = imgArr[imgNum];
}


buttons[1].addEventListener("click", incfun);
function incfun() {
  if (imgNum === imgArr.length - 1) {
    imgNum = 0
  }
  else {
    imgNum++;
  }
  imag.src = imgArr[imgNum];
}

setInterval(function () {
  incfun()
}, 1500)


      

      let str=localStorage.getItem("userNAMEE")||[];
      console.log(str)

      if(str.length>0)
      {
        document.getElementById("AccountUser").innerText=str
      }
      // else
      // {
      //   document.getElementById("AccountUser").innerText="Account"
      // }

      




// nazia part

let data = [
  {
    image_url:
      "https://images-static.nykaa.com/uploads/638b4d90-1629-417d-bd46-bbc1d7826b28.jpg?tr=w-600,cm-pad_resize",
    discount: "30% Off",
    name: "Salaon Smooth Hair At Home !",
    product_id: 101,
  },
  {
    image_url:
      "https://images-static.nykaa.com/uploads/7ba0c4b8-eac8-46ba-910c-bbb327dab24d.gif?tr=w-600,cm-pad_resize",
    discount: "30% Off",
    name: "Byu Makeup & Skin WorthRs.999 and Get Additional 5% Off",
    product_id: 102,
  },
  {
    image_url:
      "https://images-static.nykaa.com/uploads/48a19dea-cba4-4938-9ae6-722ea32c3520.jpg?tr=w-600,cm-pad_resize",
    discount: "Upto 35% Off",
    name: "Byu 2 get 1 on Lakme Nails!",
    product_id: 103,
  },
  {
    image_url:
      "https://images-static.nykaa.com/uploads/bc456ba7-caa3-4f57-acaa-ad58f14ee001.jpg?tr=w-600,cm-pad_resize",
    discount: "Upto 35% Off",
    name: "Celebrate Beauty In Equality with #MNYPRIDE",
    product_id: 104,
  },
  // 1-2 -3 4


  {
    image_url:
      "https://images-static.nykaa.com/uploads/51c59f3d-64eb-45dc-aaad-23228234271f.jpg?tr=w-600,cm-pad_resize",
    discount: "Get 4 Gifts",
    Name: "Get order on 3000",
    product_id: 105,
  },
  {
    image_url:
      "https://images-static.nykaa.com/uploads/7d4fabac-cc0a-4efa-a3ae-6a41052c18a9.jpg?tr=w-600,cm-pad_resize",
    discount: "The Oridinary has arived in  India",
    name: "Shop Best Seller starting at Rs.5000",
    product_id: 106,
  },
  {
    image_url:
      "https://images-static.nykaa.com/uploads/5231fd76-c138-47be-8d3f-4606193b6fae.jpg?tr=w-600,cm-pad_resize",
    discount: "Frangrances For Father's Day",
    name: "Upto 25% Off+ Gift with Purchases",
    product_id: 107,
  },
  {
    image_url:
      "https://images-static.nykaa.com/uploads/bc456ba7-caa3-4f57-acaa-ad58f14ee001.jpg?tr=w-600,cm-pad_resize",
    discount: "Upto 35% Off",
    name: "Celebrate Beauty In Equality with #MNYPRIDE",
    product_id: 108,
  },





];
// Calling funtion to show the products into the body 

// This Function show all the products in the body 

function display_data(data) {
  data.forEach(function (element) {


    let div = document.createElement("div");
    div.setAttribute("id", "card");

    let div2 = document.createElement("div");
    div2.setAttribute("id", "text")

    let image = document.createElement("img");
    image.setAttribute('src', element.image_url);
    image.addEventListener("click", myproducts)

    let disc = document.createElement("h3");
    disc.innerText = element.discount;
    disc.addEventListener("click", myproducts)


    let name = document.createElement("p");
    name.innerText = element.name;
    name.addEventListener("click", myproducts)


    div.append(image, disc, name);

    //div.append(div2);

    document.querySelector("#main").append(div);
  });
}
display_data(data);
//document.querySelector("#card").addEventListener("click",myproducts);

//myproducts();
function myproducts() {

  let str=localStorage.getItem("userNAMEE")||[];
  if(str.length>0)
  {
    window.location.href = "product.html"

    
  }

  else{
    alert("you need to Login First")
    window.location.href="signup.html"
  }
  


}





// aruns part

var carousel = document.querySelector(".carousel");
var carouselContent = document.querySelector(".carousel-content");
var slides = document.querySelectorAll(".slide");
var arrayOfSlides = Array.prototype.slice.call(slides);
var carouselDisplaying;
var screenSize;
setScreenSize();
var lengthOfSlide;

function addClone() {
  var lastSlide = carouselContent.lastElementChild.cloneNode(true);
  lastSlide.style.left = -lengthOfSlide + "px";
  carouselContent.insertBefore(lastSlide, carouselContent.firstChild);
}
// addClone();

function removeClone() {
  var firstSlide = carouselContent.firstElementChild;
  firstSlide.parentNode.removeChild(firstSlide);
}

function moveSlidesRight() {
  var slides = document.querySelectorAll(".slide");
  var slidesArray = Array.prototype.slice.call(slides);
  var width = 0;

  slidesArray.forEach(function (el, i) {
    el.style.left = width + "px";
    width += lengthOfSlide;
  });
  addClone();
}
moveSlidesRight();

function moveSlidesLeft() {
  var slides = document.querySelectorAll(".slide");
  var slidesArray = Array.prototype.slice.call(slides);
  slidesArray = slidesArray.reverse();
  var maxWidth = (slidesArray.length - 1) * lengthOfSlide;

  slidesArray.forEach(function (el, i) {
    maxWidth -= lengthOfSlide;
    el.style.left = maxWidth + "px";
  });
}

window.addEventListener("resize", setScreenSize);

function setScreenSize() {
  if (window.innerWidth >= 500) {
    carouselDisplaying = 2.25;
  } else if (window.innerWidth >= 300) {
    carouselDisplaying = 2;
  } else {
    carouselDisplaying = 1;
  }
  getScreenSize();
}

function getScreenSize() {
  var slides = document.querySelectorAll(".slide");
  var slidesArray = Array.prototype.slice.call(slides);
  lengthOfSlide = carousel.offsetWidth / carouselDisplaying;
  var initialWidth = -lengthOfSlide;
  slidesArray.forEach(function (el) {
    el.style.width = lengthOfSlide + "px";
    el.style.left = initialWidth + "px";
    initialWidth += lengthOfSlide;
  });
}

var rightNav = document.querySelector(".nav-right");
rightNav.addEventListener("click", moveLeft);

var moving = true;
function moveRight() {
  if (moving) {
    moving = false;
    var lastSlide = carouselContent.lastElementChild;
    lastSlide.parentNode.removeChild(lastSlide);
    carouselContent.insertBefore(lastSlide, carouselContent.firstChild);
    removeClone();
    var firstSlide = carouselContent.firstElementChild;
    firstSlide.addEventListener("transitionend", activateAgain);
    moveSlidesRight();
  }
}

function activateAgain() {
  var firstSlide = carouselContent.firstElementChild;
  moving = true;
  firstSlide.removeEventListener("transitionend", activateAgain);
}

var leftNav = document.querySelector(".nav-left");
leftNav.addEventListener("click", moveRight);

// var moveLeftAgain = true;

function moveLeft() {
  if (moving) {
    moving = false;
    removeClone();
    var firstSlide = carouselContent.firstElementChild;
    firstSlide.addEventListener("transitionend", replaceToEnd);
    moveSlidesLeft();
  }
}

function replaceToEnd() {
  var firstSlide = carouselContent.firstElementChild;
  firstSlide.parentNode.removeChild(firstSlide);
  carouselContent.appendChild(firstSlide);
  firstSlide.style.left = (arrayOfSlides.length - 1) * lengthOfSlide + "px";
  addClone();
  moving = true;
  firstSlide.removeEventListener("transitionend", replaceToEnd);
}

carouselContent.addEventListener("mousedown", seeMovement);

var initialX;
var initialPos;
function seeMovement(e) {
  initialX = e.clientX;
  getInitialPos();
  carouselContent.addEventListener("mousemove", slightMove);
  document.addEventListener("mouseup", moveBasedOnMouse);
}

function slightMove(e) {
  if (moving) {
    var movingX = e.clientX;
    var difference = initialX - movingX;
    if (Math.abs(difference) < lengthOfSlide / 4) {
      slightMoveSlides(difference);
    }
  }
}

function getInitialPos() {
  var slides = document.querySelectorAll(".slide");
  var slidesArray = Array.prototype.slice.call(slides);
  initialPos = [];
  slidesArray.forEach(function (el) {
    var left = Math.floor(parseInt(el.style.left.slice(0, -2)));
    initialPos.push(left);
  });
}

function slightMoveSlides(newX) {
  var slides = document.querySelectorAll(".slide");
  var slidesArray = Array.prototype.slice.call(slides);
  slidesArray.forEach(function (el, i) {
    var oldLeft = initialPos[i];
    el.style.left = oldLeft + newX + "px";
  });
}

function moveBasedOnMouse(e) {
  var finalX = e.clientX;
  if (initialX - finalX > 0) {
    moveRight();
  } else if (initialX - finalX < 0) {
    moveLeft();
  }
  document.removeEventListener("mouseup", moveBasedOnMouse);
  carouselContent.removeEventListener("mousemove", slightMove);
}

// akshay part

function likemeee() {
  window.location.href = "product.html"
}

document.querySelector("#cartlogo").addEventListener("click",cartfunction);

function cartfunction(){
  window.location.href="cart.html";

}
let product_data=[
    {
    
        image:
        "https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/5/3/539a903NYKAC00000160_1.jpg",
        name: "Nyka All day Matte Long Wear Liquid Foundation with Pump",
        mrp: "MRP :",
        price: 599,
        rating : "☆☆☆☆☆",
        id :"15"
    
    },
{
    image:
    "https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/4/5/45504c76902395803775_1.jpg",
    name: "Mayblee New York Color Sensational Ultimates Lipstic",
    mrp: "MRP :",
    price: 359,
    rating : "☆☆☆☆☆",
    id: "1"

},
{
    image:
    "https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/6/a/6a682f1KAYBE00000314_1.jpg",
    name: "Kay Beauty Lip & check Combo ",
    mrp: "MRP :",
    price: 1278,
    rating : "☆☆☆☆☆",
    id :"2"

},
{
    image:
    "https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/3/0/30079236_i_new_0__r1.jpg",
    name: "Mayblee New York The Clossal Volume Express Mascara",
    mrp: "MRP :",
    price: 299,
    rating : "☆☆☆☆☆",
    id :"3"

},
//1-2-3
{
    image:
    "https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/6/9/6902395685692.1.jpg",
    name: "Mayblee New York Color Sensational Ultimates Lipstic",
    mrp: "MRP :",
    price: 359,
    rating : "☆☆☆☆☆",
    id :"4"

},
{
    image:
    "https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/f/d/fd771ab6955818202891_1.jpg",
    name: "L'oreal Paris Revitalift Triple Action Day Cream ",
    mrp: "MRP : ",
    price: 977,
    rating : "☆☆☆☆☆",
    id :"5"

},
{
    image:
    "https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/e/8/e8aabd75060332321308.jpg",
    name: "Charote Tilbury Matte Revoluation",
    mrp: "MRP :",
    price: 3150,
    rating : "☆☆☆☆☆",
    id :"6"

},
//6
{
    image:
    "https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/b/8/b8b121clakme00000134_1.jpg",
    name: "Lakme 9 to 5 Vitamin c+ Face serum with 100% Real Kakdu",
    mrp: "MRP :",
    price: 524,    
    rating : "☆☆☆☆☆",
    id :"7"

},
{
    image:
    "https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/0/8/08195baLOREA00000247_1.jpg",
    name: "L'oreal Paris Extraordinary Oil Smooth Shampoo",
    mrp: "MRP :",
    price: 949,
    rating : "☆☆☆☆☆",
    id :"8"

},
{
    image:
    "https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/4/2/42d42608904330900172_2.jpg",
    name: "Kay Beauty Martteinee Matte Lip Caryon Lipstick",
    mrp: "MRP :",
    price: 599,
    rating : "☆☆☆☆☆",
    id :"9"

},
{
    
    image:
    "https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/8/9/8904330901629_1.jpg",
    name: "Kay Beauty Eye Shadow Palette",
    mrp: "MRP :",
    price: 1199,
    rating : "☆☆☆☆☆",
    id :"10"

},
//10
{
    image:
    "https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/d/0/d0a6bd75060332320356.jpg",
    name: "Charlotee Tilburu Luxry Palette",
    mrp: "MRP :",
    price: 4900,    
    rating : "☆☆☆☆☆",
    id :"11"

},
{
    image:
    "https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/5/b/5b24ab0thefa00000073_add1.jpg",
    name: "The Face Shop Go With The Glow Kit",
    mrp: "MRP :",
    price: 999,
    rating : "☆☆☆☆☆",
    id :"12"

},
{
    image:
    "https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/2/2/22080_h-8901030226601_1_2.jpg",
    name: "Lakme Face Sheel Blusher ",
    mrp: "MRP :",
    price: 361,
    rating : "☆☆☆☆☆",
    id :"13"

},
{
    
    image:
    "https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/2/3/23778_h-8901030586965.jpg",
    name: "Lakme Enrich Matte Lipstic",
    mrp: "MRP :",
    price: 295,
    rating : "☆☆☆☆☆",
    id :"14"

},



];


let data =  JSON.parse(localStorage.getItem("cartPage"))||[];

let productCont=document.querySelector(".products");

function display_product_data(product_data){
    productCont.innerHTML=""
    
    product_data.forEach(function (element){

 
    let div = document.createElement("div");
    div.setAttribute("id", "prd");

    
    let image = document.createElement("img");
    image.setAttribute('src', element.image);
    //image.addEventListener("click",myproducts)

    
    let name = document.createElement("p");
    name.innerText=element.name;
   // name.addEventListener("click",myproducts)

   let mrp = document.createElement("p");
   mrp.innerText = element.mrp;

    let price= document.createElement("p");
        price.innerText=element.price;

    let rating= document.createElement("p");
        rating.innerText=element.rating;

    let btn = document.createElement("button");
         btn.innerText= "Add To Bag";
         btn.setAttribute("id", "btn_cart")
         btn.addEventListener("click",function (){
           if( add_to_cart(element.id ===true)){
            console.log(element)
           data.push(element); 
           localStorage.setItem("cartPage",JSON.stringify(data));
                alert ("Added Sucessfully ");
            }
            else{
                alert("Already added in cart ");
            }
         })
           

        

    div.append(image,name,mrp,price,rating,btn);
    
  //document.querySelector(".products").append(div);
  productCont.append(div)
});
    }
    display_product_data(product_data);


// this comand is used to select the filter 

document.querySelector("#filter").addEventListener("change",changing);
let cartLS=JSON.parse(localStorage.getItem("cartPage")) || []

function changing(){
    let selected = document.querySelector("#filter").value;
   
    if(selected=="Name"){
        //console.log(selected)
        //console.log(product_data)
        product_data.sort(function(a,b){
            //console.log(a.name)
            if (a.name > b.name) {
              return 1;
            }
            if (a.name < b.name) {
              return -1;
            }
           return 0;
          })
       
        display_product_data(product_data);
    }
    if(selected=="Descending")
    {
        product_data.sort(function(a,b){
            if(a.price>b.price)return 1
            if(a.price<b.price)return -1
            return 0
        })
        display_product_data(product_data)
    }

    if(selected=="Asceneding")
    {
        product_data.sort(function(a,b){
            if(a.price>b.price)return -1
            if(a.price<b.price)return 1
            return 0
        })
        display_product_data(product_data)
    }

}

function add_to_cart(id){
    for(let i=0; i<cartLS.length; i++){
        if(cartLS[i].id === id){
            return false;
          }
        }
        return true; 
}



let blink=document.getElementById("blink");
    setInterval(function(){
        blink.style.opacity=(blink.style.opacity==0?1:0);
    },500)

    let blin=document.getElementById("allprod");
    setInterval(function(){
        blin.style.opacity=(blink.style.opacity==0?1:0);
    },200)




    
    let str=localStorage.getItem("userNAMEE")||[];
    console.log(str)

    if(str.length>0)
    {
      document.getElementById("AccountUser").innerText=str
    }


    document.querySelector("#cartlogo").addEventListener("click",cartfunction);

function cartfunction(){
  window.location.href="cart.html";

}
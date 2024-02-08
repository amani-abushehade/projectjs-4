let userInfo = document.querySelector("#user_info")
let userdata = document.querySelector("#user")
let links = document.querySelector("#links")
let logOut = document.querySelector(".logout")
let cart = document.querySelector(".cart")

if(localStorage.getItem("firstname")){
    links.style.display="none"
    userInfo.style.display="block"
    userdata.innerHTML="welcom"+ " 	&nbsp;" +localStorage.getItem("firstname")
    cart.style.display="flex"
}else{
    cart.remove()
}
logOut.addEventListener("click",function (){
    localStorage.removeItem("login");
    if( !(localStorage.getItem("login"))){
    userInfo.style.display="none"
    links.style.display="block"
    cart.style.display="none"}
    setTimeout(() => {
        window.location = "login.html";
    } , 1000)
})

// /////////////////////////////////////////////////////////////////////

let allProducts = document.querySelector(".prod")
let products =[
    {
        id:1,
        imageURL:"images/Arabiyat Oud Al Layl Eau De Parfum For Unisex, 100 ml.jpeg",
        productname:" Oud Al Layl 100 ml",
        Price: "50.0 ILS",
        Category: "Perfumes",
        quantity: 0, 
    },
    {
        id:2,
        imageURL:"images/SUNPROTECT DAILY FACE CREAM OIL CONTROL SPF 50+.webp",
        productname:" SUNPROTECT CREAM",
        Price: "65.0 ILS",
        Category: "Skin Care",
        quantity: 0, 
    },
    {
        id:3,
        imageURL:"images/Emami Cactus Oil 200ml.jpeg",
        productname:" Emami Cactus Oil 200ml",
        Price: "30.0 ILS",
        Category:"Hair Care",
        quantity: 0, 
    },
    {
        id:4,
        imageURL:"images/L'Oreal Paris Fine Flowers Cleansing Toner.jpeg",
        productname:"L'Oreal Cleansing Toner",
        Price: "30.0 ILS",
        Category: "Skin Care",
        quantity: 0, 
    },
    {
        id:5,
        imageURL:"images/Illicit by Aurora EDP 100ml.jpg",
        productname:" Illicit by Aurora EDP 100ml",
        Price: "300.0 ILS",
        Category: "Perfumes",
        quantity: 0, 
    },
    {
        id:6,
        imageURL:"images/Pantene Oil Replacement Milky Damaged Repair.jpeg",
        productname:" Pantene Oil Replacement",
        Price: "35.0 ILS",
        Category: "Hair Care",
        quantity: 0, 
    },
    {
        id:7,
        imageURL:"images/Facial Foam - Novaclear.jpeg",
        productname:" Facial Foam - Novaclear",
        Price: "70.0 ILS",
        Category: "Skin Care",
        quantity: 0, 
    },
    {
        id:8,
        imageURL:"images/REVUELE MISSION.jpeg",
        productname:"REVUELE MISSION",
        Price: "25.0 ILS",
        Category: "Hair Care",
        quantity: 0, 
    },
    {
        id:9,
        imageURL:"images/DIOR J'ADORE EDP INFINISSIME 100ML.jpeg",
        productname:" DIOR J'ADORE 100ML",
        Price: "550.0 ILS",
        Category: "Perfumes",
        quantity: 0, 
    }
]

function drawItem(){
    let y = products.map((item)=>{
        return`
        <div id="product-${item.id}"  class="card col-lg-4 col-md-6 col-sm-12 mb-2 item" >
          <img src="${item.imageURL}" class="card-img-top" alt="..." style="width: 100%; height: 320px;padding: 20px 10px;">
          <div class="card-body">
            <h5 id="productname" style="font-weight: bold; ">Product:${item.productname}</h5>
            <h5 id="productprice" style="font-weight: bold; ">Price:${item.Price}</h5>
            <h5 id="productcategory" style="font-weight: bold; ">Category:${item.Category}</h5>
            <div class="action" >
              <a href="javascript:void(0)" class="btn btn-primary" id="${item.id}" onClick="addToCart(${item.id})">Add To Cart</a>
              <a href="javascript:void(0)" class="btn btn-danger" id="${item.id}0"  style="display: none;" onClick="removeFromCart(${item.id})">Remove From Cart</a>

              <a href="javascript:void(0)"   onClick="favoriteitem(${item.id})"><i class="fas fa-heart" id="${item.id}00"></i></a>
            </div>
            
          </div>
        </div><!-- card -->
        `
    })
    allProducts.innerHTML=y.join('');}
drawItem()
///////////////////////////////////////////////////////////////////////////////
let selectType = document.querySelector(".selecttype")
let byName = document.querySelector("#byname")
let byCategory = document.querySelector("#bycategory")
let cartProductsDiv = document.querySelector(".cartproducts div")
let cartProducts = document.querySelector(".cartproducts")
let soppingCart = document.querySelector(".shoppingcart")
let numOfItem = document.querySelector("#numofitem")

let addedItem = localStorage.getItem("ProductsInCart") ? JSON.parse(localStorage.getItem("ProductsInCart")) : [];
let addedItemm = localStorage.getItem("ProductsInfav") ? JSON.parse(localStorage.getItem("ProductsInfav")) : [];


function addToCart(id){
if(localStorage.getItem("firstname") && localStorage.getItem("login")){
          let addBut = document.getElementById(id)
          let removeBut = document.getElementById(id+"0")
          let choosen = products.find((item)=>item.id === id)
          choosen.quantity++;
          cartProductsDiv.innerHTML += `<p  style="font-size: 18px; display: inline;">${choosen.productname}</p>
          <a href="javascript:void(0)" class="pluss"><i class="fas fa-plus text-success" onClick="plusBtn(${choosen.id})"></i></a>
          <a href="javascript:void(0)" class="minus"><i class="fas fa-minus text-danger" onClick="minusBtn(${choosen.id})"></i></a>
          <span id="quantity${choosen.id}">${choosen.quantity}</span>
          `
          removeBut.style.display="block"
          addBut.style.display="none"
          let cartProductsLength = document.querySelectorAll(".cartproducts div p")
          numOfItem.innerHTML = cartProductsLength.length;
          addedItem = [...addedItem , choosen]
          localStorage.setItem("ProductsInCart" , JSON.stringify(addedItem) )
        }else{
            window.location="login.html"
            
        }
}
function plusBtn(id) {
    let choosen = addedItem.find((item) => item.id === id);
    choosen.quantity++;
    let quantitySpan = document.getElementById(`quantity${id}`);
    if (quantitySpan) {
      quantitySpan.textContent = choosen.quantity;
    }
    let cartProductsLength = document.querySelectorAll(".cartproducts div p").length;
    numOfItem.innerHTML = cartProductsLength;
    localStorage.setItem("ProductsInCart", JSON.stringify(addedItem));
}
function minusBtn(id) {
    let choosen = addedItem.find((item) => item.id === id);
    if (choosen.quantity > 0) {
        choosen.quantity--;
        let quantitySpan = document.getElementById(`quantity${id}`);
        if (quantitySpan) {
            quantitySpan.textContent = choosen.quantity;
        }
        localStorage.setItem("ProductsInCart", JSON.stringify(addedItem));
        if (choosen.quantity === 0) {
            let cartItemElement = document.getElementById(`cartItem${id}`);
            if (cartItemElement) {
                cartItemElement.remove();
            }
            addedItem = addedItem.filter(item => item.id !== id);
            localStorage.setItem("ProductsInCart", JSON.stringify(addedItem));
            cartProductsDiv.innerHTML = addedItem.map(item => `<p  style="font-size: 18px; display: inline;">${item.productname}</p>
          <a href="javascript:void(0)" class="pluss"><i class="fas fa-plus text-success" onClick="plusBtn(${item.id})"></i></a>
          <a href="javascript:void(0)" class="minus"><i class="fas fa-minus text-danger" onClick="minusBtn(${item.id})"></i></a>
          <span id="quantity${item.id}">${item.quantity}</span>
          `).join('');
          let addBut = document.getElementById(id);
          let removeBut = document.getElementById(id + "0");
          removeBut.style.display = "none";
          addBut.style.display = "block";
          updateCartCount();
        } else {
            updateCartCount();
        }
    }
}

function updateCartCount() {
    let cartProductsLength = addedItem.length;
    numOfItem.innerHTML = cartProductsLength;
}

  
soppingCart.addEventListener("click",opencart)
var caretIcon = document.getElementById('caretIcon');

function opencart(){
    if(cartProductsDiv.innerHTML !=""){
        if(cartProducts.style.display=="block"){
            cartProducts.style.display="none"
            caretIcon.className = 'fas fa-caret-down ';
        }else{
            cartProducts.style.display="block"
            caretIcon.className = 'fas fa-caret-up';
        }

    }
}

function removeFromCart(id) {
    let addBut = document.getElementById(id);
    let removeBut = document.getElementById(id + "0");
    addedItem = addedItem.filter(item => item.id !== id);
    localStorage.setItem("ProductsInCart", JSON.stringify(addedItem));
    cartProductsDiv.innerHTML = addedItem.map(item => `<p style="font-size: 18px;">${item.productname}</p>`).join('');
    removeBut.style.display = "none";
    addBut.style.display = "block";
    let cartProductsLength = document.querySelectorAll(".cartproducts div p").length;
    numOfItem.innerHTML = cartProductsLength;
}
 
function favoriteitem(id) {
    if (localStorage.getItem("firstname") && localStorage.getItem("login")) {
        let favor = products.find((item) => item.id === id);
        let favBUT = document.getElementById(`${id}00`);
        let index = addedItemm.findIndex((item) => item.id === id);
        if (index !== -1) {
            addedItemm.splice(index, 1);
            favBUT.style.color = "rgb(220, 224, 238)";
        } else {
            addedItemm = [...addedItemm, favor];
            favBUT.style.color = "red";
        }
        localStorage.setItem("ProductsInfav", JSON.stringify(addedItemm));
    } else {
        window.location = "login.html";
    }
}


document.addEventListener("DOMContentLoaded", () => {
    if (addedItem && addedItem.length > 0 && localStorage.getItem("login")) {
        cartProductsDiv.innerHTML = addedItem.map(item => `<p  style="font-size: 18px; display: inline;">${item.productname}</p>
        <a href="javascript:void(0)" class="pluss"><i class="fas fa-plus text-success" onClick="plusBtn(${item.id})"></i></a>
        <a href="javascript:void(0)" class="minus"><i class="fas fa-minus text-danger" onClick="minusBtn(${item.id})"></i></a>
        <span id="quantity${item.id}">${item.quantity}</span>
        `).join('');
        addedItem.forEach(item => {
            let addBut = document.getElementById(item.id);
            let removeBut = document.getElementById(item.id + "0");
            removeBut.style.display = "block";
            addBut.style.display = "none";
        });
        let cartProductsLength = addedItem.length;
        numOfItem.innerHTML = cartProductsLength;
    }
    if (addedItemm && addedItemm.length > 0 && localStorage.getItem("login")) {
        addedItemm.forEach(item => {
            let favBUT = document.getElementById(`${item.id}00`);
            favBUT.style.color = "red";
        });
    }
    if( !(localStorage.getItem("login"))){
        userInfo.style.display="none"
        links.style.display="block"
        cart.style.display="none"
        localStorage.remove("ProductsInCart");
        localStorage.remove("ProductsInfav");

        
    }
})

let search = document.querySelector('.form-control');

search.addEventListener('keyup', () => {
    let searchValue = search.value.toLowerCase();
    products.forEach(item => {
        let productCard = document.getElementById(`product-${item.id}`);
        if (item.productname.toLowerCase().includes(searchValue) || item.Category.toLowerCase().includes(searchValue)) {
            productCard.style.display = 'block';
        } else {
            productCard.style.display = 'none';
        }
    });
});
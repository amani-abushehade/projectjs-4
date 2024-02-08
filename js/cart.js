let ProductsInCart = JSON.parse(localStorage.getItem("ProductsInCart"))
let allProducts = document.querySelector(".Productss")
let ProductsInFav = JSON.parse(localStorage.getItem("ProductsInfav"))
let allProductsFav = document.querySelector(".favproducts")
let totalPriceElement=document.getElementById('totalPrice')


if(ProductsInCart){
    drawCartProducts(ProductsInCart)
}

function drawCartProducts(products){
    let y = products.map((item) => {
        
        return `
        <div class="div1">
      <div class="img">
        <img src="${item.imageURL}" alt="" class="imgg">
      </div>
      <div class="content">
      <div class="h5">
        <h5 id="productname">Product:${item.productname}</h5>
        <h5 id="productprice">Price:${item.Price}</h5>
        <h5 id="productcategory">Category:${item.Category}</h5>
        </div>
        <div class="plus">
          <span>${item.quantity || 1}</span>
          <a href="javascript:void(0)" class="pluss"><i class="fas fa-plus text-success" onclick="plusBtn(${item.id})"></i></a>
          <a href="javascript:void(0)" class="minus"><i class="fas fa-minus text-danger" onclick="minusBtn(${item.id})"></i></a>
      </div>
      <button class="btn btn-danger" onclick="removeItems(${item.id})">Remove</button>

      </div>
      </div>
        `
    })
    allProducts.innerHTML=y.join('');
    let totalCartPrice = products.reduce((total, item) => total + (parseFloat(item.Price) * (item.quantity || 1)), 0);
    totalPriceElement.innerHTML = `Total Price: ${totalCartPrice.toFixed(2)} ILS`;
}

function removeItems(id) {
    let storedItems = JSON.parse(localStorage.getItem("ProductsInCart")) || [];
    let updatedItems = storedItems.filter(item => item.id !== id);
    localStorage.setItem("ProductsInCart", JSON.stringify(updatedItems));
    drawCartProducts(updatedItems);
}
function plusBtn(id) {
    let storedItems = JSON.parse(localStorage.getItem("ProductsInCart")) || [];
    let selectedItem = storedItems.find(item => item.id === id);
    if (selectedItem) {
        selectedItem.quantity += 1;
        localStorage.setItem("ProductsInCart", JSON.stringify(storedItems));

        drawCartProducts(storedItems);
    }
}
function minusBtn(id) {
    let storedItems = JSON.parse(localStorage.getItem("ProductsInCart")) || [];
    let selectedItem = storedItems.find(item => item.id === id);

    if (selectedItem) {
        selectedItem.quantity -= 1;
        if (selectedItem.quantity <= 0) {
            storedItems = storedItems.filter(item => item.id !== id);
        }
        localStorage.setItem("ProductsInCart", JSON.stringify(storedItems));
        drawCartProducts(storedItems);
    }
}

function drawfavProducts(products){
    let y = products.map((item) => {
        
        return `
        <div class="div2">
      <div class="imges">
        <img src="${item.imageURL}" alt="" class="imggg">
      </div>
      <br>
      <div class="content2">
      <div class="h5">
        <h5 id="productname">Product:${item.productname}</h5>
        <h5 id="productcategory">Category:${item.Category}</h5>
        </div>
        <div class="aa">
        <a href="javascript:void(0)"   onClick="favoriteitem(${item.id})"><i class="fas fa-heart" id="${item.id}00"></i></a>
        </div>

      </div>
      </div>
        `
    })
    allProductsFav.innerHTML=y.join('');}
    if(ProductsInFav){
        drawfavProducts(ProductsInFav)
    }
    function favoriteitem(id){
        let storedItems = JSON.parse(localStorage.getItem("ProductsInfav")) || [];
             storedItems = storedItems.filter(item => item.id !== id);
            localStorage.setItem("ProductsInfav", JSON.stringify(storedItems));
            drawfavProducts(storedItems);

    }
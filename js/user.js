let userInfo = document.querySelector("#user_info")
let userdata = document.querySelector("#user")
let links = document.querySelector("#links")
let logOut = document.querySelector(".logout")
let cart = document.querySelector(".cart")

if(localStorage.getItem("firstname")){
    links.remove()
    userInfo.style.display="block"
    cart.style.display="flex"
}else{
    cart.remove()
}
logOut.addEventListener("click",function (){
    localStorage.removeItem("login");
    setTimeout(() => {
        window.location = "login.html";
    } , 1500)
})

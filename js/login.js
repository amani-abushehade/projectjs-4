

let email = document.querySelector("#Email")
let password = document.querySelector("#Password")

let loginBtn = document.querySelector("#loginbtn")

let getEmail = localStorage.getItem("email")
let getPassword = localStorage.getItem("password")

loginBtn.addEventListener("click",function(e){
    e.preventDefault()

    if(email.value ===""||password.value ===""){
        alert("enter your data")
    }else{
        if(getEmail && getEmail.trim()=== email.value.trim() && getPassword && getPassword.trim()=== password.value.trim()){
            localStorage.setItem("login","true")
            setTimeout(() =>{
            window.location ="index.html"
            },1200)
    }else{
        alert("Email or password is incorrect")
    }}
})
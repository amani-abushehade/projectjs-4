
let firstname = document.querySelector("#firstname")
let lastname = document.querySelector("#lastname")
let email = document.querySelector("#Email")
let password = document.querySelector("#Password")

let registerBtn = document.querySelector("#registerbtn")

registerBtn.addEventListener("click",function(e){
    e.preventDefault()
    if(firstname.value===""||lastname.value===""||email.value===""||password.value===""){
        alert("please enter your data")
    }else{
        localStorage.setItem("firstname" ,firstname.value);
        localStorage.setItem("lastname" ,lastname.value);
        localStorage.setItem("email" ,email.value);
        localStorage.setItem("password" ,password.value);

        setTimeout(() =>{
            window.location ="login.html"
        },1200)
    }
})
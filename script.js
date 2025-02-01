"use strict"
const menuIcon = document.getElementById("menuicon")
const menu = document.getElementById("menu");

menuIcon.addEventListener("click", () =>{
    if(menu.className === "hidden"){
    menu.classList.remove("hidden")
    }else{
        menu.classList.add("hidden")
    }
})



const form = document.querySelector("form");
const names = form.querySelector("#name")
const email = form.querySelector("#email")
const messege = document.querySelector("#messege")

form.addEventListener("submit", formhandle)
function formhandle(e){
    e.preventDefault()

    const userInfo = {
        name: names.value,
        email: email.value
    }

    console.log(userInfo);
    names.value = "";
    email.value = "";
   }

var next = document.getElementById("next");
var prev = document.getElementById("prev");
var imgTag = document.querySelector(".archieve__img")
var photos = ["1.jpg","Coxbazar.jpg", "2.jpg", "3.jpg"]
var count = 0

next.addEventListener("click", () => {
    count++;
    if(count >= photos.length){
        count=0;
        imgTag.src = photos[count];
    }
    imgTag.src = photos[count];
})

prev.addEventListener("click", () =>{
    count--;
    if(count < 0){
        count = photos.length-1
        imgTag.src = photos[count];
    }else{
        imgTag.src = photos[count];
    }
    
})
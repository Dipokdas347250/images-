let body = document.querySelector("body")
let main = document.querySelector(".main")

body.addEventListener("click",(e)=>{
    main.classList.add("main2")
    if(e.target.classList[0] == "but"){
        main.innerHTML = `<div><img src=${e.target.dataset.url} alt="">/<i class="fa-solid fa-square-xmark"></i></div>`
    }else{
        main.innerHTML = ""
        main.classList.remove("main2")
    }
   
   
   
})

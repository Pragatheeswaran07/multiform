var btn=document.querySelectorAll("button")
var card=document.querySelectorAll(".card-form")
console.log(btn[3])
console.log(card[2])

    btn[0].addEventListener("click",()=>{
        console.log(card[1])
        card[0].style.display="none"
        card[1].style.display="block";
        card[2].style.display="none";
        
    })

    btn[1].addEventListener("click",()=>{
        console.log(card[1])
        
        card[0].style.display="block";
        card[1].style.display="none";
    })
    btn[2].addEventListener("click",()=>{
        console.log(card[1])
        card[1].style.display="none"
        card[0].style.display="none"
        card[2].style.display="block";
    })
    btn[3].addEventListener("click",()=>{
        console.log(card[1])
        card[1].style.display="none"
        card[2].style.display="none"
        
        card[1].style.display="block";
    })
   


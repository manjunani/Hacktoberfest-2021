console.log("Welcome to JavaScript Calculator")
let screen = document.getElementById('screen')
let button=document.querySelectorAll('button')
let screenvalue=''
 for(let items of button)
 {
     items.addEventListener('focus',(r)=>
     {
r.target.style.background="#e6fff7"
     })
     items.addEventListener('click',(p)=>
     {
p.target.style.background=""
     })
     items.addEventListener('click',(e)=>
     {
         buttonText = e.target.innerText;
         console.log(buttonText)
         if(buttonText=='X')
         {
             buttonText='*'
             screenvalue+=buttonText 
             screen.value=screenvalue 
         }
         else if(buttonText=='C')
         {
            screenvalue=''

             screen.value=screenvalue
         }
         else if(buttonText=='=')
         {
            
             screen.value=eval(screenvalue)
         }
    
         else{
             screenvalue+=buttonText
             screen.value=screenvalue
         }


     })
 }
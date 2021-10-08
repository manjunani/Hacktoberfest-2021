console.log("hey")
const button1=document.querySelector("#but1")
const button2=document.querySelector("#but2")
let spanDisplay1=document.querySelector("#display1")
let spanDisplay2=document.querySelector("#display2")
const resetBut=document.querySelector("#reset")
const winningSelect=document.querySelector("#player")
let score=0
let winningScore
let gameover=false
button1.addEventListener('click',function(e){
  
    if(!gameover)
    {
 
        score+=1
    }
  if(score === winningScore){
gameover=true

spanDisplay1.classList.add('winner')
spanDisplay2.classList.add('loser')
  }
 
spanDisplay1.innerText=`${score}`

  
    
})
let score2=0
 button2.addEventListener('click',function(f)
 { 
   if(!gameover)
    {
        score2+=1
    }
  if(score2 === winningScore){
gameover=true

spanDisplay2.classList.add('winner')
spanDisplay1.classList.add('loser')

  }

spanDisplay2.innerText=`${score2}`

})
 resetBut.addEventListener('click', reset)
//using change event
winningSelect.addEventListener('click',function(){
  reset()
 winningScore=parseInt(this.value) 

})
function reset()
{
  gameover=false
  score=0 
  score2=0
    spanDisplay1.innerText="0"
    spanDisplay2.innerText="0"
    spanDisplay1.classList.remove('winner')
    spanDisplay1.classList.remove('loser')
    spanDisplay2.classList.remove('winner')
    spanDisplay2.classList.remove('loser')
}

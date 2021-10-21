window.onload = (function (){
  input = document.getElementById("display");
   for(var i=0;i<16;i++)
  {

    element = document.querySelectorAll("button")[i];
    if(!isNaN(element.textContent))
    {
      element.onclick = (
        function(opt){
          return function(){
            addElement(opt);
          };
        }
      )(element.textContent);
    }
    else{
      switch (element.textContent) {
        case "+":
        case "-":
        case "*":
        case "÷":
            element.onclick = (
              function(opt){
                return function(){
                  operation(opt);
                };
              }
            )(element.textContent);
            break;

        case "=":
        element.onclick = (
          function(opt){
            return function(){
              calculate(input.value);
            };
          }
        )(element.textContent);
          break;

        case "C":
        element.onclick = clearData;
      }
    }


  }
});


function addElement(element){

  if(input.value=="0") input.value = "";
  input.value += element;

}

function clearData(){

  input.value = "0";

}

function operation(operator){
  input.value += operator;
}

function calculate(expression){
  input.value = eval(expression.replace(/÷/g, '/'));
}

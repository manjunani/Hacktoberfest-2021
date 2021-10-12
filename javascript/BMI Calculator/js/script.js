const calculate = () =>{
    event.preventDefault();
    var height = parseInt(document.getElementById("height").value);
    var weight = parseInt(document.getElementById("weight").value);
    var BMI = weight/Math.pow(height*0.01, 2)
    if (BMI<18.5){
        document.getElementById("result").innerHTML = "You are Underweight 😢"
    }else if(BMI>=18.5 && BMI<=24.9){
        document.getElementById("result").innerHTML = "You are Healthy Weight 😊"
    }else if(BMI>=25.0 && BMI<=29.9){
        document.getElementById("result").innerHTML = "You are Overweight 😔"
    }else{
        document.getElementById("result").innerHTML = "You are Obesity 😭"
    }
    console.log(BMI)
}
function move(){
    let bot = document.getElementsByClassName("bot")[0];
    let move_btn = document.getElementsByClassName("move")[0];
    if(bot.classList.contains("bot-moves"))
    {
        bot.classList.remove("bot-moves");
        move_btn.innerHTML="MOVE";
    }
    else
    {
        bot.classList.add("bot-moves");
        move_btn.innerHTML="STOP";
    }
}
function talk()
{
    let bot_status = document.getElementsByClassName("bot-status-dot")[0];
    let bot_message = document.getElementsByClassName("bot-message")[0];
    
    if(bot_status.classList.contains("bot-offline")){
        bot_status.classList.remove("bot-offline");
        bot_status.classList.add("bot-online");
        bot_message.style.display="block";
        let time = new Date();
        let timeString = time.toLocaleTimeString('en-US',{hours:'numeric',minutes:'numeric',hour12:true});
        let mins = time.getSeconds();
        if(mins % 5 == 0)
        bot_message.innerHTML="Hi, My name is Ken. Hope you are well! <br/> The time is " + timeString;
        else if(mins % 6 == 0)
        bot_message.innerHTML="Hi, My name is Ken. Is All well! <br/> The time is " + timeString;
        else if(mins % 7 ==0)
        bot_message.innerHTML="Hi, My name is Ken. Life is Amazing! <br/> The time is " + timeString;
        else if(mins % 2 == 0)
        bot_message.innerHTML="Hi, My name is Ken. Tech is Cool, Isn't it ! <br/> The time is " + timeString;
        else
        bot_message.innerHTML="Hi, My name is Ken. Are you having Fun?! <br/> The time is " + timeString;

    }
    else{
        bot_status.classList.add("bot-offline");
        bot_status.classList.remove("bot-online");
        bot_message.innerHTML="";
        bot_message.style.display="none";
    }
}

function gravity()
{
    let bot = document.getElementsByClassName("bot")[0];
    let grav = document.getElementsByClassName("no-gravity")[0];
    if(bot.classList.contains("bot-gravity-on"))
    {
        bot.classList.remove("bot-gravity-on");
        grav.innerHTML="TURN OFF Gravity";
    }
    else
    {
        bot.classList.add("bot-gravity-on");
        grav.innerHTML="TURN ON Gravity";
    }
}

 

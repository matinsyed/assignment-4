function cashOut( money ) {
    const cashOutRate = 1.75/100;
    let cashOutCharge = 0;
    if(typeof(money) === "number" && money >=0){ 
        cashOutCharge = money * cashOutRate;      
        return cashOutCharge;
    }
    else{
        return "Invalid";
    }
}


function validEmail( email ) {
    if(typeof(email) === "string"){ 
        email = email.trim();

        if((email.startsWith(".") || email.startsWith("-") || email.startsWith("_") || email.startsWith("+") || email.startsWith("@") || email.includes(" "))){
            return false;
        }
        else if(email.endsWith(".com") && email.includes("@")){
            return true;
        }
        else{
            return false; 
        }
    }
    else{
        return "Invalid";
    }
}


function isBestFriend( f1 , f2 ) {
    if(typeof f1 === "object" && typeof f2 === "object"){
        if(f1.bestFriend === f2.roll && f1.roll === f2.bestFriend){
            return true;
        }
        else{
            return false;
        }
    }
    else{
        return "Invalid";
    }
}


function calculateWatchTime( times ) {
    const watchTime = { hour: 0, minute: 0, second: 0 }
    let totalTime = 0;
    
    if(Array.isArray(times)){
        for(time of times){
            if(typeof time !== "number"){
                return "Invalid";
            }
            else{
                totalTime +=time; 
            }
        }

        watchTime['second'] = totalTime % 60;
        watchTime['minute'] = parseInt(totalTime / 60);
        if(watchTime['minute'] >=60){
            watchTime['hour'] = parseInt(watchTime['minute'] / 60);
            watchTime['minute'] = watchTime['minute'] % 60;
        }

        return watchTime;
    }
}
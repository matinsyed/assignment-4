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
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


const frn1 = { name : "hashem", roll : 1, bestFriend : 2};
const frn2 = { name : "kashem", roll : 2, bestFriend : 1};

console.log(isBestFriend(frn1, frn2));
console.log(isBestFriend({ name: "hashem", roll: 21, bestFriend: 1},
    { name: "kashem", roll: 1, bestFriend: 2 }));
console.log(isBestFriend({ name:"kashem", roll: 2, bestFriend: 11},
    "Kashem er Kono Bondhu Nai"));
console.log(isBestFriend("hashem", { name:"kashem", roll: 2, bestFriend: 11}));
console.log(isBestFriend({ name: "hashem", roll: 1 , bestFriend: 1},
    { name: "kashem" , roll: 1, bestFriend: 1 }));


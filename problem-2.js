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


console.log(validEmail("ferdous@gmail.com"));
console.log(validEmail("1zihad@gmail.com"));
console.log(validEmail("-king@yahoo.com"));
console.log(validEmail(["jhankar@hero.com"]));
console.log(validEmail("Mewo@cat.com"));
console.log(validEmail("programming-hero.com"));
console.log(validEmail("chat420@gpt.net"));
console.log(validEmail(true));
console.log(validEmail("he ro@alom.com"));
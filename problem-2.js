function validEmail( email ) {
    if(typeof(email) === "string"){ 
        // console.log(email);
        email = email.trim();
        // console.log(email);

        if((email.startsWith(".") || email.startsWith("-") || email.startsWith("_") || email.startsWith("+") || email.startsWith("@") || email.includes(" "))){
            return false;
        }
        else if(email.endsWith(".com") && email.includes("@")){
            return true;
        }
    }
    else{
        return "Invalid";
    }
}

// console.log("JavaScript".includes("Script",4)); // true

// console.log("coder.matin@gmail.com".endsWith(".com")); // true

// // console.log("Hello 123".match(/\d+/)); // ["123"]

// console.log("Hello World".startsWith(/\d+/)); // true

validEmail("      coder.matin@gmail.com");
validEmail("coder.matingmail.com");
validEmail(['123']);
validEmail("coder.matin@gmail.org");
validEmail("coder.  matin@gmail.com");
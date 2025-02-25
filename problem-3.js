function findWinner(votes) { 
    let n = votes.length; 
    let prevCount = 0; 
    let result = ""; 
  
    // Iterate over every string 
    for (let i = 0; i < n; i++) { 
        let count = 0; 
  
        // Count the occurrence of current string in the 
        // given votes[] 
        for (let j = 0; j < n; j++) { 
            if (votes[i] == votes[j]) 
                count++; 
  
            // Maximise the result if count > previous count 
            if (count > prevCount) { 
                prevCount = count; 
                result = votes[i]; 
            } 
            else if (count == prevCount) { 
                result = Math.min(result, votes[i]); 
            } 
        } 
    } 
  
    // return the result 
    console.log(result); 
} 
  
// Driver code 
let votes 
    = ["john", "johnny", "jackie", "johnny", 
        "john", "jackie", "jamie", "jamie", 
        "john", "johnny", "jamie", "johnny", 
        "john"]; 
  
findWinner(votes);
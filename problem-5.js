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


// calculateWatchTime("");
console.log(calculateWatchTime([100, 99, 119, 300]));
console.log(calculateWatchTime([1000, 2000, 725]));
console.log(calculateWatchTime([100, 3800]));
console.log(calculateWatchTime([]));
console.log(calculateWatchTime([5600]));
console.log(calculateWatchTime([100, 3800, "90" ]));
console.log(calculateWatchTime(3));
// calculateWatchTime(100);
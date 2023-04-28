// Create variables. 
var hour = 0;
var minute = 0;
var second = 0;
var count = 0;
// create a timer variable and add the value is "false" beacuse intially the timer is stop.
var timer = false;

//  Create the start function and call the stopwat function
function Start(){

    timer = true;
    stopwatch();
}

// Create the stop function
function Stop(){
    
    timer = false;
} 
// Create a reset function and 
function Reset(){

    timer = false;
    hour = 0;
    minute =0;
    second = 0;
    count = 0;

    document.getElementById("Count").innerHTML = "00";
    document.getElementById("Second").innerHTML = "00";
    document.getElementById("Minute").innerHTML = "00";
    document.getElementById("Hour").innerHTML = "00";

}

// Create the stopwatch function and start a loop and putting the values on it and
// Create a settimeout function on it.


function stopwatch(){
    if(timer == true){
        count = count+1;


        if(count == 100){
            second = second + 1;
            count = 0;
        }

        if (second == 60){
            minute = minute + 1;
            sec = 0;
        }

        if (minute == 60){
            hour = hour +1;
            minute = 0;
            second = 0;
        }

        var hrStr = hour;
        var minStr  = minute;
        var secStr = second;
        var countStr = count;
        
        if(hour<10){
            hrStr = "0" + hrStr;

        }

        if(minute<10){
            minStr = "0" + minStr;
            
        }

        if(second<10){
            secStr = "0" + secStr;
            
        }

        if(count<10){
            countStr = "0" + countStr;
            
        }

        document.getElementById("Count").innerHTML = countStr;
        document.getElementById("Second").innerHTML = secStr;
        document.getElementById("Minute").innerHTML = minStr;
        document.getElementById("Hour").innerHTML = hrStr;
        
        
        setTimeout("stopwatch()", 10);
    }
}

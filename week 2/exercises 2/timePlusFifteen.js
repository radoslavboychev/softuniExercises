function timePlus(input) {
    let hours = Number(input[0]);
    let minutes = Number(input[1]);
    
    minutes += 15;

    if (minutes > 59) {
        hours++;
        minutes -= 60;

    } 

    if (hours >= 24) {
        hours = 0;
    }

    if (minutes < 10) {
        console.log(`${hours}:0${minutes}`);
    } else {
        console.log(`${hours}:${minutes}`);
    }
}


timePlus(["12","49"])


// input array [hour, minute]
// if minutes are more than 59, 
    // add 1 to hour 
    // make minutes 0 
// hours are 1 or 2 digits
//  minutes are always 2 digits
// minutes get a trailing zero
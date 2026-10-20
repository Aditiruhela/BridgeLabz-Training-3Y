let isDoorLocked = true;
let isWindowClosed = true;
let isAlarmOn = true;
let isOwnerInside = true;

function checkSecurity() {
    if (isAlarmOn && isDoorLocked && isWindowClosed && isOwnerInside) {
        console.log("Secure");
    } else {
        console.log("Unsafe");
    }
}

checkSecurity();

isDoorLocked = false;
checkSecurity();

isDoorLocked = true;
isOwnerInside = false;
checkSecurity();

if (!isAlarmOn || !isDoorLocked || !isWindowClosed || !isOwnerInside) {
    console.log("Unsafe");
}
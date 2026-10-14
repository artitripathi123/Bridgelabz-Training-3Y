
let isDoorLocked = true;
let isWindowClosed = true;
let isAlarmOn = true;
let isOwnerInside = true;

// Check all security conditions
if (
    isAlarmOn &&
    isDoorLocked &&
    isWindowClosed &&
    isOwnerInside
) {
    console.log("Secure");
} else {
    console.log("Unsafe");
}

// Additional check using OR and NOT
if (!isDoorLocked || !isWindowClosed) {
    console.log("Warning: Door or window is open!");
}

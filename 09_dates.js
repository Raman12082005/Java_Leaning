// let myDate = new Date()
// console.log(myDate.toString());           // Mon Jan 05 2026 16:03:08 GMT+0530 (India Standard Time)
// console.log(myDate.toDateString());       // Mon Jan 05 2026
// console.log(myDate.toISOString());        // 2026-01-05T10:35:12.408Z
// console.log(myDate.toJSON());             // 2026-01-05T10:35:12.408Z
// console.log(myDate.toLocaleDateString()); // 5/1/2026
// console.log(myDate.toLocaleTimeString()); // 4:05:12 pm
// console.log(myDate.toLocaleString());     // 5/1/2026, 4:06:39 pm


let newDate = new Date(2025, 5, 21) // YYYY, MM, DD
// console.log(newDate.toString());          // Sat Jun 21 2025 00:00:00 GMT+0530 (India Standard Time)
// console.log(newDate.toLocaleString());    // 21/6/2025, 12:00:00 am
// newDate = new Date(2025, 5, 21, 5, 3, 24)
// console.log(newDate.toString());          // Sat Jun 21 2025 05:03:24 GMT+0530 (India Standard Time)
// console.log(newDate.toLocaleString());    // 21/6/2025, 5:03:24 am


// chcek months in both syntax
// newDate = new Date("2025, 5, 21") // YYYY, MM, DD
// console.log(newDate.toString()); // Wed May 21 2025 00:00:00 GMT+0530 (India Standard Time)
// console.log(newDate.toLocaleString()); // 21/5/2025, 12:00:00 am

// newDate = new Date("5, 21, 2025") // MM, DD, YYYY
// console.log(newDate.toString()); // Wed May 21 2025 00:00:00 GMT+0530 (India Standard Time)
// console.log(newDate.toLocaleString()); // 21/5/2025, 12:00:00 am

// let TimeStamp = Date.now()
// // all are random values
// console.log(TimeStamp); // 1767610243995 -> in miliseconds
// console.log(newDate.getTime()); // 1750444200000 -> in miliseconds
// console.log(Date.now()); // 1767610244001 -> in miliseconds
// console.log(Math.floor(Date.now()/1000)); // 1767610300 -> in seconds

newDate = new Date(2025, 5, 21, 5, 4)
console.log(newDate.getDate());     // 21
console.log(newDate.getDay());      // 6
console.log(newDate.getFullYear()); // 2025
console.log(newDate.getHours());    // 5
console.log(newDate.getMinutes());  // 4






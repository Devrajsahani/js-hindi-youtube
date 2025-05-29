const clock = document.getElementById('clock')
setInterval(function(){ // set interval helps in changing and updating the script everysecond so basically it helps in updating the fucntin every second suitable for changing the value every second 
let date= new Date(); // new date is used to give the current time 
// console.log(date.toLocaleTimeString());
clock.innerHTML = date.toLocaleTimeString() // to locale time string is used give the current time in form a string.
},1000);

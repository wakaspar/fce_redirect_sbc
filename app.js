console.log('sanity check - app.js')
// Countdown timer to redirect
var timeleft = 15;
var countdownTimer = setInterval(function(){
  timeleft--;
  document.getElementById("timer").textContent = timeleft;
  if(timeleft <= 0) {
    window.location.replace("http://steamshipbev.com");
    clearInterval(countdownTimer);
  }
},1000);

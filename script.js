window.onresize = function () {
    toggle();
  };
  
  window.onscroll = function () {
    myFunction();
  };


  //Timer 

var timer = document.getElementById('timerid');

setInterval(function time() {
  var d = new Date();
  var days = 30 - d.getDay();
  var hours = 24 - d.getHours();
  var min = 60 - d.getMinutes();
  var sec = 60 - d.getSeconds();

  if ((days + '').length == 1) {
    days = '0' + days;
  }
  if ((hours + '').length == 1) {
    hours = '0' + hours;
  }
  if ((min + '').length == 1) {
    min = '0' + min;
  }
  if ((sec + '').length == 1) {
    sec = '0' + sec;
  }

  timer.textContent = days + ":" + hours + ':' + min + ':' + sec;
}, 1000);

  //resize, scroll

var nav = document.getElementById('navid');
var sticky = nav.offsetTop;
var logo = document.getElementById('logo2id');
var biglogo = document.getElementById('logoid');
var mainnav = document.getElementById('mainnavid');

function myFunction() {
  if (window.pageYOffset > sticky) {
    biglogo.style.display = 'none';
    logo.style.display = 'block';
    mainnav.style.paddingLeft = '120px';
  } else if (window.pageYOffset < sticky && window.innerWidth > 1024) {
    biglogo.style.display = 'none';
    logo.style.display = 'none';
    mainnav.style.paddingLeft = '15px';
  } else if (window.pageYOffset < sticky && window.innerWidth < 1024) {
    logo.style.display = 'none';
    biglogo.style.display = 'block';
  }
}

function toggle() {
  if (window.innerWidth > 1024) {
    biglogo.style.display = 'none';
    logo.style.display = 'none';
    mainnav.style.paddingLeft = '15px';
  } else if (window.innerWidth < 1024) {
    logo.style.display = 'none';
    biglogo.style.display = 'block';
    mainnav.style.paddingLeft = '120px';
  }
}
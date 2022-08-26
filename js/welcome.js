$(window).on("load",function(){
  $(".loader-wrapper").delay(1000).fadeOut("slow");
});

var username = JSON.parse(localStorage.getItem('usname'));

document.getElementById("uname").innerHTML = `${username}!`;




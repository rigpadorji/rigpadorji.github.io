
document.addEventListener("DOMContentLoaded", function(){
document.getElementById("myform").addEventListener("submit", function(event){
event.preventDefault();
var year = document.getElementById("year").value;
 var month = document.getElementById("month").value;
 var date = document.getElementById("date").value;
 var furigana = document.getElementById("furigana").value;
 var romaji = document.getElementById("romaji").value;
 var dobyear = document.getElementById("dobyear").value;
 var dobmonth = document.getElementById("dobdate").value;
 var dobdate = document.getElementById("dobdate").value;
  var male = document.getElementById("male").value;
 var female = document.getElementById("female").value;
var display = "resume.html?year=" +  encodeURIComponent(year) +"&month=" + encodeURIComponent(month)+ "&date="+ encodeURIComponent(date)+ "&furigana=" +encodeURIComponent(furigana)+ "&romaji=" +encodeURIComponent(romaji)+"&dobyear="+ encodeURIComponent(dobyear)+"&dobmonth=" + encodeURIComponent(dobmonth)+ "&dobdate=" + encodeURIComponent(dobdate)+"&male=" + encodeURIComponent(male)+ "&female="+ encodeURIComponent(female);
window.location.href=display;
 

});

});
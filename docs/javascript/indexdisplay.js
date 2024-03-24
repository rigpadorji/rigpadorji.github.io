
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
 var addinfurigana = document.getElementById("addinfurigana").value;
  var addinromaji = document.getElementById("addinromaji").value;
  var phone = document.getElementById("phone").value;
   var email = document.getElementById("email").value;
   var collegeyear1 = document.getElementById("collegeyear1").value;
   var collegemonth1 = document.getElementById("collegemonth1").value;
   var collegeyear2 = document.getElementById("collegeyear2").value;
   var collegemonth2 = document.getElementById("collegemonth2").value;
   var collegename =document.getElementById("collegename").value;


var display = "resume.html?year=" +  encodeURIComponent(year) +"&month=" + encodeURIComponent(month)+ "&date="+ encodeURIComponent(date)+ "&furigana=" +encodeURIComponent(furigana)+ "&romaji=" +encodeURIComponent(romaji)+"&dobyear="+ encodeURIComponent(dobyear)+"&dobmonth=" + encodeURIComponent(dobmonth)+ "&dobdate=" + encodeURIComponent(dobdate)+"&male=" + encodeURIComponent(male)+ "&female="+ encodeURIComponent(female)+"&addinfurigana="+ encodeURIComponent(addinfurigana)+"&addinromaji=" +encodeURIComponent(addinromaji)+"&phone=" +encodeURIComponent(phone)+"&email="+encodeURIComponent(email)+"&collegeyear1=" +encodeURIComponent(collegeyear1) + "&collegemonth1=" +encodeURIComponent(collegemonth1)+"&collegeyear2=" +encodeURIComponent(collegeyear2) + "&collegemonth2=" +encodeURIComponent(collegemonth2)+"&collegename=" + encodeURIComponent(collegename);

window.location.href=display;
 

});

});
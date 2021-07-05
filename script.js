alert("Welcome! This is a W.I.P");
if (confirm("How are you?")) {
  var txt = "Good!";
  alert(txt);
  console.log(txt);
} else {
   var txt = "OK";
   console.log(txt);
}


var userName = prompt("What is your name?");
alert("Welcome " + userName);
if (userName == "") {
    alert("Please enter your name");
}

var Music = true;
var question;

while(Music==true){
  question = prompt("Like music? yes or no?")
  if (question =="yes") {Music = false;} 
}

var amount = prompt("Sooooo! How many records you want?");
for(let i = 0; i < amount; i++){
    document.write("<img src=https://globalnews.ca/wp-content/uploads/2020/02/5e4d53c6702a3.jpg?quality=85&strip=all"); 
}

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
    document.write("<img src='https://images.prismic.io/soundcharts/a86ce57c4723f2a4d96289b0570970059f36b65c_album-audio-classic-1616470.jpg?auto=compress,format'>"); 
}

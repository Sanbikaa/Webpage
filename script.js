alert("Welcome");
if (confirm("How are you feeling")) {
    var txt = "Good!";
    alert(txt);
    console.log(txt);
} else {
    var txt ="Hmmmm Alright"
    console.log(txt);
}
var userName = prompt("What's your name?");
console.log(userName);

for (i = 0; i < 10; i = i+i){
    console.log(i);
}

attempts = 0;

while(attempts < 5){
    prompt("Enter a number");
    attempts = attempts + 1;
}
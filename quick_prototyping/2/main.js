
var now = new Date();
var minutes = now.getHours();

if (minutes > 50 && minutes < 60){
document.write ('<body style="background-color: orange">');
}
else if (minutes > 40 && minutes < 50){
document.write ('<body style="background-color: orangered">');
}
else if (minutes > 30 && minutes < 40){
document.write ('<body style="background-color: pink">');
}
else if (minutes > 20 && minutes < 30){
document.write ('<body style="background-color: yellow">');
}
else if (minutes > 10 && minutes < 20){
document.write ('<body style="background-color: skyblue">');
}
else if (minutes > 0 && minutes < 10){
document.write ('<body style="background-color: steelblue">');
}
else {
document.write ('<body style="background-color: green">');
}
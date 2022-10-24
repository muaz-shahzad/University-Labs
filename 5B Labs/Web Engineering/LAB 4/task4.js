

document.write("<b>1) Object</b><br>");
var Data = {
    username: "M Muaz Shahzad",
    password: "Muaz 123"
  };
document.writeln("<br><b> Username :</b> "+Data.username +'<br>')
document.writeln("<b> Password :</b> "+Data.password +'<br>')
document.write("<br><b>2) Array</b> <br>"); 
var database=[Data]

document.writeln("<br>"+ database[0].username +"<br>")
document.writeln( database[0].password +"<br>")

var newsfeed=[{
    username: 'M Muaz Shahzad',
    timeline: 'Available'
},
{
    username: 'Talha',
    timeline: 'Not Available'
},
{
    username: 'Shahab Tahir',
    timeline: 'Available'
}]
document.write("<br><b>3)Array Of an Object</b> <br> <br>");
document.write("<b> Username :</b> "+newsfeed[0].username +"<br> "+ "<b>TimeLine: </b> "+newsfeed[0].timeline+"<br> <br>")
document.write("<b> Username :</b> "+newsfeed[1].username +"<br> "+ "<b>TimeLine: </b> "+newsfeed[1].timeline+"<br><br> ")
document.write("<b> Username :</b> "+newsfeed[2].username +"<br> "+ "<b>TimeLine: </b> "+newsfeed[2].timeline+"<br><br>")



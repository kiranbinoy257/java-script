k=parseInt(prompt("Enter Your Mark"))
y=parseInt(prompt( "Enter Your Mark"))
z=parseInt(prompt("Enter Your Mark"))
x=k+y+z%3
if(x>=90)
{
    alert(` A+`)
}
else if (x>=80) {

   alert(` A`)
}
else if (x>=70) {

    alert(` B+`)
 }
 else if (x>=60) {

    alert(` B`)
 }
 else if (x>=60) {

    alert(` C+`)
 }
 else if (x>=50) {

    alert(` C`)
 }
 else if (x>=40) {

    alert(` D+`)
 }
 else{
    alert(`fail`)
 }
function Addiction(){
    let Number1=parseInt(document.getElementById("Number1").value)
    let Number2=parseInt(document.getElementById("Number2").value)
    document.getElementById("plus").innerHTML=(Number1+Number2)
}
function substraction (){
    let Number1=parseInt(document.getElementById("Number1").value)
    let Number2=parseInt(document.getElementById("Number2").value)
    document.getElementById("minus").innerHTML=(Number1-Number2)
}
function multiplication (){
    let Number1=parseInt(document.getElementById("Number1").value)
    let Number2=parseInt(document.getElementById("Number2").value)
    document.getElementById("into").innerHTML=(Number1*Number2)
}
function division (){
    let Number1=parseInt(document.getElementById("Number1").value)
    let Number2=parseInt(document.getElementById("Number2").value)
    document.getElementById("divi").innerHTML=(Number1/Number2)
}
function modulos (){
    let Number1=parseInt(document.getElementById("Number1").value)
    let Number2=parseInt(document.getElementById("Number2").value)
    document.getElementById("mode").innerHTML=(Number1%Number2)
}
function asd(){
    let  name=document.getElementById("name").value
    let  number=document.getElementById("number").value
    console.log(name,number);
    if(name==""&&number=="")
    {
        alert("fields are empty")
    }
    else if(name.length>25){
        alert("name is too long")
    }
    else if(number.length!=10)
    {
        alert("invalid phone number")
    }
    else
    {
        alert("successfully registered")
    }
}
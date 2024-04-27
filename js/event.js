
 function asd (){
    setTimeout(() => {
        let date=new Date ()
        document.getElementById('hour').innerHTML=date.getHours()
        document.getElementById('minute').innerHTML=date.getMinutes()
        document.getElementById('seconds').innerHTML=date.getSeconds()
        document.getElementById('month').innerHTML=date.getMonth()
        document.getElementById('year').innerHTML=date.getUTCFullYear()
        asd()

    },1000);
}
switch(month){
    case"0":innerHTML=month(january); 
    break;
    case"1":innerHTML=(february); 
    break;
    case"2":innerHTML=(march); 
    break;
    case"3":innerHTML=month ("january");
    break;
}
asd()

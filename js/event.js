function asd (){
    setTimeout(() => {
        let date=new Date ()
        document.getElementById('hour').innerHTML=date.getHours()
        document.getElementById('minute').innerHTML=date.getMinutes()
        document.getElementById('seconds').innerHTML=date.getSeconds()
        asd()

    },1000);
}
asd()
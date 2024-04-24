let a=[]
for(i=1;i<=100;i++)
{
    if(i%(3*5)==0)
    {
        a.push("fizzbuzz")
    }
    else if(i%3==0)
    {
        a.push("fizz")
    }
    else if(i%5==0){
        a.push("buzz")
    }
  
    else{
        a.push(i)
    }
}
console.log(a)

// let a=[]
// for(i=1;i<=100;i++)
// {
//     if(i%==0)
//     {
//         a.push("fizzbuzz")
//     }
    
//     else{
//         a.push(i)
//     }
// }
// console.log(a);


// let a=[]
// for(i=1;i<=100;i++)
// {
//     if(i%(3*5)==0)
//     {
//         a.push("fizzbuzz")
//     }
    
//     else{
//         a.push(i)
//     }
// }
// console.log(a);
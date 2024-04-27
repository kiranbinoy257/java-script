
// for(i=1;i<5;i++){
    
//     for(j=1;j<=5-i;j++){
//         document.write("&nbsp");
//     }
//     for(k=3;k<=3*i;k++){
//         document.write("*");
//     }
//     document.write("<br>");
// }

// reverse pyramid


let n=5
for(i=1;i<=n;i++){
    for(j=1;j<=i-1;j++){
    }
    rfor(k=1;k<=n-i+1;k++){
        document.write("*")
    }
    for(y=1;y<=i-1;y++){
        document.write("&nbsp")
    }
    document.write("<br>")
}
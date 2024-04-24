function asd(a,b)
{
    function bsd()
    {
        c=a+b
        return c
    }
    return bsd
}
x=asd(5,6)
val=x()
console.log(val);
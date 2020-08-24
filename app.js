let sp= document.getElementById("screen");
function send(val)
{   
    sp.value += val;
}
function solve()
{
    let x= sp.value;
    let y= eval(x);
    sp.value=y;
}
function clearall()
{
    sp.value = "";
}
function back()
{
    sp.value = sp.value.substring(0,sp.value.length-1);
}

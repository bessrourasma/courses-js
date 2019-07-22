function bold(){
if(document.getElementById("demo").style.fontWeight=="bold")
{document.getElementById("demo").style.fontWeight="normal";}
else
document.getElementById("demo").style.fontWeight="bold";
}
function italic(){
if(document.getElementById("demo").style.fontStyle=="italic")
{document.getElementById("demo").style.fontStyle="normal";}
else
document.getElementById("demo").style.fontStyle="italic";
}
function underlined(){
if(document.getElementById("demo").style.textDecoration=="underline")
{document.getElementById("demo").style.textDecoration="";}
else
document.getElementById("demo").style.textDecoration="underline";
}
function change_size(){
var siz=document.getElementById("size").value;
document.getElementById("demo").style.fontSize= siz;
}
function change_police(){
var pol=document.getElementById("police").value;
document.getElementById("demo").style.fontFamily= pol;
}
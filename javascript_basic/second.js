let test=document.getElementById("")

let n=0;
window.setInterval("interval()",1000);
function interval(){
    test.innerHTML=++n;
};
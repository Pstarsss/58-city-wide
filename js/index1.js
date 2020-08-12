/**
 *
 * @authors Marte (iqianduan@126.com)
 * @date    2020-08-12 08:33:26
 * @version $Id$
 */

let close = document.getElementById("Close");
let FIX = document.getElementsByClassName("FIX")[0];
let BackTop = document.getElementsByClassName("backTop")[0];

close.addEventListener("click",guan,false);
window.addEventListener("scroll",scrollBar,false);
BackTop.addEventListener("click",backTop,false);
function guan(){
    FIX.style.display = "none";
}
function scrollBar(){
    let winH = window.innerHeight;
    let scrlH = document.documentElement.scrollTop;
    if(scrlH > winH/2){
        BackTop.style.display = "block";
    }
    else{
         BackTop.style.display = "none";
    }
}
function backTop(){
    document.documentElement.scrollTop = 0;
}
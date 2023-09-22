let lists = document.getElementsByClassName("pull-down-list")
console.log(lists)

const pullDownButton = document.getElementById("lists")
const pullDownParents = document.getElementById("pull-down")

pullDownButton.addEventListener('mouseover',function(){
    this.setAttribute("style","background-color: blue;")
    console.log('乗ったら青色')
  })

pullDownButton.addEventListener('mouseout',function(){
    this.setAttribute("style","background-color: red;");
  })

pullDownButton.addEventListener('click',function(){
  if (pullDownParents.getAttribute("style") == "display:block;"){
    pullDownParents.removeAttribute("style", "display:block;")
    console.log("非表示")
}　else {
    pullDownParents.setAttribute("style", "display:block;")
    console.log("表示")
   }
  })


window.addEventListener('load',function(){

    document.getElementById("lists").addEventListener('mouseout',logOff);
    
})


function logOff(event){
    console.log("外れる赤");
}

window.addEventListener('load',function(){
    document.getElementById("lists").addEventListener('click',function(){
    console.log("クリック緑"); 
});
});




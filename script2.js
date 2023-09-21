let lists = document.getElementsByClassName("pull-down-list")
console.log(lists)

const pullDownButton = document.getElementById("lists")
pullDownButton.addEventListener('mouseover',function(){
    pullDownButton.setAttribute("style","background-color: blue;");
  })

pullDownButton.addEventListener('mouseout',function(){
    pullDownButton.setAttribute("style","background-color: red;");
  })

pullDownButton.addEventListener('click',function(){
    pullDownButton.setAttribute("style","background-color: green;");
  })

window.addEventListener('load',function(){

    document.getElementById("lists").addEventListener('mouseover',logOn);
    document.getElementById("lists").addEventListener('mouseout',logOff);
    
})

function logOn(event){
    console.log("乗る青");
}

function logOff(event){
    console.log("外れる赤");
}


window.addEventListener('load',function(){
    document.getElementById("lists").addEventListener('click',function()
    {console.log("クリック緑");
});
});


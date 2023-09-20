let lists = document.getElementsByClassName("pull-down-list")
console.log(lists)


window.addEventListener('load',function(){
const pullDownButton = document.getElementById("lists")
})


window.addEventListener('load',function(){

    document.getElementById("lists").addEventListener('mouseenter',logOn);
    document.getElementById("lists").addEventListener('mouseleave',logOff);
});

function logOn(event){
    console.log("乗る");
}

function logOff(event){
    console.log("外れる");
}


window.addEventListener('load',function(){
    document.getElementById("lists").addEventListener('click',function()
    {console.log("クリック");
});
});

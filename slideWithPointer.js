var movie = document.querySelectorAll("#movie");

movie.forEach(function(val){
    
    val.addEventListener("mouseenter", function(){
        val.childNodes[3].style.opacity = 1;
    })
    val.addEventListener("mouseleave", function(){
        val.childNodes[3].style.opacity = 0;
    })
    val.addEventListener("mousemove", function(item){
        // val.childNodes[3].style.left = item.x+"px";
        // val.childNodes[3].style.top = item.y+"px";
        val.childNodes[3].style.left = item.clientX - val.offsetLeft + "px";
        val.childNodes[3].style.top = item.clientY - val.offsetTop + "px";
    })
})

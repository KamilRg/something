
function jump(){  
    if(character.classList !="animate"){
        character.classList.add("animate");
    }
    character.classList.add("animate");
    setTimeout(function(){
        character.classList.remove("animate");
    },500);

}




let checkDead = setInterval(function(){
    let characterTop =
    parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    let blockLeft =
    parseInt(window.getComputedStyle(block).getPropertyValue("left"));

    if(blockLeft <40 && blockLeft >0 &&
        characterTop>=700){
            block.style.animation = "none";
            block.style.display = "none";
             alert("Press F5 to try again.");
        }

},10);




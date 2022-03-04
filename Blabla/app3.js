let teller = 0;


view();

function view() {
    let html = `<div>${teller}</div>`;
    html += ``
    ;
    let appDiv = document.createElement('app3');
    html += ``
    appDiv.innerHTML = html;}







function jump(){  
    if(character.classList !="animate"){
        character.classList.add("animate");
    }
    character.classList.add("animate");
    setTimeout(function(){
        character.classList.remove("animate");
    },500);

}
function increment(){
    teller++;
    view();
}



var checkDead = setInterval(function(){
    var characterTop =
    parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    var blockLeft =
    parseInt(window.getComputedStyle(block).getPropertyValue("left"));

    if(blockLeft <30 && blockLeft >0 &&
        characterTop>=750){
            block.style.animation = "none";
            block.style.display = "none";
            // alert("You suck.");
        }

},10);





//Model

let food = {
    image: "burgery.png",
    name: "BURGERS",
    name2: "MENU",
    image2: "pizza.png",
    pname: "PIZZA",
    image3: "sushi.png",
    name3: "SUSHI",
    image4: "kebab.png",
    name4: "KEBAB",     


}


//View      
show();

function show() {
    const app = document.getElementById('app2')
    app.innerHTML = `
    <h1>Hva skal vi spise?</h1>

    <ul> <div class="light2" onclick="location.href='https://burgerhouse.no/meny/hovedmeny/';"><img src="${food.image}">
    <div id="mn">${food.name2}</div><div id="burg">${food.name}</div></div>

    <div class="grandis" onclick="location.href='https://www.peppes.no/desktop/om-peppes-pizza/restaurantmeny?7';"><img src="${food.image2}">
    <div id="mn1">${food.name2}</div><div id="pizza">${food.pname}</div></div>

    <div class="fishlike" onclick="location.href='https://shop.dinsushi.no';"><img src="${food.image3}">
    <div id="mn2">${food.name2}</div><div id="fish">${food.name3}</div></div></ul>
    
    <button class="game" onclick="location.href='start.html'">SPILL MENS DU VENTER</button>
    `
}
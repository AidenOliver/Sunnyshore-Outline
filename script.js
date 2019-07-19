//Setting up the page and rectangle function

const canvas = document.getElementById('sunnyshore');
const context = canvas.getContext('2d');

function rectangle(x, y, w, h, color) {
    context.fillStyle = color;
    context.fillRect(x, y, w, h);
}


//Canvas and/or ocean

rectangle (0, 0, canvas.width, canvas.height, 'lightblue');


//Bottom right island made of three rectangles

const islandOne = {
    x: canvas.width/1.35,
    y: canvas.height/1.9,
    width: 200,
    height: 300,
    color: 'brown'
}

rectangle (islandOne.x, islandOne.y, islandOne.width, islandOne.height, islandOne.color);

rectangle (710, 369, 35, 75, 'brown');

rectangle (675, 583, 100, 85, 'brown');


//Top right island

const islandTwo = {
    x: canvas.width/1.65,
    y: canvas.height/18,
    width: 300,
    height: 175,
    color: 'brown'
}

rectangle (islandTwo.x, islandTwo.y, islandTwo.width, islandTwo.height, islandTwo.color);

rectangle (855, 40, 100, 105, 'brown');


//Creating the character and user control

const character = {
    x: canvas.width/2,
    y: canvas.height/2,
    width: 25,
    height: 25,
    color: 'green'
}

rectangle (character.x, character.y, character.width, character.height, character.color);

canvas.addEventListener('mousemove', movePlayer);

function movePlayer(event) {
    let rect = canvas.getBoundingClientRect();

    character.x = event.clientX - rect.top - character.width/2;
    character.y = event.clientY - rect.top - character.height/2;
}

//Main Island

const islandThree = {
    x: canvas.width/1500,
    y: canvas.height/3.5,
    width: 475,
    height: 400,
    color: 'brown'
}

rectangle (islandThree.x, islandThree.y, islandThree.width, islandThree.height, islandThree.color);

rectangle (100, 100, 200, 200, 'brown');

rectangle (0, 480, 200, 200, 'brown');


//The borders for the islands

function border() {

}


//Rendering the game/canvas

function render() {
    rectangle (0, 0, canvas.width, canvas.height, 'lightblue');
    
    rectangle(islandTwo.x, islandTwo.y, islandTwo.width, islandTwo.height, islandTwo.color);

    rectangle(855, 40, 100, 105, 'brown');

    rectangle(islandOne.x, islandOne.y, islandOne.width, islandOne.height, islandOne.color);

    rectangle(710, 369, 35, 75, 'brown');

    rectangle(675, 583, 100, 85, 'brown');

    rectangle (islandThree.x, islandThree.y, islandThree.width, islandThree.height, islandThree.color);

    rectangle (100, 100, 200, 200, 'brown');

    rectangle (0, 480, 200, 200, 'brown');

    rectangle(character.x, character.y, character.width, character.height, character.color);
}


//Creating the framerate for the environement and the update for collision

function environment() {
    render();
}

function update() {

}

const fps = 50;

setInterval(environment, 1000/fps);
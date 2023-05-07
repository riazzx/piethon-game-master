// defining the canvas border and background color
const canvas_border = 'black';
const canvas_background = 'white';

//creating the piethon object and settings its coordinates to use on the canvas.
let piethon = [
    { x: 260, y: 200 },
    { x: 240, y: 200 },
    { x: 220, y: 200 },
    { x: 200, y: 200 },
    { x: 180, y: 200 },
];

// set the scale of the piethon and the food to 20 pixels to be on the canvas
let scale = 20;

// set the initial score to 0.
let score = 0;

// variables to define the coordinates of the food to place on canvas.
let dessert_x;
let dessert_y;
// get the pie.png element and save in a variable
let pie = document.getElementById("pie");

let bonus_dessert_x;
let bonus_dessert_y;
let cake = document.getElementById("cake");
let SnakeBody = document.getElementById("snakebody");


// keep initial movement of the piethon as false
let piethon_movement = false;

//horizontal velocity of the snake
let xAxisVelocity = 20;
//vertial velocity of the snake
let yAxisVelocity = 0;

//create the canvas for piethon to move in
const piethonCanvas = document.getElementById("piethonCanvas");
//set context of the canvas to 2d
const piethonCanvasContext = piethonCanvas.getContext("2d");

// keep the initial speed of the game to 100ms.
let game_speed = 100;


// function to start the game, run main function, place_dessert and place_bonus_dessert functions.
function playgame(){
    main();
    place_dessert();
    place_bonus_dessert();
}

// add an event listener to be able to move the snake.
document.addEventListener("keydown", piethonMovement);

//main function to run the game
function main() {
    // check if game ended, update the score.
    if(has_game_ended()) {
        updateScore();
        // alert the user that the game is over.
        alert("GAME OVER");
        // unhide the replay button to play again 
        document.getElementById("replay").hidden = false;
        
        return;
    }
    piethon_movement = false;
    // set timeout function to set the game speed and recall the functions based on the game speed.
    setTimeout(function onTick(){
        clearCanvas();
        drawdessert();
        drawBonusdessert();
        move_piethon();
        drawpiethon();
        //call main function again
        main();
        document.getElementById("playbutton").hidden = true;
    }, game_speed)

    
}

//make a border around the cavnvas
function clearCanvas() {
    //set background color
    piethonCanvasContext.fillStyle = canvas_background;
    //set border color of canvas
    piethonCanvasContext.strokestyle = canvas_border;
    //draw filled rectangles in canvas body
    piethonCanvasContext.fillRect(0, 0, piethonCanvas.width, piethonCanvas.height);
    //draw canvas border
    piethonCanvasContext.strokeRect(0, 0, piethonCanvas.width, piethonCanvas.height);

}


//display the piethon body parts
function drawpiethon() {
    piethon.forEach(drawpiethonBody);
}

//display the piethon on the canvas making a square for each coordinate
function drawpiethonBody(piethonPart) {
    piethonCanvasContext.drawImage(SnakeBody, piethonPart.x, piethonPart.y, scale, scale);
}


// function to move the piethon on the canvas, increase the game speed and record scores.
function move_piethon(){
    // array to keep increasing the head of the piethon to simulate movement.
    const head = {
        x: piethon[0].x + xAxisVelocity, 
        y: piethon[0].y + yAxisVelocity
    };
    // adds the new coordinates at the start of the snake array
    piethon.unshift(head);
    // variables to store a boolean value if the coordinates of the snake head and desserts match. true if yes.
    const has_eaten_dessert = piethon[0].x === dessert_x && piethon[0].y === dessert_y;
    const has_eaten_bonus_dessert = piethon[0].x === bonus_dessert_x && piethon[0].y === bonus_dessert_y;
    // check if the variable is true. then append the score, display on screen, and call the speedup function to speed up the game. 
    if(has_eaten_dessert) {
        score += 10;
        document.getElementById("score").innerHTML = score;
        place_dessert();
        speedup();
        // speedup();
    } else if (has_eaten_bonus_dessert){
        score += 20;
        document.getElementById("score").innerHTML = score;
        place_bonus_dessert();
        speedup();
    }
    else {
        // else remove the last part of piethon to simulate movement
        piethon.pop();
    }
    
    
}

// function to speedup the game after the player reaches a certain score.
function speedup() {
    // increase the speed of the game by 25ms, ie, decrease the time interval by 25ms.
        if (score === 100) {
            game_speed = game_speed - 25;
        }
        if (score === 150){
            game_speed -= 25;
        }
        if (score === 200){
            game_speed -= 25;
        }

}

// function to control the piethon using the arrow keys.
function piethonMovement(event){
    // define and store the key codes of the arrow keys in constant variables.
    const LEFT_KEY = 37;
    const UP_KEY = 38;
    const RIGHT_KEY = 39;
    const DOWN_KEY = 40;

    //prevent the piethon from reversing
    if(piethon_movement) return;
    piethon_movement = true;

    // constant variable to store the key pressed.
    const keyPushed = event.keyCode;
    // boolean variables, true if the velocity is equal to the scale of the piethon.
    const movingUp = yAxisVelocity === -scale;
    const movingLeft = xAxisVelocity === -scale;
    const movingDown = yAxisVelocity === scale;
    const movingRight = xAxisVelocity === scale;
    // if statements to chnange the x and y axis velocity of the piethon base don the scale to make piethon move up/down/left/right.
    if(keyPushed === LEFT_KEY && !movingRight){
        xAxisVelocity = -scale;
        yAxisVelocity = 0;
    }
    if(keyPushed === UP_KEY && !movingDown){
        xAxisVelocity = 0;
        yAxisVelocity = -scale;
    }
    if(keyPushed === RIGHT_KEY && !movingLeft){
        xAxisVelocity = scale;
        yAxisVelocity = 0;
    }
    if(keyPushed === DOWN_KEY && !movingUp){
        xAxisVelocity = 0;
        yAxisVelocity = scale;
    }
}

// function to check if the piethon ate itself, or tried to go beyond the borders
function has_game_ended(){
    // for loop to check if the piethon head is colliding with its body.
    for(let i = 4; i < piethon.length; i++){
        if(piethon[i].x === piethon[0].x && piethon[i].y === piethon[0].y) return true
    }
        // boolean constant variables, set to true if coordinates of piethon head and canvas borders match.
        const hitLeftWall = piethon[0].x < 0;
        const hitRightWall = piethon[0].x > piethonCanvas.width - scale;
        const hitTopWall = piethon[0].y < 0;
        const hitBottomWall = piethon[0].y > piethonCanvas.height - scale;
        return hitLeftWall || hitRightWall || hitTopWall || hitBottomWall
    
}

// functon to generate a random whole number coordinate within the range to place the dessert on the canvas
function random_dessert(min, max){
    return Math.round((Math.random()* (max-min) + min) / scale) * scale;
}

// function to place the dessert on the canvas
function place_dessert(){
    dessert_x = random_dessert(0, piethonCanvas.width - scale);
    dessert_y = random_dessert(0, piethonCanvas.height - scale);
    // function to check if piethon head coordinates match dessert coordinates.
    piethon.forEach(function has_piethon_eaten_dessert(part) {
        // boolean variable, true if piethon ate dessert
        const has_eaten = part.x == dessert_x && part.y == dessert_y;
        // if true, then call function place dessert to add dessert on the canvas.
        if (has_eaten) place_dessert();
    });
}

// function to place the dessert with 20 points on the canvas.
function place_bonus_dessert(){
    bonus_dessert_x = random_dessert(0, piethonCanvas.width -scale);
    bonus_dessert_y = random_dessert(0, piethonCanvas.height - scale);
        // function to check if piethon head coordinates match dessert coordinates.

    piethon.forEach(function has_piethon_eaten_dessert(part){
        // boolean variable, true if piethon ate dessert
        const has_eaten = part.x == bonus_dessert_x && part.y == bonus_dessert_y;
        // if true, then call function place dessert to add dessert on the canvas.
        if (has_eaten) place_bonus_dessert();
    });
}

// function to display the pie on the canvas.
function drawdessert(){
    piethonCanvasContext.drawImage(pie, dessert_x, dessert_y, scale, scale);
}

// function to place the cake on the canvas
function drawBonusdessert(){
    piethonCanvasContext.drawImage(cake, bonus_dessert_x, bonus_dessert_y, scale, scale);
}

// stop the window from scrolling using the up and down arrow keys.
window.top.document.onkeydown = (e) => {
    e = e || window.event;
    var keyCode = e.keyCode;
    if (keyCode >= 37 && keyCode <= 40) {
        return false;
    }
};

// function to update the score to the user object.
function updateScore(){
    let newScore = score;
    // check if any user is signed in.
    if(sessionStorage.signedInUsername !== undefined){
        // if true then create user object with data of signed in user
        let user = JSON.parse(localStorage[sessionStorage.signedInUsername]);
        // check if current highscore of user is greater than the all time highscore.
        if(user.highscore < newScore){
            // if true, update the previoud highscore with current highscore.
            user.highscore = newScore;
            // save the object.
            localStorage[user.username] = JSON.stringify(user);
        }
    }
}
<?php
    //INCLUDE PHP FILE TO BE USED ON THE PAGE 
    include('common.php'); 
	
    //OUTPUT HEADER AND NAVBAR BY CALLING THEIR FUNCTION 
    outputHeader("Play Game");
    outputNavbar("Play Game");
?>

<!-- CONTENTS OF THE PAGE -->
<!-- BODY DIV -->

    <div class="body">
    <!-- INFO DIV TO SHOW PAGE NAME AND INFO ON LEFT SIDE -->
    <div class="info">
        <h3>Play Game</h3>
        <p id="notsignedin" style="color: red"></p>
    </div>
    <!-- CONTENT DIV FOR GAME/RULES/LEADERBOARD TO DISPLAY CENTERED -->
    <div class="content">
        <!-- game assets - snakes body and desserts -->
        <img id="cake" src="images/cake.png" alt="cake" hidden>
        <img id="pie" src="images/pie.png" alt="pie" hidden>
        <img id="snakebody" src="images/SnakeBody.png" alt="snakebody" hidden>

        <!-- canvas where the piethon will move and desserts will be placed -->
        <canvas id="piethonCanvas" width="800px" height="500px"></canvas>
    
        

    </div>
    <!-- SCORE DIV TO SHOW THE SCORE AND AND A START RESTART BUTTON -->
    <div class="scorediv">
        <h3>Score</h3>
        <br>
        <h3 id="score">0</h3>
        <!-- IMPORT GAME LOGIC JS FILE FOR GAME AND SCORE -->
        <script type="text/javascript" src="js/piethon_logic.js"></script>
        <br>
        <button id="playbutton" onclick="playgame()">Play</button>
        <button id="replay" onclick="location.reload()" hidden> Replay</button>
        

    </div>
    </div>

<!-- IMPORT AUTHENTICATION JS FILE TO CHECK SIGN IN AND UNHIDE THE SIGNOUT BUTTON -->
<script type="text/javascript" src="js/authentication_brains.js"></script>

<?php
    //OUTPUT THE FOOTER BY CALLING THE FUNCTION
    outputFooter();
?> 
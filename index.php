<?php
    //INCLUDE PHP FILE TO BE USED ON THE PAGE 
    include('common.php'); 
	
    //OUTPUT HEADER AND NAVBAR BY CALLING THEIR FUNCTION 
    outputHeader("Piethon - Home");
    outputNavbar("Home");
?>

<!-- CONTENTS OF THE PAGE -->
<!-- BODY DIV -->
<div class="body">
    <!-- DIV OPTIONS TO DISPLAY OPTIONS TO CHOOSE ON THE PAGE -->
    <div class="options">
        <h3 >Welcome to PIETHON, your favorite game to pass your time!</h3>
        <br>
        <h3>Choose any one of the options to continue.</h3>
        <br>
        <a href="playgame.php">Play as Guest</a>
        <br>
        <h3>New here? Sign up now to save your scores to the leaderboard.</h3>
        <br>
        <a href="signup.php">Sign Up</a>
        <br>
        <h3>Already a member? Sign in right now to beat the highscore!</h3>
        <br>
        <a href="signin.php">Sign In</a>
        <br><br><br>
    </div>
</div>  

<script type="text/javascript" src="js/authentication_brains.js"></script>


<?php
    //OUTPUT THE FOOTER BY CALLING THE FUNCTION
    outputFooter();
?> 


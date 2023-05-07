<?php
    //INCLUDE PHP FILE TO BE USED ON THE PAGE 
    include('common.php'); 
	
    //OUTPUT HEADER AND NAVBAR BY CALLING THEIR FUNCTION 
    outputHeader("Leaderboard");
    outputNavbar("Leaderboard");
?>

<!-- CONTENTS OF THE PAGE -->
<!-- BODY DIV -->
<div class="body">
    <div class="info">
        <h3>Leaderboard</h3>
    </div>
    <div class="content">
        <p><b>LEADERBOARD</b></p>
        <p>The highest scores scored by all users.</p>
        <!-- TABLE TO SHOW THE LEADERBOARD -->
        <div id="ranking" style="width: 100%"></div>
        

        <br><br>
        <!-- IMPORT THE AUTHENTICATION JS FILE TO CHECK SIGN IN AND UNHIDE THE LOGOUT BUTTON -->
        <script type="text/javascript" src="js/authentication_brains.js"></script>
    </div>
    
</div>

<!-- IMPORT THE TOPSCORE LOGIC SCRIPT TO SORT THE HIGHSCORES AND DISPLAY THE LEADERBOARD TABLE -->
<script type="text/javascript" src="js/topscore_logic.js"></script>

<?php
    //OUTPUT THE FOOTER BY CALLING THE FUNCTION
    outputFooter();
?> 
<?php
    //INCLUDE PHP FILE TO BE USED ON THE PAGE 
    include('common.php'); 
	
    //OUTPUT HEADER AND NAVBAR BY CALLING THEIR FUNCTION 
    outputHeader("Sign In");
    outputNavbar("Sign In");
?>

<!-- CONTENTS OF THE PAGE -->
<!-- BODY DIV -->
<div class="body">
    <!-- INFO DIV TO DISPLAY PAGE NAME AND INFO -->
    <div class="info">
        <h3>Sign In</h3>
        <p>Fill in your username and password to sign in.</p>
        <!-- SIGN IN FORM -->
        <form action="">
                <!-- USERNAME LABEL -->
                <label for="uname"><b>username</b></label>
                <!-- USERNAME INPUT FIELD -->
                <input type="text" id="username" name="uname" placeholder="Enter username" autofocus><br>
                <!-- PASSWORD LABEL -->
                <label for="pass"><b>Password</b></label>
                <!-- PASSWORD INPUT FIELD -->
                <input type="password" id="password" name="pass" placeholder="Enter password"><br>
                <br><br>
                <!-- SIGN IN BUTTON -->
                <button class="sign" onclick="signin()">Sign In</button>
            <!-- SIGN UP LINK -->
            <p>Not a member? <br><br> <a href="signup.php">Sign Up</a></p>
        </form>
    </div>
    
</div>

<script type="text/javascript" src="js/authentication_brains.js"></script>

<?php
    //OUTPUT THE FOOTER BY CALLING THE FUNCTION
    outputFooter();
?>
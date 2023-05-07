<?php
    //INCLUDE PHP FILE TO BE USED ON THE PAGE 
    include('common.php'); 
	
    //OUTPUT HEADER AND NAVBAR BY CALLING THEIR FUNCTION 
    outputHeader("Sign Up");
    outputNavbar("Sign Up");
?>

<!-- CONTENTS OF THE PAGE -->
<!-- BODY DIV -->
<div class="body">
    <!-- INFO DIV TO DISPLAY PAGE NAME -->
    <div class="info">
        <h3>Sign Up</h3>
        <p>Fill in your details to create an account</p>
        </div>
        <!-- FOR TO SIGN UP A USER -->
        <form>
            <!-- USERNAME LABEL -->
            <label for="uname"><b>username</b></label>
            <!-- USERNAME INPUT FIELD -->
            <input type="text" id="UsernameInput" name="uname" placeholder="Enter username" autofocus><br>
            <!-- PASSWORD LABEL -->
            <label for="pass"><b>Password</b></label>
            <!-- PASSWORD INPUT FIELD -->
            <input type="password" id="PasswordInput" name="pass" placeholder="Enter password"><br>
            <!-- EMAIL LABEL -->
            <label for="email"><b>email</b></label>
            <!-- EMAIL INPUT FIELD -->
            <input type="email" id="EmailInput" name="email" placeholder="Enter email address"><br>
            <!-- DATE OF BIRTH LABEL -->
            <label for="dob"><b>DOB</b></label>
            <!-- DATE OF BBIRTH FIELD -->
            <input type="date" id="DOBInput" name="dob"><br>
            <!-- GENDER LABEL -->
            <label type=""><b>Gender</b></label>
            <!-- GENDER MALE RADIO  BUTTON -->
            <input type="radio" name="gender" id=" GenderMale" value="Male">
            <!-- GENDER MALE LABEL -->
            <label class="gender" for="male">Male</label>
            <!-- GENDER FEMALE RADIO BUTTON -->
            <input type="radio" name="gender" id="GenderFemale" value="Female">
            <!-- GENDER FEMALE LABEL -->
            <label class="gender" for="female">Female</label><br>
            <br><br>
            <!-- SIGN UP BUTTON -->
            <button class="sign" onclick="return(signupUser())">Sign Up</button>

        </form>
    </div>
</div>

<script type="text/javascript" src="js/authentication_brains.js"></script>
<?php
    //OUTPUT THE FOOTER BY CALLING THE FUNCTION
    outputFooter();
?>
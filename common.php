<?php
// OUTPUT THE HEADER FOR THE PAGE AND THE OPENING BODY TAG
function outputHeader($title){
    echo '<!DOCTYPE html>';
    echo '<html>';
    echo '<head>';
    echo '<title>' . $title . '</title>';
    echo '<!-- Link to external style sheet -->';
    echo '<link rel="stylesheet" type="text/css" href="css/styles.css">';
    echo '</head>';
    echo '<body>';
}

// OUTPUT THE NAVIGATION BAR
// THE SELECTED CLASS IS APPLIED TO PAGE THAT MATCH THE PAGE NAME
function outputNavbar($pageName){

    // OUTPUT LEFT ALIGNED NAVBAR LOGO
    echo '<div class="navbar">';

    echo '<div class="nav-left">';
    echo '<a class="logo" href="index.php">';
    echo '<img src="images/piethon-logo.png" alt="PIETHON">';
    echo '</a>'; 
    echo '</div>';
    
    echo '<div class="nav-center">';

    //ARRAY OF PAGES TO LINK TO
    $linkNames = array("Home", "Play Game", "How to Play","Leaderboard", "Sign In");
    $linkAddresses = array("index.php", "playgame.php", "howtoplay.php", "leaderboard.php", "signin.php");

    //OUTPUT CENTERED NAVIGATION LINKS
    for($x = 0; $x < count($linkNames)-1; $x++){
        echo '<a ';
        if($linkNames[$x] == $pageName){
            echo 'class="active"';
        }
        echo 'href="' . $linkAddresses[$x] . '">' . $linkNames[$x] . '</a>';
    }
    echo '</div>';

    // OUTPUT RIGHT ALIGNED SIGN IN LINK
    echo '<div class="nav-right">';
    echo '<a id="signin"';
    if($linkNames[4] == $pageName){
        echo 'class="active"';
    }
    echo 'href="' . $linkAddresses[4] . '">' . $linkNames[4] . '</a>';
    echo '</div>';
    echo '</div>';
}


function outputFooter(){
    // OUTPUT THE FOOTER
    echo '<div class="footer">';
            echo '<div class="nav-left">';
                echo '<p>Created with <3</p>';
            echo '</div>';
            echo '<div class="nav-center">';
                echo '<p>CST2120 Coursework 1: Game Website</p>';
                echo '<p>Mir Riaz Ali - M00794755</p>';
                echo ' <button class="sign" id="signout" onclick="signout()" hidden></button>';
            echo '</div>';
            echo '<div class="nav-right">';
            echo '<p>version: 1.0</p>';
        echo '</div>';
    echo '</div>';

    echo '</body>';
    echo '</html>';
}

?>
<?php
    //INCLUDE PHP FILE TO BE USED ON THE PAGE 
    include('common.php'); 
	
    //OUTPUT HEADER AND NAVBAR BY CALLING THEIR FUNCTION 
    outputHeader("How to Play");
    outputNavbar("How to Play");
?>

<!-- CONTENTS OF THE PAGE -->
<!-- BODY DIV -->
<div class="body">
    <!-- INFO DIV TO DISPLAY PAGE NAME AND INFO -->
    <div class="info">
        <h3>How to Play</h3>
    </div>
    <!-- CONTENT DIV TO DISPLAY THE RULES OF THE GAME -->
    <div class="content">
        <h4>Click on the tabs to see the rules of the game.</h4>
        <!-- THE RULES ARE DISPLAYED USING ACCORDIONS -->
        <!-- CONTROLS ACCORDION -->
        <div class="accordion">
            <!-- CHECKBOX INPUT FOR ACCORDION 1 -->
            <input id="accordion-1" type="checkbox">
            <!-- LABEL FOR ACCORDION -->
            <label for="accordion-1">Controls</label>
            <!-- CONTENT FOR ACCORDION -->
            <div class="accordion-content">
                <p>Use the arrow keys to move up/down/left/right.</p>
                <p>Move the snake towards a pie to eat it.</p>
                <p>The snake will get longer as it eats.</p>
            </div>
        </div>

        <!-- SCORES ACCORDION -->
        <div class="accordion">
            <!-- CHECKBOX INPUT FOR ACCORDION 2 -->
            <input id="accordion-2" type="checkbox">
            <!-- LABEL FOR ACCORDION -->
            <label for="accordion-2">Scoring</label>
            <!-- CONTENT FOR ACCORDION -->
            <div class="accordion-content">
                <p>Eat a pie - get 10 points.</p>
                <p>Eat a cake - get 20 points.</p>
                <p>Game will speed up after 100, 150, 200 points.</p>
            </div>
        </div>

        <!-- LIVES ACCORDION -->
        <div class="accordion">
            <!-- CHECKBOX INPUT FOR ACCORDION 3 -->
            <input id="accordion-3" type="checkbox">
            <!-- LABEL FOR ACCORDION -->
            <label for="accordion-3">Lives</label>
            <!-- CONTENT FOR ACCORDION -->
            <div class="accordion-content">
                <p>The snake gets only one life.</p>
                <p>The snake dies if it eats itself.</p>
                <p>The snake will also die if it goes beyond the walls.</p>

            </div>
        </div>
    </div>
    
</div>

<script type="text/javascript" src="js/authentication_brains.js"></script>


<?php
    //OUTPUT THE FOOTER BY CALLING THE FUNCTION
    outputFooter();
?> 
// FUNCTION TO LOAD THE RANKING TABLE ONTO THE SCREEN
function loadRankingTable() {
    let str = "<table id='score_table'><tr><th>Username</th><th>Score</th></tr>";
    for (let key of Object.keys(localStorage)) {
        let usr = JSON.parse(localStorage[key]);
        str += "<tr><td>" + usr.username + "</td><td>" + usr.highscore + "</td></tr>";
    }
    str += "</table>";
    document.getElementById("ranking").innerHTML = str;
}

// WINDOW ONLOAD TO RUN THE LOADRANKINGTABLE AND SORTLEADERBOARD FUNCTIONS ALSO CHECK SIGNIN WHEN THE PAGE LOADS.
window.onload = () => {
    
    loadRankingTable();
    sortLeaderboard();
    
        if (sessionStorage.signedInUsername !== undefined) {
            let userObject = JSON.parse(localStorage[sessionStorage.signedInUsername]);

            //alert("You're Signed in!"); //change with signed in button to log out
            document.getElementById("signin").innerHTML = userObject.username + ", Signed In";
            document.getElementById("signout").innerHTML = "Sign Out";
            document.getElementById("signout").hidden = false;
        }
    
}
    // FUNCTION TO SORT THE LEADERBOARD IN THE DESCENDING ORDER.
    function sortLeaderboard(){
        // save the table in variable.
        var score_table = document.getElementById("score_table");
        // set sort flag to true
        var sort = true;
        
        // while loop to run until sort flag is true
        while(sort) {
            // set sort flag to false.
            sort = false;
            // define and store the rows of table in variable
            let rows = score_table.rows;

            // let counter variable i set to 1
            let i;
            // for loop to loop through the entire table
            for(i = 1; i <(rows.length-1); i++) {
                // swap flag set to false.
                var swap = false;

                // take let one from table, save in variable.
                let row1 = rows[i].getElementsByTagName("td")[1];
                // take next row form table, save in variable.
                let row2 = rows[i+1].getElementsByTagName("td")[1];

                // check if the score in first row is less than the score in second row.
                if (parseInt(row1.innerHTML.toLowerCase()) < parseInt(row2.innerHTML.toLowerCase())){
                    // if ture then set swap flag to true.
                    swap = true;
                    // break the for loop.
                    break;
                }
            }
            // check if swap flag is set to true.
            if(swap) {
                // if true swap the first row with second row and second with first.
                rows[i].parentNode.insertBefore(rows[i+1], rows[i]);
                // set sort flag back to false.
                sort = true;
            }
        }

        
    }
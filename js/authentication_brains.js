// CHECK IF A USER IS SIGNED INTO THE WEBSITE
window.onload = checkSignin;

    // FUNCTION TO CHECK THE SIGNIN STATUS ON THE WEBSITE
    function checkSignin() {
        // check if user is signed in
        if (sessionStorage.signedInUsername === undefined){
            // if true change data of element.
            document.getElementById("notsignedin").innerHTML = "Not signed in."
        } else {
            // if false then create user object of the signed in user.
            let userObject = JSON.parse(localStorage[sessionStorage.signedInUsername]);
            // set username in sign in button
            document.getElementById("signin").innerHTML = userObject.username + ", Signed In";
            // set data in sign out button to  Sign Out
            document.getElementById("signout").innerHTML = "Sign Out";
            // unhide the sign out button
            document.getElementById("signout").hidden = false;
            // hide the not signed in element.
            document.getElementById("notsignedin").hidden = true;
        }
    }

    // FUNCTION TO TAKE THE USERNAME AND PASSWORD ENTERED TO SIGNIN THE USER INTO THE WEBSITE
    function signin() {
        let username = document.getElementById("username").value;
        // CHECK IF THE USERNAME IS REGISTERED AND SAVED IN THE LOCAL STORAGE
        if (localStorage[username] === undefined) {
            // alert user the username doesnt exist
            alert("Hmm... Seems like you dont have an account, or its the incorrect username.");
            return;
        }
        else {
            // if false create au user object of the username
            let userObject = JSON.parse(localStorage[username]);
            // take the password entered in the field, save in variable
            let password = document.getElementById("password").value;
            // check if password from user object is same as password entered
            if (password === userObject.password) {
                // if true alert sign in is success
                alert("You are Signed in!");
                // change the username in session storage to user object username
                sessionStorage.signedInUsername = userObject.username;
            }
            else {
                // if false alert the password entered is incorrect.
                alert("Incorrect Password!");
            }
        }
    }

    // FUNCTION TO SIGN OUT A USER FROM THE WEBSITE
    function signout() {
        // remove the username from session storage
        sessionStorage.signedInUsername = undefined;
        // alert user that user is now logged out.
        alert("Logged out successfully.");
        // change sign in button data back to Sign In
        document.getElementById("signin").innerHTML = "Sign In";
        // refresh the page
        location.reload();


    }

    // FUNCTION OT SIGN UP A USER ON THE WEBSITE BY TAKING ALL THE INPUTS FROM THE SIGN UP FORM
    function signupUser() {
        // VARIABLES TO SAVE USERNAME AND PASSWORD FROM THE FORM
        let username = document.getElementById("UsernameInput").value;
        let password = document.getElementById("PasswordInput").value;

        // SAVE THE EMAIL INPUT FROM FEILD
        let email = document.getElementById("EmailInput").value;
        // VARIABLE TO CHECK THE PLACE OF @ IN THE EMAIL ID
        atplace = email.indexOf("@");
        // VARIABLE TO CHECK THE PERIOD IN THE EMAIL ID
        periodplace = email.indexOf(".");


        // VARIABLE TO SAVE THE DOB INPUT FROM  THE FORM
        let dob = document.getElementById("DOBInput").value;

        // VARIABLE TO SAVE THE GENDERS 
        var radios = document.getElementsByName('gender');
        let gender = '';
        // FOR LOOP TO CHECK THE SELECTED GENDER BY THE USER IN THE FORM
        for (var i = 0; i < radios.length; i++) {
            if (radios[i].checked)
                gender = radios[i].value;
        }

        // CREATE A USER OBJECT
        let userObject = {
            username: username,
            password: password,
            email: email,
            dob: dob,
            gender: gender,
            highscore: 0
        };

        // FORM VALIDATION
        if (username === "" || localStorage.getItem(username) !== null) {
            alert("Invalid username. Try Again");
            document.getElementById("UsernameInput").focus();
            return false;
        }
        if (password === "") {
            alert("Enter Password!");
            document.getElementById("PasswordInput").focus();
            return false;
        }
        if (email === "") {
            alert("Invalid Email! Try Again");
            document.getElementById("EmailInput").focus();
            return false;
        }
        // CHECK IF THE EMAIL ID FORMAT IS INCORRECT
        if (atplace < 1 || (periodplace - atplace < 2)) {
            alert("Check if email is entered correctly");
            document.getElementById("EmailInput").focus();
            return false;
        }
        if (dob === "") {
            alert("Select your date of birth");
            document.getElementById("DOBInput").focus();
            return false;
        }
        if (gender === "") {
            alert("Select Gender");
            return false;
        }
        // SAVE THE USER OBJECT AS JSON
        localStorage[username] = JSON.stringify(userObject);
        alert("Registration Successful. Head on to the Sign In Page");
        return (true);

    }

const firebaseConfig = {
    apiKey: "AIzaSyCRmi_J1XzWMHpEtKu7EK77AvsxbsncXxo",
    authDomain: "elitmus-puzzle-hunt.firebaseapp.com",
    databaseURL: "https://elitmus-puzzle-hunt-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "elitmus-puzzle-hunt",
    storageBucket: "elitmus-puzzle-hunt.appspot.com",
    messagingSenderId: "924677180132",
    appId: "1:924677180132:web:4e7d65d50a430332293af1",
    measurementId: "G-VSJESPDVC1"
  };

firebase.initializeApp(firebaseConfig);
// 
const auth = firebase.auth()
const database = firebase.database()


function register() {
    // Get all our input fields
    email = document.getElementById('email').value
    password = document.getElementById('password').value
    full_name = document.getElementById('full_name').value
    // favourite_song = document.getElementById('favourite_song').value
    // milk_before_cereal = document.getElementById('milk_before_cereal').value

    // Validate input fields
    if (validate_email(email) == false || validate_password(password) == false) {
        alert('Email or Password is Outta Line!!')
        return
        // Don't continue running the code
    }
    if (validate_field(full_name) == false ) {
        alert('One or More Extra Fields is Outta Line!!')
        return
    }

    // Move on with Auth
    auth.createUserWithEmailAndPassword(email, password)
        .then(function () {
            // Declare user variable
            var user = auth.currentUser

            // Add this user to Firebase Database
            var database_ref = database.ref()

            // Create User data
            var user_data = {
                email: email,
                name: full_name,
                score: 0,
                last_login: Date.now()
            }

            // Push to Firebase Database
            database_ref.child('users/' + user.uid).set(user_data)

            // DOne
            alert('User Created!!')
        })
        .catch(function (error) {
            // Firebase will use this to alert of its errors
            var error_code = error.code
            var error_message = error.message

            alert(error_message)
        })
}
// Set up our login function
function login() {
    // Get all our input fields
    email = document.getElementById('email').value
    password = document.getElementById('password').value

    // Validate input fields
    if (validate_email(email) == false || validate_password(password) == false) {
        alert('Email or Password is Outta Line!!')
        return
        // Don't continue running the code
    }

    auth.signInWithEmailAndPassword(email, password)
        .then(function () {
            // Declare user variable
            var user = auth.currentUser
            var uid = user.uid;

            // Add this user to Firebase Database
            var database_ref = database.ref()

            // Create User data
            var user_data = {
                last_login: Date.now()
            }

            // Push to Firebase Database
            database_ref.child('users/' + user.uid).update(user_data)

            // DOne
            // alert('User Logged In!!')

            // logic.nextButton.addEventListener("click", onNextButtonClick);
            // logic.showChallenge();
            console.log("done");
            window.location.href="logic.html";
            

        })
        .catch(function (error) {
            // Firebase will use this to alert of its errors
            var error_code = error.code
            var error_message = error.message

            alert(error_message)
        })
}




// Validate Functions
function validate_email(email) {
    expression = /^[^@]+@\w+(\.\w+)+\w$/
    if (expression.test(email) == true) {
        // Email is good
        return true
    } else {
        // Email is not good
        return false
    }
}

function validate_password(password) {
    // Firebase only accepts lengths greater than 6
    if (password < 6) {
        return false
    } else {
        return true
    }
}

function validate_field(field) {
    if (field == null) {
        return false
    }

    if (field.length <= 0) {
        return false
    } else {
        return true
    }
}






function adminlogin() {
    // Get all our input fields
    email = document.getElementById('email').value
    password = document.getElementById('password').value

    // Validate input fields
    if (email!='adminemail@gmail.com' || password!='adminpassword') {
        alert('Email or Password is Outta Line!!')
        return
        // Don't continue running the code
    }
     else{

    
          
           
            window.location.href="admin.html";
            

        }
        
}
const challenges = [
    { 
        level: 1,
        description: "Find the hidden code (Hint: missing someone?)",
        imageUrl: "images/missingyou.png",
        ans: "missing you"
    },
    {
        level: 2,
        description: "break the image",
        
        imageUrl: "images/breakfast.jpg",
        ans: "breakfast"
    },
    {
        level: 3,
        description: "Find the text present in image to puzzle find the teasure",
        imageUrl: "images/level3.jpg",
        ans: "the clue is under your desk."
    },
    {
        level: 4,
        description: "Okay, I looked under my desk, and I found this; it's a rebus. So take the word BOOK and replace the B with an L . . . . so where should i look at?",
        imageUrl: "images/level4.webp",
        ans: "cat food"
    },
  
    {
        level: 5,
        description: "Now I have cat food, and my cat is on first floor",
        imageUrl: "images/staird.png",
        ans: "stairs"
    },
    {
        level: 6,
        description: "I got the answer stairs so i took stairs. This next clue appears to be written in some sort of code. Are those dots and dashes?",
        imageUrl: "images/level7.webp",
        ans: "bookshelf"
    },
    {
        level: 7,
        description: "I cracked the code: Go to the bookshelf. Now it looks like I have to do a maze",
        imageUrl: "images/level8.webp",
        ans: "what was in my coat pocket"
    },
    {
        level: 8,
        description: "slove the puzzle to win the Treasure",
        imageUrl: "images/level9.webp",
        ans: "plant"
    }

   

]


// Keep track of the current challenge
let currentChallengeIndex = 0;
var Score = 0;
document.getElementById("score").innerHTML = Score;


// Get references to the challenge container and next button
const challengeContainer = document.querySelector("#challenge-container");
const nextButton = document.querySelector("#next-button");
const PrevButton = document.querySelector("#prev-button");
const Answer = document.getElementById("Answer");


// Function to show the current challenge
function showChallenge() {
    const challenge = challenges[currentChallengeIndex];

    challengeContainer.innerHTML = "";


    const levelHeading = document.createElement("h2");
    levelHeading.textContent = `Level ${challenge.level}`;
    challengeContainer.appendChild(levelHeading);

    // Create and add a paragraph for the challenge description
    const descriptionParagraph = document.createElement("a");
    descriptionParagraph.textContent = challenge.description;
    challengeContainer.appendChild(descriptionParagraph);

    // Add additional elements based on the challenge type
    if (challenge.imageUrl) {
        // Create and add an image for the challenge
        const challengeImage = document.createElement("img");
        challengeImage.src = challenge.imageUrl;
        challengeContainer.appendChild(challengeImage);
    } else if (challenge.riddle) {
        // Create and add a paragraph for the riddle
        const riddleParagraph = document.createElement("p");
        riddleParagraph.textContent = challenge.riddle;
        challengeContainer.appendChild(riddleParagraph);
    } else if (challenge.task) {
        // Create and add a paragraph for the task
        const taskParagraph = document.createElement("a");
        taskParagraph.textContent = challenge.task;
        challengeContainer.appendChild(taskParagraph);
    }
}

// Function to handle clicking on the next button
function onNextButtonClick() {
    // Increment the current challenge index
    // currentChallengeIndex++;

    // Check if there are more challenges
    if (currentChallengeIndex < challenges.length) {
        // Show the next challenge
        showChallenge();
        // myFunction();
        document.getElementById("answer").value = "";
    } else {
        // Show a message indicating that all challenges have been completed
        alert("Congratulations! You have completed all challenges.");
    }
}

function onPreviousButtonClick() {
    // Increment the current challenge index

    // Check if there are more challenges
    if (currentChallengeIndex > 0) {
        currentChallengeIndex--;
        // Show the next challenge
        showChallenge();
    }
}


function logout(){
    console.log("ro")
    var config = {
        apiKey: "AIzaSyCRmi_J1XzWMHpEtKu7EK77AvsxbsncXxo",
         authDomain: "elitmus-puzzle-hunt.firebaseapp.com",
        databaseURL: "https://elitmus-puzzle-hunt-default-rtdb.asia-southeast1.firebasedatabase.app",
         projectId: "elitmus-puzzle-hunt",
        storageBucket: "elitmus-puzzle-hunt.appspot.com",
        messagingSenderId: "924677180132",
        appId: "1:924677180132:web:4e7d65d50a430332293af1",
         measurementId: "G-VSJESPDVC1",
     
    };
    console.log("rooo")
    
    if (!firebase.apps.length) {
        firebase.initializeApp(config);
        console.log("ro")
     }
     else {
        firebase.app(); // if already initialized, use that one
     }
     console.log("ro")
    firebase.auth().signOut().then(() => {
        console.log("log out done")
      }).catch((error) => {
        console.log("not")
      });
}

// Add an event listener to the next button
// nextButton.addEventListener("click", onNextButtonClick);
function myFunction() {
    
    var input = document.getElementById("answer").value;
    var modi = input.toLowerCase();

    // document.getElementById("output").innerHTML = input;
    var a = challenges[currentChallengeIndex].ans;


    console.log(input);
    console.log(modi == a)

    if (modi.length == 0) {
        alert("Please find the clue..!");
    }

    else if (modi == a) {
        
        alert("Answer is Correct and find the Next Clue");
        Score += 1;
        var config = {
            apiKey: "AIzaSyCRmi_J1XzWMHpEtKu7EK77AvsxbsncXxo",
             authDomain: "elitmus-puzzle-hunt.firebaseapp.com",
            databaseURL: "https://elitmus-puzzle-hunt-default-rtdb.asia-southeast1.firebasedatabase.app",
             projectId: "elitmus-puzzle-hunt",
            storageBucket: "elitmus-puzzle-hunt.appspot.com",
            messagingSenderId: "924677180132",
            appId: "1:924677180132:web:4e7d65d50a430332293af1",
             measurementId: "G-VSJESPDVC1",
         
        };
        
        if (!firebase.apps.length) {
            firebase.initializeApp(config);
         }else {
            firebase.app(); // if already initialized, use that one
         }
        const auth = firebase.auth()
        const database = firebase.database()

        var database_ref = database.ref()
        database_ref.child('users/').once("value")
        .then(function(snapshot) {
            snapshot.forEach(function(childSnapshot) {     
                var user = auth.currentUser
                // key will be "ada" the first time and "alan" the second time
                var key = childSnapshot.key;
                
                // childData will be the actual contents of the child
                var childData = childSnapshot.val();
                //console.log(user.email == childData.email)
                if(user.email == childData.email){
                    var user_data = {
                        score: Score
                    }
                    database_ref.child('users/' + key).update(user_data)
                }

                console.log(childData.score)

            });
        });
        document.getElementById("score").innerHTML = Score;
        nextButton.addEventListener("click", onNextButtonClick);
        currentChallengeIndex++;
        if(currentChallengeIndex==challenges.length){
            alert("Congratulations u have completed challange")
            logout();
            window.location.href="index.html";
        }
        else{
            showChallenge();
            document.getElementById("answer").value = "";
        }
    


    }
    else {
        alert("Answer is Incorrect..!");

    }
}

    function startAgain(){
        currentChallengeIndex=0;
        showChallenge()
    }



PrevButton.addEventListener("click", onPreviousButtonClick);
showChallenge();


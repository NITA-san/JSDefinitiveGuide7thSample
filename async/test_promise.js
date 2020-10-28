// Suppose you have a function like this to display a user profile
function displayUserProfile(profile) { /* implementation omitted */
    console.log("display")
}

function displayError(){
    console.log("error")
}

function getJSON(url) {
    return new Promise((resolve, reject) => {
        console.log("in promise")
//        resolve();
        reject();
     });
}

// Here's how you might use that function with a Promise.
// Notice how this line of code reads almost like an English sentence:
getJSON("/api/user/profile").then(displayUserProfile).catch(displayError);



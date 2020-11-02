// Suppose you have a function like this to display a user profile
function displayUserProfile(profile) { /* implementation omitted */
    console.log(profile);
    console.log("display")
}

function displayError(s) {
    console.log(s);
    console.log("error")
}

function getJSON(url) {
    return new Promise((resolve, reject) => {
        //        console.log("in promise")
        //        resolve();
        setTimeout(() => resolve("promise rejected! " + url), 2000);
        //        resolve();
    });
}

// Here's how you might use that function with a Promise.
// Notice how this line of code reads almost like an English sentence:
getJSON("/api/user/profile").then(displayUserProfile).catch(displayError);

function createPromise(url) {

    //    return new Promise((resolve) => resolve("promise rejected! " + url));
    return "return string! " + url;
}

async function getJSONAsync(url) {
    p = await createPromise(url);
    //    p = await getJSON(url);
    displayUserProfile(p);
//    createPromise(url).then(displayUserProfile)
}

getJSONAsync("/api/user/profile")


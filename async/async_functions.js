function fetch(uri) {
    return {
        highScore: 100,
        json: ()=>"response" + uri
    }
}

let response = {
}
response.json = () => "json response:";

async function getHighScore() {
    let response = await fetch("/api/user/profile");
    let profile = await response.json();
    return profile.highScore;
}

//console.log(getHighScore().then(s=>console.log(s)));
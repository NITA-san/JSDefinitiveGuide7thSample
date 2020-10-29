function fetch(url) {
    console.log("start fetch");
    return new Promise(() => url);
}

function getJSON(url) {
    return fetch(url).then(response => {
        console.log(response);
        response.json();
    });
}

console.log(getJSON("test"));
//setTimeout(response => response.json(), 1000);
url = "https://catfact.ninja/fact";

fetch(url)
    .then((response) => {
        return response.json();
    })
    .then((data1) => {
        console.log("data1 = ", data1);
        return fetch(url);
    })
    .then((response) => {
        return response.json();
    })
    .then((data2) => {
        console.log("data2 = ", data2);
    })
    .catch((error) => {
        console.log(error);
    });


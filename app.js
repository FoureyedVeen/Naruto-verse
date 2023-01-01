// const api_url = "https://api.github.com/octocat";

// async function getApi(url) {

//     const response = await fetch(url);

//     let data = await response.json();
//     data.length;
//     console.log(data);
// }
// getApi(api_url);

async function getApi() {
const response = await fetch("https://api.github.com/octocat")
    .then(response => response.json()) 
    // .then(data => {
        console.log(data);
        return data;
    }

getApi();
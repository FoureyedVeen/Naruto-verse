// const api_url = "https://naruto-details.herokuapp.com/clan";

// async function getapi(url) {

//     const response = await fetch(url);

//     let data = await response.json();
//     data.length;
//     console.log(data);
// }
// getapi(api_url);
async function getApi(url) {
const response = await fetch("https://naruto-details.herokuapp.com/clan", {mode: 'no-cors'})
    // .then(response => response.json() )
    .then(data => {
        console.log(data);
        return data;
    })
}
getApi();
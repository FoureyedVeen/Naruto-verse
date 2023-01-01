const api_url = "https://naruto-details.herokuapp.com/clan";

async function getapi(url) {

    const response = await fetch(url);

    let data = await response.json();
    data.length;
    console.log(data);
}
getapi(api_url);
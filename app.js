const api_url = "https://naruto-details.herokuapp.com/clan";

async function getapi(url) {

    const reply = await fetch(url);

    let data = await reply.json();
    data.length;
    console.log(data);
}
getapi(api_url);
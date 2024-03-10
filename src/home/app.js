init_api();
function init_api() {
    const url = "https://api.kedufront.juniortaker.com/item/";
    const api_data = fetch(url)
        .then(reponse => {
            if (reponse.status === 400) {
                throw new Error("Validation Error !");
            }
            if (reponse.status === 404) {
                throw new Error("404, Not found !")
            }
            if (reponse.status === 200) {
                console.log("API works !");
                return reponse.json();
            }
        })
}

function create_element(id, name, price, img) {
    let new_elem = {
        id: id,
        name: name,
        price: price,
        createdIn: new Date().getDate(),
        image: img,
        amount: 1
    };
    return new_elem;
}
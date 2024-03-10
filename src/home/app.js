const url = "https://api.kedufront.juniortaker.com/";

function get_data() {

    let elements = -1;
    const api_data = axios.get(url + "item/")
        .then(response => {
            console.log(response);
            if (response.status === 200) {
                console.log("API works !");
                return response.data;
            } else {
                console.error("HTTP GET error");
                elements = -1;
            }
        })
    return elements;
}

function create_product() {
    let product = get_data();

    if (product) {
        console.log("test");
    }
    for (let x = 0; x < product.length; x++) {
        console.log(product[x]);
    }
}

create_product();
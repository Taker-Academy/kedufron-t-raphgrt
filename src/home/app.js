const url = "https://api.kedufront.juniortaker.com/";

function getPicturefromID(id) {
    axios
        .get(url + `item/picture/${id}`)
        .then(response => {
            if (response.status !== 200) {
                console.error("Error picture !");
            } else {
                const pictureUrl = URL.createObjectURL(response.data);
                const pictureContainer = document.getElementById(`picture-container-${id}`);
                if (pictureContainer) {
                    const pictureElement = document.createElement('img');
                    pictureElement.src = pictureUrl;
                    pictureElement.alt = 'Item Image';
                    pictureContainer.appendChild(pictureElement);
                } else {
                    console.error(`Image container for item ${id} not found`);
                }
            }
        });
}


async function getItems() {
    try {
        const response = await axios.get(url +'item/');
        console.log(response);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

async function create_product() {
    let item_array = await getItems();
    const container = document.getElementById('items_emplacement');

    item_array.forEach(item => {
        const img_URL = url + `item/picture/${item._id}`;
        axios
            .get(url)
            .then(() => {});
        const new_div = document.createElement('div');
        new_div.className = 'item';
        new_div.innerHTML = `
        <a href="./products/${item.name}.html">
            <div id="image-container-${item.image}"></div>
            <h2>${item.name}</h2>
            <img src="${img_URL}" alt="item_image">
            <p>Prix: ${item.price}</p>
          </a>
        `;
        container.appendChild(new_div);
    });
}

create_product();
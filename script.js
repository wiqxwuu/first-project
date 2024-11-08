const box = document.querySelector('.box')
const API = "https://dummyjson.com/products"

async function getProducts(){
    try {
        
    const responce = await fetch(API)
    const data = await responce.json()

    console.log(data);
    showProducts(data.products)

    } catch (error) {
        console.log(error);
        
    }
}

function showProducts(data){
    box.innerHTML = data.map((item)=>{
        return `
        <div class="card">
            <h3>${item.title}</h3>
            <ul>
                <li>${item.brand}</li>
                <li>${item.category}</li>
                <li>${item.description}</li>
            </ul>
            <img src="${item.images[0]}" />
        </div>
        `
    }).join("")
}

getProducts()
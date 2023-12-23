// 1) set html with one element (DONE)
// 2) set the basic css (DONE)
// 3) fetch API (DONE)
// 4) set advanced css
//        - Animation at loading
//        - Overlay at hover


var containerElem = document.querySelector(".img-container")

fetch("https://fakestoreapi.com/products")
.then(function(response){
    return response.json()
})
.then(function(jsonData){
    console.log(jsonData)

    jsonData.forEach(function(product) {
        console.log(product)
        
        containerElem.innerHTML += `
        <div class="product">
         <img src="${product.image}" alt="">
            <div class="overlay">
                <p>${product.title}</p>
                <p>Price: ${product.price}</p>
                <p>Category: ${product.category}</p>
            </div>
         </div>`
    });
})
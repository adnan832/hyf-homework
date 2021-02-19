console.log('Script loaded');
let products = getAvailableProducts();
console.log(products);

//Add the products
let prices = products.map(product => product.price);
console.log(prices);
//calling sendPricestoserver
sendPricesToServer(prices, serverResponse);
function serverResponse() {
    console.log("Response from the server");
}
//render product function
function renderProducts(products) {
    let list = document.querySelector(".products > ul");
    list.innerHTML = " ";
    products.forEach((product) => {
        let listItem = document.createElement("li");
        //name
        let name = document.createElement("div");
        name.setAttribute("class", "name");
        name.innerHTML = product.name;
        listItem.appendChild(name);
        //Price
        let price = document.createElement("div");
        price.setAttribute("class", "price");
        price.innerHTML = product.price;
        listItem.appendChild(price);
        //rating
        let rating = document.createElement("div");
        rating.setAttribute("class", "rating");
        rating.innerHTML = product.rating;
        listItem.appendChild(rating);
        //ships-to
        let shipping = document.createElement("div");
        shipping.setAttribute("class", "shipping");
        shipping.innerHTML = product.shipsTo;
        listItem.appendChild(shipping);
        //nested ul for shipping
        let ShippingList = document.createElement("ul");
        shipping.appendChild(ShippingList);
        let shippingItemDk = document.createElement("li");
        shippingItemDk.innerHTML = "Denmark";
        ShippingList.appendChild(shippingItemDk);
        let shippingItemSw = document.createElement("li");
        shippingItemSw.innerHTML = "Sweden";
        ShippingList.appendChild(shippingItemSw);
        //button
        let btn = document.createElement("button");
        btn.innerHTML = "Add to cart";
        listItem.appendChild(btn);
        btn.onclick = () => addCart(product);
        //appending li to ul
        list.appendChild(listItem);
    })
}
renderProducts(products);

//filter/get products
let arrayOfinputs = document.getElementsByTagName("input");
console.log(arrayOfinputs);
arrayOfinputs[0].addEventListener("input", function () {
    let getProduct = arrayOfinputs[0].value;
    console.log(getProduct);

    //searching for the product
    let searchProduct = products.filter((product) => {
        return product.name.toLowerCase().includes(getProduct.toLowerCase());
    })
    console.log(searchProduct);
    renderProducts(searchProduct);
})

//Showing products that ships to country
let countrySelect = document.querySelector(".country select");
console.log(countrySelect);
countrySelect.addEventListener("change", function () {
    let selectedCountry = countrySelect.value;
    console.log(selectedCountry.toUpperCase());
    let selectByCountry = products.filter((product) => {
        for (let i = 0; i < product.shipsTo.length; i++) {
            return product.shipsTo[i].toUpperCase().includes(selectedCountry.toUpperCase());
        }
    });

    renderProducts(selectByCountry);
})

// Sort the products
let sortSelect = document.querySelector(".sort select");
console.log(sortSelect);
sortSelect.addEventListener("change", function () {
    let selectSortList = sortSelect.value;
    console.log(selectSortList);
    if (selectSortList === "cheap") {
        let cheapFirstList = products.sort((product1, product2) => product1.price - product2.price);
        renderProducts(cheapFirstList);

    } else if (selectSortList === "expensive") {
        let expensiveFirstList = products.sort((product1, product2) => product2.price - product1.price);
        renderProducts(expensiveFirstList);
    }
})

//Add cart
let result = 0;
function addCart(product) {
    let selectCart = document.querySelector(".cart");
    let selectUl = document.querySelector(".cart ul");
    let createList = document.createElement("li");
    selectUl.appendChild(createList);
    let createDivName = document.createElement("div");
    createDivName.setAttribute('class', 'name');
    createList.appendChild(createDivName);
    createDivName.innerHTML = product.name;
    let createDivPrice = document.createElement("div");
    createDivPrice.setAttribute('class', 'price');
    createList.appendChild(createDivPrice);
    createDivPrice.innerHTML = product.price;

    var total = document.querySelector(".total p");
    var resultValue = document.querySelector(".total span");
    var totalPrice = parseInt(resultValue.innerHTML);

    if (totalPrice) {
        totalPrice += product.price;
    }
    else {
        totalPrice = product.price;
    }
    resultValue.innerHTML = totalPrice;

}

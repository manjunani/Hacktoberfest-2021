// Simple carts system

let products = [
    {
        "id": 1,
        "name": "Apple",
        "stock": 50,
        "price": 15000
    },
    {
        "id": 2,
        "name": "Orange",
        "stock": 20,
        "price": 10000
    },
    {
        "id": 3,
        "name": "Grape",
        "stock": 30,
        "price": 20000
    },
]

let carts = {
    products: [],
    totalPrice: 0
}

function addProductToCart(productId, qty) {
    // Get index of products
    const productIndex = getIndexOfId(products, productId)

    // search index of product in carts
    const arrayIndex = getIndexOfId(carts.products, productId)

    // Check stock
    if (products[productIndex].stock < qty) {
        return console.error(`${products[productIndex].name} out of stock!`)
    }

    // Check if product not in carts
    if (arrayIndex === -1) {
        carts.products.push({
            id: products[productIndex].id,
            name: products[productIndex].name,
            qty: qty,
            price: products[productIndex].price
        })

        carts.totalPrice += products[productIndex].price * qty
    } else {
        carts.products[arrayIndex].qty += qty
        carts.totalPrice += products[productIndex].price * qty
    }

    // Update stock
    products[productIndex].stock -= qty
}

function removeProductFromCart(productId) {
    // Get index of products
    const productIndex = getIndexOfId(products, productId)

    // search index of product in carts
    const arrayIndex = getIndexOfId(carts.products, productId)
    const productsInCart = carts.products[arrayIndex]

    // Check if product is exist in carts
    if (arrayIndex > -1) {
        carts.products.splice(arrayIndex, 1)
        carts.totalPrice -= productsInCart.price * productsInCart.qty
    } else {
        return console.error("Product not found!")
    }

    // Update stock
    products[productIndex].stock += productsInCart.qty
}

function getIndexOfId(array, itemId) {
    return array
        .map(function (e) {
            return e.id
        }).indexOf(itemId)
}

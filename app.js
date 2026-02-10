let cart = [];
let total = 0;

function addToCart(item, price) {
    cart.push({ item, price });
    total += price;

    const cartList = document.getElementById("cart-list");
    const li = document.createElement("li");
    li.textContent = item + " - ₹" + price;
    cartList.appendChild(li);

    document.getElementById("total").textContent = total;
}

// Order button logic
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("order-btn").addEventListener("click", function () {

        if (cart.length === 0) {
            alert("Cart is empty!");
            return;
        }

        let orderDetails = "Your Order:\n";
        cart.forEach(function (product) {
            orderDetails += product.item + " - ₹" + product.price + "\n";
        });

        orderDetails += "\nTotal: ₹" + total;

        alert(orderDetails + "\n\nOrder placed successfully! 🎉");

        // Reset cart
        cart = [];
        total = 0;
        document.getElementById("cart-list").innerHTML = "";
        document.getElementById("total").textContent = total;
    });
});

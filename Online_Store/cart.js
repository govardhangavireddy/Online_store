function addtoCart(product,Price) {
    alert(product + " added to cart");
    var cart = document.getElementById("cart");
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(product+": $"+Price));
    cart.appendChild(li);
    var total = document.getElementById("total");
    var totalAmount = parseInt(total.innerText.split("$")[1]);
    totalAmount += parseInt(Price);
    total.innerText = "Total: $" + totalAmount;

}
function checkout(){
    var total = document.getElementById("total");
    var totalAmount = parseInt(total.innerText.split("$")[1]);
    if(totalAmount>0){
        alert("Thank you for shopping with us. Your total amount is $"+totalAmount);
        var cart = document.getElementById("cart");
        cart.innerHTML = "";
        total.innerText = "Total: $0";
    }
    else{
        alert("Your cart is empty");
    }
}
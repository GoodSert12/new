let cart = {};

if (localStorage.getItem("cart")) {
    cart = JSON.parse(localStorage.getItem("cart"));
}

let btns = document.querySelectorAll(".marimi_but");
for (let i = 0; i <= 4; i++) {
    let btn = btns[i];
    btn.addEventListener("click", add);
}


function add(event) {
    let imag = document.getElementById("image").getAttribute("src");
    let price = Number(event.target.dataset.price);
    let title = event.target.dataset.title;
    let id = event.target.dataset.id;
    let aux=localStorage.getItem("marimea");

    if (id in cart) {
        cart[id].qty++;
    } else {
        let cartItem = {
            imag: imag,
            title: title,
            price: price,
            marime:aux,
            qty: 1
        };
        
        cart[id] = cartItem
    }
    
    localStorage.setItem("cart", JSON.stringify(cart));
    
}



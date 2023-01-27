let cart = {};
if (localStorage.getItem("cart")) {
    cart = JSON.parse(localStorage.getItem("cart"));
}

var vals=[];
let tbody = document.getElementById("tbody");

for (let id in cart) {
    let item = cart[id];
    let tr = document.createElement('tr')

    let imag_td=document.createElement('td');
    imag_src=item.imag;
    let image=document.createElement("img");
    image.src=item.imag;
    image.classList.add("imagine");
    imag_td.append(image);
    tr.appendChild(imag_td);

    let title_td = document.createElement('td')
    title_td.textContent = item.title
    tr.appendChild(title_td)

    let marime_td = document.createElement("td");
    marime_td.textContent = item.marime;
    tr.appendChild(marime_td);

    let price_td = document.createElement("td");
    price_td.textContent = item.price +" Lei";
    tr.appendChild(price_td);

    let button_td = document.createElement("td");
    button_td.innerHTML = document.createElement("button");
    button_td.innerText = 'X';
    button_td.classList.add("sterge");
    button_td.onclick = removeCartItem;
    tr.appendChild(button_td);
   
    tbody.appendChild(tr)
   
    let aux=item.title + " " + item.marime ;
    vals.push(aux);
    localStorage.setItem("comanda",JSON.stringify(vals));

}

function removeCartItem(event) {
    var buttonClicked = event.target
    buttonClicked.parentElement.remove();

    window.localStorage.removeItem("cart");

}


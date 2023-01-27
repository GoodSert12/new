let aux = JSON.parse(localStorage.getItem('comanda'));
console.log(aux);

var text = document.getElementById('textarea');
for (let i = 0; i < 4; i++)
    if (aux[i] != null && aux[i] != undefined) {
         text.value +=" " +aux[i];
    }






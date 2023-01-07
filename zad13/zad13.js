const numberInput = document.getElementById('number-input');
const displayBtn = document.getElementById('display-btn');
const opis = document.getElementById('opis');

const display = () => {
    let p = document.createElement('p');
    let liczba = parseInt(numberInput.value);
    if (liczba>0){
        p.textContent = liczba + " Liczba jest większa od 0";
        opis.appendChild(p);
    }
    else{
        p.textContent = liczba + " Liczba jest ujemna lub 0"
        opis.appendChild(p);
    }
}
displayBtn.addEventListener('click', display)
const addBtn = document.getElementById('add-btn');
const resultOut = document.getElementById('result-out');

const a = 75;
const b = 123;
const add = () => {
    const h1 = document.createElement('h1');
    let result = a + b;
    h1.textContent = result;
    resultOut.appendChild(h1);
}


addBtn.addEventListener('click',add);
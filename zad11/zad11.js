const showBtn = document.getElementById('show-btn');
const resultOut = document.getElementById('result-out');

const show = () => {
    for(var i = 1; i <= 100; i++){ 
        const span = document.createElement('span');
        if(i === 100) {
            let result = i;
            span.textContent = result;
            resultOut.appendChild(span);
        }
        else{ 
            let result = i + ', ' ;
            span.textContent = result;
            resultOut.appendChild(span);
        }
    }
}

showBtn.addEventListener('click',show);
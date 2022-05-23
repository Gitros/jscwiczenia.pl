const daneBtn = document.getElementById('dane-btn');
const resultOut = document.getElementById('result-out')

let text = '<table>';
for (var i = 0; i < 10; i++){
    text+='<tr><td>' + i + '</td><td>' + (i*i) + '</td> </tr>';
}
text+='</table>';
daneBtn.innerHTML = text;
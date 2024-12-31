const form = document.querySelector("form");
let linhas = '';
const corpoTabela = document.querySelector("tbody");


form.addEventListener("submit", function(e){
    e.preventDefault();
    
    const nomeContato = document.getElementById("nome");
    const telefoneContato = document.getElementById("telefon");
    
    //OBS.: (linha +=) === (linha = linha +)
    
    let linha = '<tr>';
    linha = linha + `<td>${nomeContato.value}</td>`;
    linha = linha + `<td>${telefoneContato.value}</td>`;
    linha = linha + `<td style = "color: #78A75A;"> Salvo </td>`;
    linha = linha + '</tr>';

    linhas = linhas + linha;
    //console.log(linhas);

    corpoTabela.innerHTML = linhas;

    nomeContato.value = '';
    telefoneContato.value = '';
});




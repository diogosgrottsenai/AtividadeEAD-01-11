function atividadeNroPar(){
    var valor = document.atividadeEAD1.atividade1.value;

    var regExp = new RegExp("^([0-9]+)$")
    if(!regExp.test(valor) || valor == ""){
        alert("Campo deve possuir apenas números inteiros e não pode estar vazio.");
        return false;
    }

    if(valor % 2 == 0)
        alert(`O número ${valor} é par`);
    else
        alert(`O número ${valor} é impar`);
}

function atividadeContaCinquenta(){
    var valorMax = 50;
    var resultado = ""
    for(var i = 0; i <= valorMax; i++){
        if(i % 2 == 0)
            resultado += `${i} `;
    }

    document.atividadeEAD2.atividade2.value = resultado;
}

function atividadeMesEstacao(){
    var valor = document.atividadeEAD3.atividade3.value;
    if(valor == ""){
        alert("Selecione um mês")
        return
    } else {
        if(valor == 1)
            alert("Estação: Verão")
        else if(valor == 2)
            alert("Estação: Outono")
        else if(valor == 3)
            alert("Estação: Inverno")
        else if(valor == 4)
            alert("Estação: Primavera")
    }
}

function atividadeTabuada(){
    var valor = document.atividadeEAD4.atividade4.value;
    var regExp = new RegExp("^([0-9]+)$")
    if(!regExp.test(valor) || valor == ""){
        alert("Campo deve possuir apenas números inteiros e não pode estar vazio.");
        return false;
    }

    var resposta = "";
    for(var i = 1; i <= 10; i++){
        if(i != 10){
            var multiplicacao = valor*i;
            resposta += `${valor} x ${i} = ${multiplicacao} \n`
        } else {
            var multiplicacao = valor*i;
            resposta += `${valor} x ${i} = ${multiplicacao}`
        }
    }
    document.atividadeEAD4.resultado.value = resposta
}
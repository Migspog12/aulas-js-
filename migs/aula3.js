function negocio(){
numero = Number(document.getElementById('n1').value)



if( numero > 0 ){
    alert('Positivo')
}else if( numero < 0 ){
    alert('Negativo')
}else{
    alert('N/A')
}
}

function verificaSenha(){
    senha = document.getElementById('senha').value

    if( senha == '1234' ){
        document.getElementById('resposta').innerHTML = '<p class"acerto" >Acesso Permitido</p>'
    }else{
        document.getElementById('resposta').innerHTML = '<p class"erro" >Acesso Negado</p>'
    }   
}

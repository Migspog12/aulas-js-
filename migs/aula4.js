function mudarLargura(){
    largura = Number(document.getElementById('largura').value)
    document.getElementById('caixa').style.width = largura+'px'
}

function mudarAltura(){
    altura = Number(document.getElementById('altura').value)
    document.getElementById('caixa').style.height = altura+'px'
}

function mudarCor(){
    cor = document.getElementById('cor').value
    document.getElementById('caixa').style.backgroundColor = cor
}
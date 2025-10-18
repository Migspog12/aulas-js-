function editarcaixa(){
    
    caixa = document.getElementById('caixa')

    largura = Number(document.getElementById('largura').value)
    caixa.style.width = largura+'px'

    altura = Number(document.getElementById('altura').value)
    caixa.style.height = altura+'px'

    cor = document.getElementById('cor').value
    caixa.style.backgroundColor = cor

    text = document.getElementById('text').value
    caixa.innerText = text

    radius = Number(document.getElementById('radius').value)
    caixa.style.borderRadius = radius+'px'

    borderwidth = Number(document.getElementById('borderwidth').value)
    borderstyle = document.getElementById('borderstyle').value
    cor2 = document.getElementById('cor2').value

    caixa.style.border = borderwidth+'px '+borderstyle+' '+cor2
}
lista = []
function addItem(){

    item = document.getElementById('item').value.trim()
    item = item[0].toUpperCase() + item.slice(1).toLowerCase()
    document.getElementById('item').value = ''
    if( item.length == 0 || item.length > 20){
        alert('O item precisa ter entre 1 a 20 caracteres')
    
    }else if( lista.includes(item)){
        alert('esse item ja esta na lista')
    }else{
        lista.push(item)
    }        
    if(lista.length > 0){
        document.getElementById('lista').innerHTML = '<li>'+lista.join('</li><li>')+'</li>'
    }


}








/*

lista = []              declaração da lista

lista                   retorna a lista completa
lista[0]                retorna o item na posição informada
lista.length            retorna o tamanho da lista
lista[lista.length-1]   retorna o último item da lista
lista[0] = 'x'          altera o item na posição informada
lista.slice(1,3)        retorna um trecho da lista entre os índices informados
lista.join('/')         retorna a lista com os itens separados por "/"

lista.push('z')         adiciona um item no fim da lista
lista.unshift('a')      adiciona um item no início da lista
lista.splice(2,0,'f')   adiciona um item na posição informada

lista.pop()             remove um item no fim da lista
lista.shift()           remove um item no início da lista
lista.splice(2, 1)      remove um item na posição informada

lista.includes('p')     retorna a existência do item informado
lista.indexOf('r')      retorna o índice do item informado

lista.sort()            ordena a lista alfabeticamente
lista.reverse()         inverte a lista

*/
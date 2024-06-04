const pergunta = document.getElementById('pergunta')
const convidado = document.getElementById('convidado')
const btnConvidado = document.getElementById('btn-convidado')

btnConvidado.addEventListener('click', () => {
    pergunta.style.display = 'none'
    convidado.style.display = 'block'
})
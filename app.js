const livros = require('./database')

const readline = require('readline-sync')

const entradaInicial = readline.question('Deseja buscar um livro? S/N')

if(entradaInicial.toLocaleUpperCase() === 'S'){
    console.log('Essas são as categorias disponíveis:')
    console.log('/ficcao','/historia','/comedia')

    const categoriaEscolhida = readline.question("Qual categoria você escolhe:")

    const retorno = livros.filter(livro => livro.categoria === categoriaEscolhida)

    console.table(retorno)
} else {
    const livrosOrdenados = livros.sort((a,b)=> a.paginas - b.paginas)
    console.log('Estes são todos os livros ordenados:')
    console.table(livrosOrdenados)
}
/* 
    ∞ Buscando e contando dados em Arrays ∞
    Baseado no Array de Livros por Categoria abaixo, faça os seguintes desafios
        • Contar o número de categorias e o número de livros em cada categoria
        • Contar o número de autores
        • Mostrar livros do autor Auguto Cury
        • Transformar a função acima em uma função que irá receber o nome do autor e devolver os livros desse autor.
*/

const booksByCategory = [
    {
        category: "Riqueza",
        books: [
            {
                title: "Os segredos da mente milionária",
                author: "T. Harv Eker",
            },
            {
                title: "Pai rico, pai pobre",
                author: "Robert T. Kiyosaki",
                
            },
            {
                title: "O homem mais rico da Babilônia",
                author: "George S. Clason",
            },
        ],
    },
    {
        category: "Tecnologia",
        books: [
            {
                title: "O Programador Apaixonado",
                author: "Chad Fowler",
            },
            {
                title: "Código Limpo",
                author: "Robert Cecil",
            },
            {
                title: "Não me faça pensar",
                author: "Steve Krug",
            },
        ],
    },
];

const totalCategories = booksByCategory.length

console.log(totalCategories);
for(let category of booksByCategory){
    console.log('Total de livros da categoria:', category.category)
    console.log(category.books.length)
}

function countAuthors() {
    let authors = [];

    for(let category of booksByCategory) {
        for(let book of category.books) {
            if(authors.indexOf(book.author) == -1) {
                authors.push(book.author)
            }
        }
    }
    console.log("Total de autores: ", authors.length)
}

countAuthors();

function booksOfAuthor(author){
    let books = [];

    for(let category of booksByCategory) {
        for(let book of category.books) {
            if(book.author === author){
                books.push(book.title)
            }
        }
    }
    console.log(`Livros do autor ${author}:  ${books.join(", ")}`)
}
booksOfAuthor('Robert T. Kiyosaki')
const books = [
    {title: 'El Quijote', avg_rating: 4.5},
    {title: 'Don Juan', avg_rating: 3.8},
    {title: 'Cien años de soledad', avg_rating: 4.7},
    {title: 'Matar a un Ruiseñor', avg_rating: 5},
    {title: 'El gran Gatsby', avg_rating: 3.6},
];

books.map(function(books){
    console.log(`el titulo de ${books.title}tiene${books.avg_rating} puntos`)
});

const result = books.filter(function(books){
    
    return books.avg_rating > 4
});
console.log('resultado', result);

var resultados2 = result.map(function(books){
    return {title: books.title, rating: books.savg_rating}
});

console.log(resultados2);

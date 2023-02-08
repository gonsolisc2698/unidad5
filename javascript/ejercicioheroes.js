const heros = [
    {name: 'Spider-Man'},
    {name: 'Thor'},
    {name: 'Captain Marvel'},
    {name: 'Silver Surfer'},
];

const superheros = heros.map(function(heros, index){
    return{id:index, superhero:heros.name}
});

console.log(superheros);
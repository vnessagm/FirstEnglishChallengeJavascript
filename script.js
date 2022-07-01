//* Crie 3 variáveis, cada uma com um array:
// - Comedy
// - Action
// - Fantasy 
//* Dentro de cada array, insira 3 (TRÊS) Objetos, contendo:
// - title:
// - director:
// - year: 

let comedy = [
    {
        title: "Mean Girls",
        director: "Mark Waters",
        year: 2004
    }, 
    {
        title: "Popstar:Never Stop never stopping",
        director: "Akiva Schaffer, Jorma Taccone",
        year: 2016
    }, 
    {
        title: "Click",
        director: "Frank Coraci",
        year: 2006
    }
];
console.log(comedy);

let action = [
    {
        title: "Batman Begins",
        director: "Christopher Nolan",
        year: 2005
    }, 
    {
        title: "Batman the dark knight",
        director: "Christopher Nolan",
        year: 2008
    }, 
    {
        title: "The Batman",
        director: "Matt Reeves",
        year: 2022
    }
];
console.log(action);

let fantasy = [
    {
        title: "Harry Potter the philosopher's stone ",
        director: "Chris Columbus",
        year: 2001
    },
    {
        title: "Harry Potter and the Prisoner of Azkaban",
        director: "Alfonso Cuarón",
        year: 2004
    }, 
    {
        title: "Harry potter the deathly hallows",
        director: " David Yates",
        year: 2010
    }
];
console.log(fantasy);
// DESAFIO EXTRA //

//* Escolha uma variável e insira uma condição para ela, (condição de sua escolha), com a seguinte mensagem ao console: 
// IF: "MY FAVORIT MOVIE IS..."
// ELSE: "NOT EVEN 5 STARS..." 

let movie = fantasy[1].title;
if (movie === "Harry Potter and the Prisoner of Azkaban"){
    console.log(`My favorite movie is:`, movie)
}else{
    console.log('NOT EVEN 5 STARS!!!!')
}
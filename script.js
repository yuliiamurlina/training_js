"use strict";

let numberOfFilms;

function start(){
    numberOfFilms = prompt('Сколько фильмов вы посмотрели?', '');
    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = prompt('Сколько фильмов вы посмотрели?', '');
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

let a, 
    b;

// for(let i = 0; i < 2; i++){
//     a = prompt('Какой последний просмотренный вами фильм?');
//     b = +prompt('Какую оценку он заслужил?');
//     if( a !== null && b !== null && a.length < 50 && a !== '' && b !== '') {
//         personalMovieDB.movies[a] = b;
//     } else {
//         alert('Что-то пошло не так! Попробуйте снова!');
//         i--;
    
//     }
// }

function rememberMyFilms(){
    let i = 0;
    while (i < 2) {
        a = prompt('Какой последний просмотренный вами фильм?');
        b = +prompt('Какую оценку он заслужил?');
        if ( a !== null && b !== null && a.length < 50 && a !== '' && b !== '') {
            personalMovieDB.movies[a] = b;
        } else {
            alert('Try again');
            i--;
        }
        i++;
    }

}

rememberMyFilms();

function detectPersonalLevel(){
    if (numberOfFilms < 10) {
        alert('Вы просмотрели мало фильмов');
    } else if ( numberOfFilms > 10 && numberOfFilms < 30 ) {
        alert('Вы обычный зритель');
    } else {
        alert('Вы киноман');
    }
    
    
    
}

detectPersonalLevel();

function showMyDB(){
    if(personalMovieDB.privat === false) {
        console.log(personalMovieDB);
    }
}

showMyDB();

function writeYourGenres () {
   for(let i = 1; i <= 3; i++){
        let a = prompt(`Ваш любимый жанр под номером ${i}?`);
        if (a !== '' && a !== null && typeof(a) === "string")  {
            personalMovieDB.genres[i - 1] = a;
        } else {
            a = prompt(`Ваш любимый жанр под номером ${i}?`); 
            i--;
        }
    }
    console.log(personalMovieDB.genres);
}

writeYourGenres();
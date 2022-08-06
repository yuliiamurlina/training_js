"use strict";

const numberOfFilms = +prompt('How much films do you watched?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt('What is the name of one of the last watched films?'),
    b = +prompt('How would you rate it?'),
    c = prompt('What is the name of one of the last watched films?'),
    d = +prompt('How would you rate it?');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);
 


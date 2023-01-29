"use strict";

let numberOfFilms;

function start(){
  while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)){
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
  }
}
// start();

function detectPersonalLevel (){
  if(numberOfFilms < 10){
    console.log('Просмотрено мало фильмов');
  }else if(10 > numberOfFilms < 30){
    console.log('Вы класический кинозритель!');
  }else if(numberOfFilms > 30){
    console.log('Вы киноман!');
  }else {
    console.log('error');
  }
}

// detectPersonalLevel();



const personalMovieBD = {
  count: numberOfFilms,
  movies : {
    
  },
  actors : {

  },
  genres : [],
  privat : false
};



function rememberMyFIlms(){
  for(let i = 0; i < 2; i++){
    const a = prompt("Один из последних просмотренных фильмов?",""),
       b = prompt("На сколько оцените его?","");
       if(a===''|| a === null || a.length > 50 || b===''|| b === null){
        alert("Повторите попытку!")
        i--;
       }else{
        personalMovieBD.movies[a] = b;
       }
  }
}

// rememberMyFIlms();

function writeYourGenres(){
  for(let i = 0; i <= 2; i++){
    personalMovieBD.genres[i] = prompt(`Назвите ваш любимый жанр под номером ${i + 1}`, "")
  }
}
writeYourGenres();


function showMyBD(hiden){
  if(!hiden){
    console.log(personalMovieBD);
  }else{
    console.log('Its object private')
  }
}

showMyBD(personalMovieBD.privat);


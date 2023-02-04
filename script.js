"use strict";
let numberOfFilms;


const personalMovieBD = {
  count: numberOfFilms,
  movies : {  },
  actors : { },
  genres : [],
  privat : false,
  start : function (){
    while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)){
      numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
    }
  },
  detectPersonalLevel : function  (){
    if(numberOfFilms < 10){
      console.log('Просмотрено мало фильмов');
    }else if(10 > numberOfFilms < 30){
      console.log('Вы класический кинозритель!');
    }else if(numberOfFilms > 30){
      console.log('Вы киноман!');
    }else {
      console.log('error');
    }
  },
  rememberMyFIlms : function (){
    for(let i = 0; i < 2; i++){
      const a = prompt("Один из последних просмотренных фильмов?","").trim(),
         b = prompt("На сколько оцените его?","");
         if(a===''|| a === null || a.length > 50 || b===''|| b === null){
          alert("Повторите попытку!")
          i--;
         }else{
          personalMovieBD.movies[a] = b;
         }
    }
  },
  writeYourGenres : function (){
    
    for(let i = 1; i <= 3; i++){
      let genre = prompt(`Назвите ваш любимый жанр под номером ${i}`, "");
      if(genre === '' || genre === null){
        console.log(1)
        i--;
      }else{
        personalMovieBD.genres[i - 1 ] = genre;
      }
      
    }
    personalMovieBD.genres.forEach(function(item, index){
      console.log(`Ваш любимый жанр ${index + 1} - это ${item} `)
    })
  },
  showMyBD : function (hiden){
    if(!hiden){
      console.log(personalMovieBD);
    }else{
      console.log('Its object private')
    }
  },
  toggleVisibleMyDB : function(){
    if(personalMovieBD.privat){
      personalMovieBD.privat = false;
    }else{
      personalMovieBD.privat = true;
    }
  }
};



personalMovieBD.start();
personalMovieBD.detectPersonalLevel();
personalMovieBD.rememberMyFIlms();
personalMovieBD.writeYourGenres();
personalMovieBD.showMyBD(personalMovieBD.privat);
personalMovieBD.toggleVisibleMyDB(personalMovieBD.privat)


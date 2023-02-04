const Polina = {
  health : 80,
  work : 0,
  hope : 55,
  working : function() {
    console.log('I dont want working')
  }
}

// const Lubov = Object.create(Polina);

const lubov = {
  health: 100
}

Object.setPrototypeOf(lubov, Polina);

console.log(lubov.health);

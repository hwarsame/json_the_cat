const request = require('request');
const fs = require('fs');

let userInput = process.argv[2];

const data = function(breedName) {
  console.log(breedName);
  request(`https://api.thecatapi.com/v1/breeds/search?q=${userInput}`, (error , response, body)=> {
    // console.log (body);
    if (error === true) {
      console.log('Error:', error);
    } else {
      // console.log('body:', body.length)
      const bodyB = JSON.parse(body);
      // console.log('bodyB:', bodyB.length)
      if (bodyB.length === 0) {
        console.log('Breed was not found');
      } else {
        console.log(bodyB[0].description);
      }
    }
  });
};

data(userInput);
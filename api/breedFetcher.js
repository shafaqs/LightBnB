const request = require('request');


function fetchBreed(breed) {
  const url = `https://api.thecatapi.com/v1/breeds/search?q=${breed}`;
  request(url, function(error, response, body) {
    if (error) {
      console.log(error);
      return;
    }
    const data = JSON.parse(body);
    if (data.length === 0) {
      return console.log('Breed not found');
    }
    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    ;
    // console.log(data);
    // console.log(typeof data);
    console.log(breed, ":", data[0].description);
  });
}

fetchBreed(process.argv[2]);


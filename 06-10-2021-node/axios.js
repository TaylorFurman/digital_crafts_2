//prints out HTML from url webpage

var axios = require('axios');
var url = 'https://nodejs.org/en/';

axios.get(url)
.then((response) =>{
    console.log(response);
})
.catch((e) =>{
    console.error(e);
})
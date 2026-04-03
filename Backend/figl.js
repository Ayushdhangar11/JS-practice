const figlet = require('figlet');


figlet('Ayush Dhangar', (err, data) => {
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }
    console.log(data);
});
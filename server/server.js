const path = require("path");
const fs = require("fs");


let chirpArray = [
{ user: "jimmy", msg: "I have to pee" }, 
{ user: "billy", msg: "me too"}, 
{ user: "bob", msg: "me three" },
{ user: "tim", msg: "jeez y'all can't hold nothin"},
{ user: "jim", msg: "shut up tim, you bonehead"}];

let thePath = path.join(__dirname, "../chrips.json")

fs.writeFile(thePath, JSON.stringify(chirpArray), (err) => { 
    if(err) console.log(err);

    console.log("You did it!");
});

fs.readFile('chirps.json', (err, data) => { 
    if(err) console.log(err);

    let readChirps = JSON.parse(data);
    console.log(readChirps);
});
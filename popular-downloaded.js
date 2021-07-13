const path = require('path');
const fs = require('fs');
const rp = require('request-promise');

let options = {
    json: true,
}

rp('https://reddit.com/r/popular.json', options)
    .then((payLoad) => {
        payLoad.data.children.forEach((item) => {
            if (path.extname(item.data.url) == ".jpg" || path.extname(item.data.url) == ".png" || path.extname(item.data.url) == ".gif") {
                const imageRequestOptions = {
                    url: item.data.url,
                    encoding: "base64"
                };

                rp(imageRequestOptions)
                    .then((image) => {
                        fs.writeFile(`./downloads/${item.data.id}${path.extname(item.data.url)}`, image, "base64", (err) => {
                            if (err) throw err;
                            console.log("You did it!");
                        })
                    })
            }
        })

    })

    .catch((err) => {
        console.log(err);
    });
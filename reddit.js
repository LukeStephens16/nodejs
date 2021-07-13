const rp = require("request-promise");
const fs = require("fs");

rp('https://reddit.com/r/popular.json')
    .then(res => JSON.parse(res))
    .then((any) => {

        let articleArray = [];

        any.data.children.forEach(any => {
            articleArray.push({
                title: any.data.title,
                url: any.data.url,
                author: any.data.author
            });

            let article = JSON.stringify(articleArray);
            fs.writeFileSync("popular-articles.json", article);
        });
    })
    .catch((err) => {
        console.log(err);
    });
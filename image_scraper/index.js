let axios = require('axios');
let cheerio = require('cheerio');
let fs = require('fs'); 


axios.get('https://www.latimes.com/nation/la-na-pol-troops-border-20181204-20181203-dlg6yksd5bbwjdl7iheirbgn4i-story.html')
    .then((response) => {
        if(response.status === 200) {
            const html = response.data;
            const $ = cheerio.load(html);
            let imgList = [];
            $('img').each(function(i) {
                imgList[i] = {
                    url: $(this).attr('src') //Adds the urls of all the images 
                }   
            });
            console.log(imgList);
    }
    }, (error) => console.log(err) );
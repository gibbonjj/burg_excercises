let Article = require('./models/articles');

let mongoose = require('mongoose');

let scraper = require('googlenews-rss-scraper');

mongoose.connect('mongodb://localhost:27017/burg_activities', { useNewUrlParser: true });

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {

    setInterval(scrapeNews,5000);

});

function scrapeNews() {
    scraper.getGoogleNewsRSSScraperData( { newsType: 'Query', newsTypeTerms: 'Los Angeles,Long Beach,Los Angeles Homeless' }, function(data) {
        if (!data.error) {
            Article.collection.insertMany(data.newsArray, {ordered: false}, function(err) {
                if (err) throw err;
            Article.find({}, function(err, burg_activities) {
                if (err) throw err;
            });
            });
        }
        else {
            console.log('Some error occured.');
        }
    });
};
# burg_excercises

I haven't worked with node.js much but since you mentioned you work in node.js, express.js, and MongoDB I figured I'd try to solve these excersises using those.

RSS_Feed:
I used the googlenews-rss-scraper which is a little buggy.  The google url to make rss calls is deprecated but I found the new url that can be changed in the index.js file of the node_modules/googlenews-rss-scraper.  Calls would sometimes not work due to the sanity check in that same file. It needs further debugging.
I used MongoDB and mongoose to create a database schema for the articles model.  A unique attribute under the "title:" column ensures no repeat articles are added to the db.
The Article:collection:insertMany function inserts the newsArray from the returned rss call.  The {ordered: false} parameter allows the program to not crash if repeat titles are in the newsArray that are already in the database.
The setInterval function makes a call to the rss which is set at 5 seconds.
Not sure if you were looking for the date in the database as the article publish date or the date added to the database.  I used the article publish date returned from the call. It needs to be reformatted to meet the format you were looking for.

Image_scraper:
I used the cheerio and axios packages to get the html from the url then searched for all images and added all image urls on the page to an array.  Further refinement will need to be made to determine which attributes filter out the desired image.

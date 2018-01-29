import FeedParser from 'feedparser';
import request  from 'request'; // for fetching the feed
 
// https://jovemnerd.com.br/feed-nerdcast/
// 

const feedLoader = (callback) => {
    const CORS_PROXY = "https://cors-anywhere.herokuapp.com/";
    const req = request(CORS_PROXY + 'http://cinemacomrapadura.com.br/feed/')
    const feedparser = new FeedParser();
    const feed = [];    
     
    req.on('error', function (error) {
      // handle any request errors
    });
     
    req.on('response', function (res) {
      var stream = this; // `this` is `req`, which is a stream
     
      if (res.statusCode !== 200) {
        this.emit('error', new Error('Bad status code'));
      }
      else {
        stream.pipe(feedparser);
      }
    });
     
    feedparser.on('error', function (error) {
      console.log(error);
    });
     
    feedparser.on('readable', function () {
      var item;
    
      while (item = this.read()) {
        feed.push(item);
      }      
    });    

    feedparser.on('end', () => {
        callback(feed);   
    });
}

export default feedLoader;
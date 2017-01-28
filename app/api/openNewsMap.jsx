var axios = require('axios');

const OPEN_NEWS_MAP = ' https://newsapi.org/v1/articles?apiKey=9daf6c579cab4d84b98347e750890a31&sortBy=top';

module.exports={
  get: function(source){
    var encodedSource = encodeURIComponent(source);
    var requestUrl = `${OPEN_NEWS_MAP}&source=${encodedSource}`;

    return axios.get(requestUrl).then(function(res){
      if(res.data.cod && res.data.message){
        throw new Error(res.data.message);
      }else{

          return (
          articles: [{
            author:res.data.articles.author,
            title:res.data.articles.title,
            description:res.data.articles.description,
            url: res.data.articles.url
          }]


  );

      }
    },function(res){
      throw new Error(res.data.message);
    });
  }
}

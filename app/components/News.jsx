var React = require('react');
var openNewsMap = require('openNewsMap');
var NewsForm = require('NewsForm');
var NewsMessage = require('NewsMessage');
var News = React.createClass({
  getInitialState: function(){
    return {
      isLoading : false
    }
  },
   handleFind: function(source){
     var that = this;
     this.setState({isLoading:true});
     openNewsMap.get(source).then(function(articles){
       that.setState({
         articles:articles,
        source:source,
         isLoading:false
       });
     },function(errorMessage){
       that.setState({isLoading:false});
       alert(errorMessage);
     });
  },

  render:function (){
    var {isLoading,source,articles} = this.state;

    function renderMessage(){
      if(isLoading){
        return <h3>Loading News  </h3>;
      }else if (source) {
        return <NewsMessage source={source} articles={articles}/>;

      }
    }
  return(
    <div>
      <h3>News</h3>
      <NewsForm onFind = {this.handleFind}/>
      {renderMessage()}
    </div>
  )
    }
});
module.exports = News;

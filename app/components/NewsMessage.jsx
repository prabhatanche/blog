var React = require('react');

var NewsMessage = React.createClass({
  render:function (){
    var {source,articles} =this.props;
  return(
    <div>
      {articles}
    </div>
    )
  }
});
module.exports = NewsMessage;

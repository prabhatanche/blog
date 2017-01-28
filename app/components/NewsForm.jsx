var React = require('react');

var NewsForm = React.createClass({
  onFormSubmit: function(e){
    e.preventDefault();
    var source = this.refs.source.value;
    if (source){
      this.refs.source.value = '';
      this.props.onFind(source);
    }
  },
  render:function (){
  return(
    <div>
      <h4>Please select from menu</h4>
        <form onSubmit={this.onFormSubmit}>
          <select  name="News" >
            <option  ref="source" value="the-washington-post">the washington post</option>

          </select>
            <br></br>
            <input type="submit" />
        </form>
    </div>
    )
  }
});
module.exports = NewsForm;

var React = require('react');
var {Link, IndexLink} = require('react-router');

var Nav = (props)=>{
  return(
    <div>
      <h2>ROLL-IN</h2>
        <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight:'bold'}}>Weather Info</IndexLink>
        <IndexLink to="/about"activeClassName="active" activeStyle={{fontWeight:'bold'}}>About</IndexLink>
        <IndexLink to="/contact"activeClassName="active" activeStyle={{fontWeight:'bold'}}>Call-To-Know-More</IndexLink>
        <IndexLink to="/news"activeClassName="active" activeStyle={{fontWeight:'bold'}}>News-Update</IndexLink>
    </div>
  );
}
module.exports = Nav;

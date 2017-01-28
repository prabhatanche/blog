var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var Main = require('Main');
var Weather = require('Weather');
var About = require('About');
var Contact = require('Contact');
var WeatherForm = require('WeatherForm');
var News = require('News');
var NewsForm = require('NewsForm');



ReactDOM.render(
  <Router history = {hashHistory}>
    <Route path ="/" component = {Main}>
      <Route path ="about" component={About}/>
      <Route path ="Contact" component={Contact}/>
        <Route path ="News" component={News}/>
      <IndexRoute component = {Weather}/>
    </Route>

  </Router>,
  document.getElementById('app')
);

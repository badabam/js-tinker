// run with casparjs filename.js
var casper = require('casper').create();

casper.start('http://wunderlist.com/login');

casper.then(login);

casper.then(findFirstEntry);

casper.run();

function login () {
  this.echo(this.getTitle());
  this.fillSelectors('form[action="/login"]', {
    'input[name="email"]': 'jerry@badabam.de',
    'input[name="password"]': '123'
  }, true);
}

function findFirstEntry () {  
 this.echo(this.getCurrentUrl());
 this.echo(this.fetchText('.errors .message'));
}


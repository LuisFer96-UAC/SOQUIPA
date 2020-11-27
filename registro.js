/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var mysql = require('mysql');
var express = require('express');
var session = require('express-session');
var bodyParser = require('body-parser');
var path = require('path');

var connection = mysql.createConnection({
	host     : '127.0.0.1',
	user     : 'root',
	password : 'Nico1996',
	database : 'nodelogin'
});

app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());

app.get('/', function(request, response) {
	response.sendFile(path.join(__dirname + '/registro.html'));
});

app.post('/registro', function(request, response) {
	var username = request.body.username;
	var email	 = request.body.email;
	var password = request.body.password;
	
	if (username && password && email) {
		connection.query('INSERT into accounts(username, email, password', [username, email, password], function(error, results, fields) {
				response.redirect('/index');

		});
	} else {
		response.send('Please enter Username, email and Password!');
		response.end();
	}
});

app.listen(3000);
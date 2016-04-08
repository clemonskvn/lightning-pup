// app/routes.js

// grab the nerd model we just created
//var Premise = require('./models/premise');

var express = require('express');
var jwt = require('express-jwt');

var jwtCheck = jwt({
  secret: new Buffer('nvC5GxMy28oxaQO9JmxIsRgLBJdaDs5GjdcyI0PzzmaaZKtqnANgnWUylk9JSG9q', 'base64'),
  audience: 'fxrksgu1aOqhoN0SqGLMZyAG3fFuPMNM'
});

	module.exports = function(app) {
		// server routes ===========================================================
		app.use(function(req, res, next) {
			//console.log('Something is happening.');
			next();
		});

		// handle things like api calls
		// authentication routes

		// gets go here ===========================================
		app.get('/api', function(req, res) {
			res.json({ message: 'welcome to our api!' });
		});

/*		app.get('/api/bears/:bear_id', function(req, res) {
			Bear.findById(req.params.bear_id, function(err, bear) {
				if (err)
					res.send(err);
				res.json(bear);
			});
		});*/

		// posts go here ============================================
/*        app.post('/api/premise', function(req, res) {
			var premise = new Premise();
			premise.premise_id = req.body.premise_id;
            premise.name = req.body.name;
            premise.address = req.body.address;
            premise.meter_id = req.body.meter_id;
			
			premise.save(function(err) {
				if (err)
					res.send(err);
				res.json({ message: 'Premise created!' });
			});
		});*/

		// puts go here =============================================
/*		app.put('/api/bears/:bear_id', function(req, res) {
			Bear.findById(req.params.bear_id, function(err, bear) {
				if (err)
					res.send(err);
				bear.name = req.body.name;
				bear.save(function(err) {
					if (err)
						res.send(err);
					res.json({ message: 'Bear updated!' });
				});
			});
		});*/

		// deletes go here ==========================================
/*		app.delete('/api/bears/:bear_id', function(req, res) {
			Bear.remove({
				_id: req.params.bear_id
			}, function(err, bear) {
				if (err)
					res.send(err);
				res.json({ message: 'Successfully deleted' });
			});
		});*/

		// frontend routes =========================================================
		// route to handle all angular requests
		app.get('*', function(req, res) {
			res.sendfile('./public/index.html'); // load our public/index.html file
		});
	};

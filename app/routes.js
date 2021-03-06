// app/routes.js

// grab the nerd model we just created
//var Premise = require('./models/premise');
var User = require('./models/user');
var Test = require('./models/test');

var express = require('express');
var jwt = require('express-jwt');

/*var jwtCheck = jwt({
  secret: new Buffer('nvC5GxMy28oxaQO9JmxIsRgLBJdaDs5GjdcyI0PzzmaaZKtqnANgnWUylk9JSG9q', 'base64'),
  audience: 'fxrksgu1aOqhoN0SqGLMZyAG3fFuPMNM'
});*/

	module.exports = function(app) {
		// server routes ===========================================================
        //app.use(function(req, res, next) {
        //    next();
        //});
		// handle things like api calls
		// authentication routes
        
        //app.use(function(err, req, res, next) {
        //    console.error(err);
        //    res.status(500).send({status:500, message: 'internal error'});
        //});

		// gets go here ===========================================
		app.get('/api', function(req, res) {
			res.json({ message: 'welcome to our api!' });
		});
        
        app.get('/api/user/:user_id', function(req, res) {
			User.findOne({ userId: req.params.user_id }, 'userId', function(err, myUser) {
				if (err)
					res.send(err);
				res.json(myUser);
			});
		});
        
        app.get('/api/user', function(req, res) {
			User.find({}, function(err, myUser) {
				if (err)
					res.send(err);
				res.json(myUser);
			});
		});
        
        app.get('/api/test', function(req, res) {
            Test.find({}, function(err, myTest) {
                if (err)
                    res.send(err);
                res.json(myTest);
            });
        });

		// posts go here ============================================
        app.post('/api/user', function(req, res, next) {
            var user_id = req.body.user_id,
                first_name = req.body.first_name,
                middle_initial = req.body.middle_initial,
                last_name = req.body.last_name,
                email = req.body.email,
                email_type = 'PRIMARY',
                user_type = 'PRIMARY',
                phone_type = req.body.phone_type.label,
                phone = req.body.phone,
                street = req.body.street,
                city = req.body.city,
                state = req.body.state,
                zipcode = req.body.zipcode;
            
            var myUser      = new User({
                userId: user_id,
                name: [{
                    firstName: first_name,
                    middleInitial: middle_initial,
                    lastName: last_name,
                    type: user_type
                }],
                email: [{
                    type: email_type,
                    emailAddress: email
                }],
                phone: [{
                    type: phone_type,
                    telNumber: phone
                }],
                address: [{
                    street: street,
                    city: city,
                    state: state,
                    zipcode: zipcode
                }]
            });
            myUser.save(function(err) {
                if (err) {
                    return res.json(err.stack);
                }
                res.json({ message: 'User created!' });
            });
        });

        app.post('/api/test', function(req, res) {
            console.log('req.body: ' + req.body);
            console.log('req.body.input_text: ' + req.body.input_text);
            var myTest = new Test({ myText: req.body.input_text });
            myTest.save(function(err) {
                if (err)
                    res.send(err);
                res.json({ message: 'Test created!' });
            })
        });
        
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
        app.delete('/api/user/:user_id', function(req, res) {
            User.findById(req.params.user_id, function(err, myUser) {
                if (err)
                    res.send(err);
                myUser.deleteIndicator = 'X';
                myUser.save(function(err) {
                    if (err)
                        res.send(err);
                    res.json({ message: 'User deleted!' });
                })
            })
        })
        
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
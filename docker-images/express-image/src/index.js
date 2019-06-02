var Chance = require('chance');
var express = require('express');
var app = express();
var chance = new Chance();

app.get('/', function(req, res){
	res.send( generatePhoneNumber());
});

app.listen(3000, function(){
	console.log('Accepting HTTP requests on port 3000.');
});

function generatePhoneNumber(){
	var numberPhoneNum = chance.integer({
		min:0,
		max:10
	});
	console.log(numberPhoneNum);
	var phones = [];
	for(var i = 0; i < numberPhoneNum ; i++){
		
		
		
		var gender = chance.gender();
		var birthYear = chance.year({
			min: 1986,
			max: 1996
		});
		phones.push({
			
			
			firstName: chance.first(),
			lastName: chance.last(),
			phoneNumber: chance.phone()	
		});
		
	};
	
	console.log(phones);
	return phones;	
}
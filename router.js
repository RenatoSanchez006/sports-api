const express = require('express');
const router = express.Router();
const {ListSports} = require('./model');

router.get('/list-sports', (req, res) => {

	let infoOfAllSports = ListSports.get();

	if ( infoOfAllSports ){
		res.status(200).json({
			message : "Successfully sent the list of sports",
			status : 200,
			sports : infoOfAllSports
		});
	}
	else{
		res.status(500).json({
			message : `Internal server error.`,
			status : 500
		}).send("Finish");
	}
});

module.exports = router;



/*

app.get('/list-sports-with-headers', (req, res) =>{
	let sportId = req.get('id');


	sportsArray.forEach(item => {
		if (item.id == sportId){
			res.status(200).json({
				message : "Successfully sent the sport",
				status : 200,
				sport : item
			});
		}
	});

	res.status(404).json({
		message : "Sport not found in the list",
		status : 404
	});
});

app.get('/list-sports/:id', (req, res) => {
	let sportId = req.params.id;

	sportsArray.forEach(item => {
		if (item.id == sportId){
			res.status(200).json({
				message : "Successfully sent the sport",
				status : 200,
				sport : item
			});
		}
	});

	res.status(404).json({
		message : "Sport not found in the list",
		status : 404
	});
});

app.post('/post-sport', jsonParser, (req, res) => {
	
	let requiredFields = ['id', 'name'];

	for ( let i = 0; i < requiredFields.length; i ++){
		let currentField = requiredFields[i];

		if (! (currentField in req.body)){
			res.status(406).json({
				message : `Missing field ${currentField} in body.`,
				status : 406
			}).send("Finish");
		}
	}

	let sportId = req.body.id;

	sportsArray.forEach(item => {
		if ( sportId == item.id ){
		 	res.status(409).json({
				message : `That id is already in use.`,
				status : 409
			}).send("Finish");
		}
	});

	let objectToAdd = {
		id: sportId,
		name: req.body.name
	};

	sportsArray.push(objectToAdd);
	res.status(201).json({
		message : "Successfully added the sport",
		status : 201,
		sport : objectToAdd
	});
});

app.put('/update-sport/:id', jsonParser, (req, res) => {
	let requiredFields = ['name'];

	for ( let i = 0; i < requiredFields.length; i ++){
		let currentField = requiredFields[i];

		if (! (currentField in req.body)){
			res.status(406).json({
				message : `Missing field ${currentField} in body.`,
				status : 406
			}).send("Finish");
		}
	}

	let sportId = req.params.id;

	if (sportId){
		sportsArray.forEach((item, index) => {
			if (item.id == sportId){
				sportsArray[index].name = req.body.name;

				res.status(200).json({
					message : "Successfully updated the sport",
					status : 200,
					sport : item
				});
			}
		});

		res.status(404).json({
			message : "Sport not found in the list",
			status : 404
		}).send("Finish");;
	}
	else{
		res.status(406).json({
			message : "Missing param 'id'",
			status : 406
		}).send("Finish");;
	}
});

app.delete('/remove-sport/:id', jsonParser, (req, res) => {
	let requiredFields = ['id'];

	for ( let i = 0; i < requiredFields.length; i ++){
		let currentField = requiredFields[i];

		if (! (currentField in req.body)){
			res.status(406).json({
				message : `Missing field ${currentField} in body.`,
				status : 406
			}).send("Finish");
		}
	}
	let sportId = req.params.id;

	if (sportId){
		if(sportId == req.body.id){
			sportsArray.forEach((item, index) => {
				if (item.id == sportId){
					sportsArray.splice(index, 1);

					res.status(204).json({
						message : "Successfully deleted the sport",
						status : 204,
						sport : item
					});
				}
			});

			res.status(404).json({
				message : "Sport not found in the list",
				status : 404
			}).send("Finish");
		}
		else{
			res.status(400).json({
				message : "Param and body do not match",
				status : 400
			}).send("Finish");
		}
	}
	else{
		res.status(406).json({
			message : "Missing param 'id'",
			status : 406
		}).send("Finish");
	}
});

*/
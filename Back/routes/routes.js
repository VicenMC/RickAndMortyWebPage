const express = require('express');
const router = express.Router();
const {Sequelize} = require('sequelize');
const { Character, Locations, Episode} = require('../db/connections.js');
const {
	pageCalculate,
	allCharacters,
	allEpisodes,
	allLocations,
	charInfo,
	searchPageCalculate,
	createCharacter
} = require('../controllers/controller.js')
const controller = require("../controllers/controller.js");


router.route('/characters').get(async (req, res) => {
	let {name, page} = req.query;
	let searchResults = [];
	let finalResults = [];
	if(name){
		let searchPages = await searchPageCalculate(name);
		console.log(searchPages)
		searchResults.push(searchPages);
		if(page > searchPages){
			return res.json("Page doesnt exist")
		}
		let specificCharacter = await charInfo(name, page);
		searchResults.push(specificCharacter);
		return res.json(searchResults);
	}else{
	try{
		let totalPages = await pageCalculate('character');
		finalResults.push(totalPages);
		if(page > totalPages){
			return res.json("Page doesnt exist")
		}
		let totalChar = await allCharacters(page);
		finalResults.push(totalChar);
		return res.json(finalResults);
	}catch(e){
		return res.json(e)
	}
}
})



router.route('/episodes').get(async (req, res) => {
	try{
		let totalPages = await pageCalculate('episode');
		let totalEp = await allEpisodes(totalPages);
		totalEp.push(totalPages)
		return res.json(totalEp);
	}catch(e){
		return res.json(e)
	}
})



router.route('/locations').get(async (req, res) => {
	let {pag} = req.query;
	try{
		let totalPages = await pageCalculate('location');
		let totalLoc = await allLocations(totalPages);
		return res.json(totalLoc[0][0].flat());
	}catch(e){
		return res.json(e)
	}
})


router.post("/character", controller.createCharacter);


/*
router.route('/characters').get(async (req, res) => {
	let {pag} = req.query;
	try{
		let totalChar = await Character.findAll();
		if(totalChar.length === 0){
			let character = await allCharacters();
			let charDB = Character.bulkCreate(character);
			return res.json(character);
		}else{
			return res.json(totalChar);
		}
	}catch(e){
		return res.json(e)
	}
})*/

/*
router.route('/episodes').get(async (req, res) => {
		let {pag} = req.query
		try{
	let totalEp = await Episode.findAll();
	if(totalEp.length === 0){
		let episode = await allEpisodes(pag)
		let episodeDB = Episode.bulkCreate(episode);
		return res.json(episodeDB)
	}else{
		return res.json(totalEp)
	}
}
catch(e){
	console.log('Error' + e)
}
})

router.route('/locations').get(async (req, res) => {
		let {pag} = req.query
		try{
	let totalLoc = await Locations.findAll();
	if(totalLoc.length === 0){
		let location = await allLocations(pag);
		let locationDB = Locations.bulkCreate(location)
		return res.json(locationDB)
	}else{
		return res.json(totalLoc)
	}
}
catch(e){
	console.log(e)
}
})
*/

//Exporting router to index
module.exports = router;
const express = require('express');
const router = express.Router();
const {Sequelize} = require('sequelize');
const { Character, Locations, Episode} = require('../db/connections.js');
const {
	allCharacters,
	allEpisodes,
	allLocations,
	charInfo,
	createCharacter
} = require('../controllers/controller.js')
const controller = require("../controllers/controller.js");




router.route('/characters').get(async (req, res) => {
	let {name} = req.query;
	if(name){
		let specificCharacter = await charInfo(name)
		return res.json(specificCharacter);
	}else{
	try{
		let characterInfo = []
		for(let i = 1; i < 42; i++){
		let totalChar = await allCharacters(i);
		characterInfo.push(totalChar) /*[i] despues de esto*/
	}
		return res.json(characterInfo);
	}catch(e){
		return res.json(e)
	}
}
})



router.route('/episodes').get(async (req, res) => {
	try{
		let episodeInfo = []
		let totalEp = await allEpisodes();
		episodeInfo.push(totalEp[0]) /*[i] despues de esto*/
		return res.json(episodeInfo);
	}catch(e){
		return res.json(e)
	}
})



router.route('/locations').get(async (req, res) => {
	let {pag} = req.query;
	try{
		let locationInfo = []
		let totalLoc = await allLocations();
		locationInfo.push(totalLoc[0]) /*[i] despues de esto*/
		return res.json(locationInfo);
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
const { default: axios} = require('axios');
const { response } = require('express');

//Calling our models
const { Character } = require("../db/connections.js");
const { Episode } = require("../db/connections.js");
const { Location } = require("../db/connections.js");

module.exports = {


  allCharacters: (page) => {
  	let objeto = [];
  	const pageApi = '?page=:page'
  	let actualPage = page;
    let obj = axios
      .get(`http://rickandmortyapi.com/api/character${pageApi.replace(':page',`${actualPage}`)}`)
      .then((resultado) => (resultado = resultado.data.results))
      .then((resu) => {
        resu.map((e) =>
          objeto.push(e)
        );
        return objeto;
      });
    return obj;
  },

  async charInfo(name, page){
	let locationCollection = [];
let obj = axios
.get(`http://rickandmortyapi.com/api/character?page=${page}&&name=${name}`)
.then((resultado) => (resultado = resultado.data))
.then((result) => (result = result.results))
.then((resu) => {
	resu.map((e) => locationCollection.push({
	id: e.id,
	name: e.name,
	status: e.status,
	species: e.species,
	type: e.type || 'No type found',
	gender: e.gender,
	origin: e.origin.name,
	location: e.location.name,
	image: e.image
	})
	);
	return locationCollection;
})
return obj
},

  pageCalculate: (searchEndpoint) => {
	  let totalPages = 0
	  try{
	  let obj = axios
	  .get(`https://rickandmortyapi.com/api/${searchEndpoint}`)
	  .then((result) => result.data)
	  .then((resu) => {
		  totalPages = resu.info.pages;
		  return totalPages;
	  })
	  return obj;
	}catch(e){
		console.log(e)
	}
  },

  searchPageCalculate: (name) => {
	let totalPages = 0
	try{
	let obj = axios
	.get(`https://rickandmortyapi.com/api/character?name=${name}`)
	.then((result) => result.data)
	.then((resu) => {
		totalPages = resu.info.pages;
		return totalPages;
	})
	return obj;
  }catch(e){
	  console.log(e)
  }
  },

/*async allCharacters(){
	const finalArr = [];
	const promises = [];
	for (let page = 1; page <= 34; page++){
		promises.push(
			axios({method: 'get', url: `http://rickandmortyapi.com/api/character?page=${page}`})
			.then((res) => res=res.data)
			.then((resul) => resul = resul.results)
			.then((e) => e))
	}
	await Promise.all(promises)
	.then(pu => {
		finalArr.push(pu)

	}).then(function(val) {
		return finalArr;
	})
	return finalArr;
},*/
async allEpisodes(totalPages){
	const finalArr = [];
	const promises = [];
	for (let page = 1; page <= totalPages; page++){
		promises.push(
			axios({method: 'get', url: `http://rickandmortyapi.com/api/episode?page=${page}`})
			.then((result) => result=result.data)
			.then((result) => result = result.results)
			.then((e) => e))
	}
	await Promise.all(promises)
	.then(result => {
		finalArr.push(result)
	}).then(function(val) {
		return finalArr;
	})
	return finalArr;
},


async allLocations(totalPages){
	const finalArr = [];
	const promises = [];
	for (let page = 1; page <= totalPages; page++){
		promises.push(
			axios({method: 'get', url: `http://rickandmortyapi.com/api/location?page=${page}`})
			.then((result) => result=result.data)
			.then((result) => result = result.results)
			.then((e) => e))
	}
	await Promise.all(promises)
	.then(result => {
		finalArr.push(result)

	}).then(function(val) {
		return finalArr;
	})
	return finalArr;
},



async createCharacter(req, res) {
    const { ID, name, status, species, type, gender, origin, image } = req.body;
    try {
      const [key, value] = await Character.findOrCreate({
        where: { ID },
        defaults: {
          name,
          status,
          species, 
          type,
          gender,
          origin,
          image,
          
        },
      });

      res.json(key);
      /*const countryMap = await Promise.all(ID.map(element => newCharacter.findByPk(element)));
		await Promise.all(countryMap.map(element => element.addActivity(key)))
		res.json({value:value,key,countryMap})*/
    } catch (e) {
      console.log("Error" + e);
    }
  },
/*
allCharacters : () => {
	let characterCollection = [];
	let obj = axios
	.get(`http://rickandmortyapi.com/api/character`)
	.then((resultado) => (resultado = resultado.data))
	.then((result) => (result = result.results))
	.then((resu) => {
		resu.map((e) => characterCollection.push({
		ID: e.id,
		name: e.name,
		status: e.status,
		species: e.species,
		type: e.type || 'No type found',
		gender: e.gender,
		origin: e.origin.name,
		location: e.location.name,
		image: e.image
		})
		);
		return characterCollection;
	})

return obj
},*/


/*
allEpisodes : (pag) => {
	let episodeCollection = [];
	let obj = axios
	.get(`http://rickandmortyapi.com/api/episode?page=${pag}`)
	.then((resultado) => (resultado = resultado.data))
	.then((result) => (result = result.results))
	.then((resu) => {
		resu.map((e) => episodeCollection.push({
		id: e.id,
		name: e.name,
		air_date: e.air_date,
		episode: e.episode,
		characters: e.characters.map((e) => e)
		})
		);
		console.log("lol" + episodeCollection)
		return episodeCollection;
	})

return obj
},

allLocations : (pag) => {
	let locationCollection = [];
	let obj = axios
	.get(`http://rickandmortyapi.com/api/location?page=${pag}`)
	.then((resultado) => (resultado = resultado.data))
	.then((result) => (result = result.results))
	.then((resu) => {
		resu.map((e) => locationCollection.push({
		id: e.id,
		name: e.name,
		type: e.type,
		dimension: e.dimension,
		residents: e.residents.map((e) => e)
		})
		);
		return locationCollection;
	})

return obj
},
*/
}

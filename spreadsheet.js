const { GoogleSpreadsheet } = require('google-spreadsheet');


const creds = require('./client_secret.json');

function printData(data){
	console.log("Equipo: " + data.Equipo);
	console.log("Marca: "+ data.Marca);
	console.log("Modelo: "+ data.Modelo);
	console.log("Serial Number: "+ data.Serial);
	console.log("ID: "+ data.ID);
	console.log("---------------------");
}

async function accessSpreadsheet(){
	const doc = new GoogleSpreadsheet('1wRtP8l75omW1Fc7CApmb0iPvhVmxVvtm7b5cM2Ss6zk');
	await doc.useServiceAccountAuth(creds);
	await doc.loadInfo();
	const sheet = doc.sheetsByIndex[0];
	const rows = await sheet.getRows({
		offset: 0
	});
	console.log("Title: " + sheet.title);
	
	rows.forEach(row => {
		printData(row);
	})
	}


accessSpreadsheet();
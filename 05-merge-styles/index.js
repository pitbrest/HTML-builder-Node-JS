const path = require('path');
const fsPromises = require('fs/promises');

const stylesAdress = path.join(__dirname, 'styles');
let resultArr = [];

let mergeFunc = async () => {

	const filesCss = await fsPromises.readdir(stylesAdress);

	for(let file of filesCss) {
		let fileAdress = path.join(stylesAdress, file);
		let stats = await fsPromises.stat(fileAdress);
		if(stats.isFile() && path.parse(fileAdress).ext.slice(1) === 'css') {
			const fileContent = await fsPromises.readFile(fileAdress, 'utf-8');
			resultArr.push(fileContent + '\n');
		}
	}

	let result = resultArr.join('');
	let destFileAdress = path.join(__dirname, 'project-dist', 'bundle.css');
	
	await fsPromises.writeFile(destFileAdress, result);
};

mergeFunc();



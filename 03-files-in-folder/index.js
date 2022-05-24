const path = require('path');
const fs = require('fs');

const adress = path.join(__dirname, 'secret-folder');


fs.readdir(adress, (err, files) => {
	if (err) {
		throw new Error('Have some error whith "fs.readdir"');
	}
	files.forEach(file => {
		let fileAdress = path.join(adress, file);

		fs.stat(fileAdress, (error, stats) => {
			if (error) {
				throw new Error('Have some error whith "fs.stat" !');
			}
			else {
				if (stats.isFile()) {
					console.log(path.parse(path.join(adress, file)).name + ' - ' + path.parse(path.join(adress, file)).ext.slice(1) + ' - ' + stats.size + ' bytes');
				}
			}
		});
	});
});
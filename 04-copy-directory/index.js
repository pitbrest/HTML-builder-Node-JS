const path = require('path');
const fs = require('fs');

const adress = path.join(__dirname, 'files-copy');

fs.readdir(adress, (error, files) => {
	if (error) {
		fs.mkdir(adress, { recursive: true }, err => {
			if (err) {
				throw new Error('Have some error with fs.mkdir');
			}
		});
	}
	else {
		files.forEach(file => {
			fs.unlink(path.join(adress, file), (err) => {
				if (err) {
					throw new Error('Have some error with fs.unlink');
				}
			});
		});
	}
});

let source = path.join(__dirname, 'files');
let destination = path.join(__dirname, 'files-copy');

fs.readdir(source, (err, files) => {
	if (err) {
		throw new Error('Have some error whith fs.readdir');
	}
	files.forEach(file => {
		fs.copyFile(path.join(source, file), path.join(destination, file), err => {
			if (err) {
				throw new Error('Have some error with fs.copyFile');
			}
		});
	});	
});



import fs from 'fs';

const destination = 'src/fs/files/wrongFilename.txt';
const renamedFile = 'src/fs/files/wrongFilename.md';

const rename = async () => {
	// Write your code here 
	if (!fs.existsSync(destination) || fs.existsSync(renamedFile)) {
		throw new Error('FS operation failed');
	};

	fs.rename(destination, renamedFile, (err) => {
		if (err) throw err;
		console.log('Rename complete!');
	});

};

await rename();
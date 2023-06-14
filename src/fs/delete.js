import fs from 'fs';

const destinationDir = 'src/fs/files/fileToRemove.txt';

const remove = async () => {
	// Write your code here 
	if (!fs.existsSync(destinationDir)) {
		throw new Error('FS operation failed');
	} else {
		fs.unlink(destinationDir, (err) => {
			if (err) throw err;
			console.log(`${destinationDir} was deleted`);
		});
	}

};

await remove();
import fs from 'fs';

const destinationDir = 'src/fs/files/fileToRead.txt';

const read = async () => {
	// Write your code here 
	if (!fs.existsSync(destinationDir)) {
		throw new Error('FS operation failed');
	}
	const content = await fs.promises.readFile(destinationDir, { encoding: 'utf8' });
	console.log(content);
};

await read();
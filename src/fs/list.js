import fs from 'fs';

const destinationDir = 'src/fs/files';

const list = async () => {
	// Write your code here 

	if (!fs.existsSync(destinationDir)) {
		throw new Error('FS operation failed');
	}

	const files = await fs.promises.readdir(destinationDir);
	for (const file of files)
		console.log(file);

};

await list();
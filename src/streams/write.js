import fs from 'fs';

const destinationDir = 'src/streams/files/fileToWrite.txt';

const write = async () => {
	try {
		const writableStream = fs.createWriteStream(destinationDir);

		process.stdin.pipe(writableStream);

		writableStream.on('finish', () => {
			console.log('Data has been written to the file.');
		});

		writableStream.on('error', (err) => {
			console.error('Error writing data to file:', err);
		});
	} catch (err) {
		console.log('err', err)
	}

};

await write();
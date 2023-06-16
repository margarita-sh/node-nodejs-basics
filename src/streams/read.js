import fs from 'fs';

const destinationDir = 'src/streams/files/fileToRead.txt';

const read = async () => {

	const readableStream = fs.createReadStream(destinationDir);

	readableStream.on('data', (chunk) => {
		process.stdout.write(chunk);
	});

	readableStream.on('end', () => {
		console.log('\nFile reading completed.');
	});

	readableStream.on('error', (err) => {
		console.error('Error reading file:', err);
	});

};

await read();
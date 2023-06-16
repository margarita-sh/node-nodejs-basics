import fs from 'fs';

const filename = 'src/fs/files/fresh.txt';
const content = 'I am fresh and young!';

const create = async () => {
	// Write your code here 	
	fs.stat(filename, (statErr) => {
		if (statErr && statErr.code === 'ENOENT') {
			fs.appendFile(filename, content, (appendErr) => {
				if (appendErr) throw appendErr;
				console.log('Created!');
			});
		} else {
			throw new Error('FS operation failed')
		}
	})

};

await create();
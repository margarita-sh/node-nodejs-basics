import { createHash } from 'crypto'

const destinationDir = 'src/hash/files/fileToCalculateHashFor.txt'
const calculateHash = async () => {
	// Write your code here 
	const hash = createHash('sha256').update(destinationDir).digest('hex');
	console.log('hash:',hash);
	return hash;
};

await calculateHash();
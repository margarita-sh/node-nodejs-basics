import { Transform } from 'stream';

const transform = async () => {
	// Write your code here 
	try {
		const reverseTransform = new Transform({
			transform(chunk, encoding, callback) {
			  const reversedChunk = chunk.toString().split('').reverse().join('');
			  this.push(reversedChunk);
			  callback();
			}
		  });
		
		  process.stdin.pipe(reverseTransform).pipe(process.stdout);
	} catch (err) {
		console.log('err', err)
	}
};

await transform();
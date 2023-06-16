import { Worker, isMainThread, parentPort, workerData } from 'worker_threads';
import path from 'path';
import { fileURLToPath } from 'url';

// fibonacci function
const nthFibonacci = (n) => (n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2));

if (isMainThread) {
	console.log('Main thread')
	const n = 10;

	const workerScriptPath = path.join(
		path.dirname(fileURLToPath(import.meta.url)),
		'worker.js'
	);

	// create a new worker thread
	const worker = new Worker(workerScriptPath, { workerData: n });

	// listen for messages from the worker thread
	worker.on('message', (result) => {
		console.log('Result:', result);
		worker.terminate();
	});

	// handle errors from the worker thread
	worker.on('error', (error) => {
		console.error('Worker error:', error);
	});
} else {
	console.log('Worker thread')
	// worker thread
	const n = workerData;

	// perform the Fibonacci computation
	const result = nthFibonacci(n);

	// send the result back to the main thread
	parentPort.postMessage(result);
}

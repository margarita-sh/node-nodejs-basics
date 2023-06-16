import os from "os";
import { Worker } from 'worker_threads';
import path from 'path';
import { fileURLToPath } from 'url';

const cpuData = os.cpus();

const workerScriptPath = path.join(
	path.dirname(fileURLToPath(import.meta.url)),
	'worker.js'
);

let n = 10;

const createWorkers = () => {
	const workers = [];
	for (let i = 0; i <= cpuData.length - 1; i++) {
		let worker = new Worker(workerScriptPath, { workerData: n++ });
		workers.push(worker);
	}
	return workers;
};

const createWorkerPromises = () => {
	let workers = createWorkers();
	return workers.map(worker => {
		return new Promise((resolve, reject) => {
			worker.on('message', (res) => {
				resolve({ status: 'resolved', data: res });
			});

			worker.on('error', (error) => {
				resolve({ status: 'error', data: null });
			});

			worker.on('exit', (code) => {
				if (code !== 0) {
					reject(new Error(`Worker stopped with exit code ${code}`));
				}
			});
		})
	})
}

const performCalculations = async () => {
	const workerPromises = createWorkerPromises();
	const promisesArray = Promise.all(workerPromises);
	try {
		const result = await promisesArray;
		console.log('result in main.js', result)
	} catch (err) {
		console.log('err in main js', err)
	}
}


await performCalculations();

import { fork } from 'child_process';

// const spawnChildProcess = async (args) => {

// 	const child = fork('src/cp/files/script.js', args);
// 	// process.stdin.pipe(child.stdin)
// }

// // Put your arguments in function call to test this functionality
// spawnChildProcess(['a', 'b']);

import { spawn } from 'child_process';

const spawnChildProcess = async (args) => {
	const child = spawn('node', ['src/cp/files/script.js', ...args], {
		stdio: ['pipe', 'pipe', 'pipe', 'ipc'] // Establish IPC channel
	});

	// redirect master process stdin to child process stdin
	process.stdin.pipe(child.stdin);

	// redirect child process stdout to master process stdout
	child.stdout.pipe(process.stdout);

	// handle child process events
	child.on('message', (message) => {
		// Handle any messages received from the child process
		console.log('Message from child process:', message);
	});

	child.on('exit', (code) => {
		// handle child process exit
		console.log('Child process exited with code:', code);
	});
};

const args = process.argv.slice(2);
await spawnChildProcess(args);



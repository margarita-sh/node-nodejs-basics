import fs from 'fs';
import path from 'path';


var sourceDir = "src/fs/files";
var targetDir = "src/fs/files_copy";

const copy = async () => {
	// Write your code here 
	if (!fs.existsSync(sourceDir)) {
		throw new Error('FS operation failed');
	}

	if (!fs.existsSync(targetDir)) {
		fs.mkdirSync(targetDir, { recursive: true });
	} else {
		throw new Error('FS operation failed');
	}

	// Get the list of files and directories in the source directory
	const files = fs.readdirSync(sourceDir);

	// Iterate over each file or directory
	files.forEach((file) => {
		const sourcePath = path.join(sourceDir, file);
		const targetPath = path.join(targetDir, file);

		// Check if the current item is a file or directory
		if (fs.lstatSync(sourcePath).isDirectory()) {
			// Recursively copy the subdirectory
			copyFolderSync(sourcePath, targetPath);
		} else {
			// Copy the file
			fs.copyFileSync(sourcePath, targetPath);
		}
	});

};

await copy();

import zlib from 'zlib';
import fs from 'fs';

const destinatioDir = 'src/zip/files/fileToCompress.txt';
const file = 'src/zip/files/archive.gz';
const compress = async () => {

	let gzip = zlib.createGzip();
	let r = fs.createReadStream(destinatioDir);
	let w = fs.createWriteStream(file);
	r.pipe(gzip).pipe(w);
};

await compress();

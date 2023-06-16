import fs from 'fs';
import zlib from 'zlib';
const destinatioDir = 'src/zip/files/fileToCompress.txt';
const file = 'src/zip/files/archive.gz';
const decompress = async () => { 
  const readStream = fs.createReadStream(file);
  const writeStream = fs.createWriteStream(destinatioDir);
  const gunzip = zlib.createGunzip();

  readStream.pipe(gunzip).pipe(writeStream);

  writeStream.on('finish', () => {
    console.log(`File "${file}" has been decompressed to "${destinatioDir}".`);
  });

  writeStream.on('error', (err) => {
    console.error('Error decompressing file:', err);
  });
}


await decompress();
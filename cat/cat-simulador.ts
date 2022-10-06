import { promises as fsPromises } from 'fs';
import * as path from 'path';

const filepath = path.resolve(__dirname, process.argv[2]);

(async () => {
    const data = await fsPromises.readFile(filepath, 'utf8');
    console.log(data);
})();

// Comando
// npm run --silent cat ARGV
//  ARGV: path del fichero

// ejemplo:
// npm run --silent cat ../prueba.txt
// output: Hola desde TypeScript😊
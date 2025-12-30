import fs from 'fs';

export function writeFile(path, content) {
  fs.writeFileSync(path, content, 'utf8');
}
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';

const filePath = resolve(process.cwd(), 'src/data/projects.ts');
const source = readFileSync(filePath, 'utf8');

const linkMatches = [...source.matchAll(/link:\s*'([^']+)'/g)];

const validSchema = /^(https?:\/\/|\/|\.\/|\.\.\/|mailto:|tel:|#)/i;

const invalidLinks = linkMatches
  .map((match) => match[1])
  .filter((link) => !validSchema.test(link));

if (invalidLinks.length > 0) {
  console.error('Invalid project action links detected:');
  invalidLinks.forEach((link) => {
    console.error(`- ${link}`);
  });
  process.exit(1);
}

console.log(`Validated ${linkMatches.length} project action links.`);

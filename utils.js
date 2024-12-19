import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);

const readJSON = (filePath) => require(filePath);

export default readJSON;

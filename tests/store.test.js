import { writeFileSync } from 'node:fs';
import { getAll, getById, create, updateById, deleteById } from '../store.js';
import { join } from 'node:path';

const dbPath = join(process.cwd(), 'db.json');
const restoreDb = () => { writeFileSync(dbPath, JSON.stringify([])); };
const populateDb = (data) => writeFileSync(dbPath, JSON.stringify(data));

const fixtures = [
    { id: 1, message: 'Hello World' },
    { id: 2, message: 'Testing 123' },
];
const inventedId = 12345;
const existingId = fixtures[0].id;
describe("store", () => {
    beforeEach(() => populateDb(fixtures));
    afterEach(restoreDb);

});
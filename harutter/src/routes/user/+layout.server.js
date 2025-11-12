import { users } from './data.js';
export function load() {
    const summaries = users.map(({ id, name, slug }) => ({ id, name, slug }));
    return { summaries };
}
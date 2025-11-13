import { users } from './data.ts';
export function load() {
    const summaries = users.map(({ id, name, slug }) => ({ id, name, slug }));
    return { summaries };
}
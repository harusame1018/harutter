import { users } from '../data.js';
import { error } from '@sveltejs/kit';
export function load({ params }) {
    const user = users.find(u => u.slug === params.slug);
    if (!user) error(404, 'User not found');
    return { user };
}
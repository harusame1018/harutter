/*import * as fs from 'fs/promises';
import { json } from '@sveltejs/kit';
type user_important = {
  name: string;
  email: string;
  password: string;
};
export const actions = {
    default: async ({ request }) => {

        const formData = await request.formData();
        const name = formData.get('username');
        const email = formData.get('email');
        const password = formData.get('password');
        if (!name || !email || !password) {
            return { success: false, message: 'All fields are required.' };
        }
        const userdata = await fs.readFile("/workspaces/harutter/harutter/static/important_data/userdata.json", 'utf8');
        const userdata_parsed : user_important= JSON.parse(userdata);
        console.log(userdata_parsed);
        userdata_parsed.push([{ name, email, password }]);
        console.log(userdata_parsed);
        const content = JSON.stringify(userdata_parsed, null, 2);
        await fs.writeFile("/workspaces/harutter/harutter/static/important_data/userdata.json", content, 'utf8');
    }
};
*/
import db from '$lib/db';

export const actions = {
  default: async ({ request }) => {
    const formData = await request.formData();
    const name = formData.get('username');
    const email = formData.get('email');
    const password = formData.get('password');

    if (!name || !email || !password) {
      return { success: false, message: 'All fields are required.' };
    }

    const insert = db.prepare('INSERT INTO users (username, email, password) VALUES (?, ?, ?)');
    insert.run(name, email, password);

    return { success: true, message: 'User registered successfully!' };
  }
};
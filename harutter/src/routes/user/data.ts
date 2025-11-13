/*
もう使わないプログラムですが、参考までに残しておきます。
export const users = [
    { id: 1, name: 'Alice', slug: 'alice', description: 'Alice is a web developer who enjoys hiking and painting.' },
    { id: 2, name: 'Bob', slug: 'bob', description: 'Bob is a graphic designer with a passion for photography.' },
    { id: 3, name: 'Charlie', slug: 'charlie', description: 'Charlie is a software developer who loves open source.' },
    { id: 4, name: 'Diana', slug: 'diana', description: 'Diana is a content writer and avid traveler.' }
];
*/
import user_information from '.,/../../static/important_data/userdata.json' assert { type: 'json' };
export type User = {
    id: number;
    name: string;
    slug: string;
    description: string;
};
export const users: User[] = user_information;

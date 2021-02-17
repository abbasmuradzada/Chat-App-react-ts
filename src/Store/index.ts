import { createContext } from 'react';

export const UserContext = createContext<any>(null);

export interface IMsjObj {
    message: string,
    user: number,
    id: number,
    time: string
}

export let context: IMsjObj[] = [
    {
        message: "Hey what's up man",
        user: 1,
        id: 1,
        time: '13:23'
    },
    {
        message: 'Nothing, just tired',
        user: 2,
        id: 2,
        time: '13:24'

    },
    {
        message: 'You’re such a hard worker, that is a great trait',
        user: 1,
        id: 3,
        time: '13:28'
    }
];

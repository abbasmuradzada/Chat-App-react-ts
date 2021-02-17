import { createContext } from 'react';

export const UserContext = createContext<any>(null);

export interface IMsjObj {
    message: string,
    user: number,
    id: number,
}

export let context: IMsjObj[] = [
    {
        message: 'salam necesen',
        user: 1,
        id: 1
    },
    {
        message: 'salam yaxsiyam, sen necesen',
        user: 2,
        id: 2
    },
    {
        message: 'sagol yaxsiyam',
        user: 1,
        id: 3
    },
    {
        message: 'lap yaxsi',
        user: 2,
        id: 4
    }
];

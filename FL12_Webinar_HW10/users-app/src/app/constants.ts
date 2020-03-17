export interface User {
    id: string;
    name: string;
    email: string;
    phone: string;
}

export const USERS: User[] = [
    {
        id: "1",
        name: "Ivan",
        email: "ivan@gmail.com",
        phone: "911"
    },
    {
        id: "2",
        name: "Fedir",
        email: "fedir@gmail.com",
        phone: "911"
    }
];
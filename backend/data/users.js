import bcrypt from 'bcryptjs';

const users = [
    {
        name: 'Admin User',
        email: 'admin@email.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true,
    },
    {
        name: 'Ginny',
        email: 'ginny@email.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: false,
    },
    {
        name: 'Austin',
        email: 'austin@email.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: false,
    }
];

export default users;
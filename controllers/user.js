import { v4 as uuid } from 'uuid';
import { pool } from '../database/db.js';

export const getUsers = (req, res) => {
    console.log(`Users in the database: ${users}`);
    res.send(users);
};

export const createUser = async (req, res) => {
    const { name, surname, stdNumber, grades } = req.body;

    try {
        const client = await pool.connect();
        const result = await client.query('INSERT INTO users (name, surname, stdNumber, grades) VALUES ($1, $2, $3, $4) RETURNING *', [name, surname, stdNumber, grades]);
        const user = result.rows[0];
        client.release();
        res.status(201).json(user);
    } catch (error) {
        console.error('Error executing query', error);
        res.status(500).send('Internal Server Error');
    }
};

export const getUser = (req, res) => {
    res.send(req.params.id)
};

export const deleteUser = (req, res) => {
    console.log(`user with id ${req.params.id} has been deleted`);
    users = users.filter((user) => user.id !== req.params.id);
};

export const updateUser =  (req,res) => {
    const user = users.find((user) => user.id === req.params.id);
    user.username = req.body.username;
    user.age = req.body.age;
    console.log(`username has been updated to ${req.body.username}.age has been updated to ${req.body.age}`)
};

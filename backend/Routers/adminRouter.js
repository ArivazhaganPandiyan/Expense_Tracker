import express from 'express';
import  User from '../models/UserSchema.js';

const router = express.Router();

router.get('/users', async (req, res) => {
    console.log("Inside");
    
    try {
        const users = await User.find().select('name');
        // console.log(users.length);
        // alert("users working")
        res.json(users);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Failed to fetch users.' });
    }
});

export default router;
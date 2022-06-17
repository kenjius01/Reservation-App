import express from 'express';
import {
    deleteUser,
    getOneUser,
    getUsers,
    updateUser,
} from '../controllers/user.js';
import { verifyAdmin, verifyToken, verifyUser } from '../utils/verifyToken.js';

const router = express.Router();

// router.get('/checkAuthentication', verifyToken, (req, res, next) => {
//     res.send('hi check authen!');
// });

// router.get('/checkUser/:id', verifyUser, (req, res, next) => {
//     res.send('hi you can do it authen!');
// });

// router.get('/checkAdmin', verifyAdmin, (req, res, next) => {
//     res.send('hi admin!');
// });

//UPDATE
router.put('/:id', verifyUser, updateUser);

//DELETE
router.delete('/:id',verifyUser, deleteUser);

//GET
router.get('/:id',verifyUser, getOneUser);

//GET ALL
router.get('/',verifyAdmin, getUsers);

export default router;

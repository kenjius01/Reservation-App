import express from 'express';
import {
    createRoom,
    deleteRoom,
    getOneRoom,
    getRooms,
    updateRoom,
} from '../controllers/room.js';
import { verifyAdmin } from '../utils/verifyToken.js';

const router = express.Router();

//CREATE
router.post('/:hotelId', verifyAdmin, createRoom);

//UPDATE
router.put('/:id', verifyAdmin, updateRoom);

//DELETE
router.delete('/:id/:hotelId', verifyAdmin, deleteRoom);

//GET
router.get('/:id', getOneRoom);

//GET ALL
router.get('/', getRooms);

export default router;

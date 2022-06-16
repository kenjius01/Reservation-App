import express from 'express';
import { createHotel, deleteHotel, getHotels, getOneHotel, updateHotel } from '../controllers/hotel.js';
const router = express.Router();

//CREATE
router.post('/', createHotel);

//UPDATE
router.put('/:id', updateHotel);

//DELETE
router.delete('/:id', deleteHotel);

//GET
router.get('/:id', getOneHotel);

//GET ALL
router.get('/', getHotels);

export default router;

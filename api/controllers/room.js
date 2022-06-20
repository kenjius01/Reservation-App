import Room from '../models/Room.js';
import Hotel from '../models/Hotel.js';

import { createError } from '../utils/error.js';

export const createRoom = async (req, res, next) => {
    const hotelId = req.params.hotelId;
    const newRoom = new Room(req.body);
    try {
        const savedRoom = await newRoom.save();
        try {
            await Hotel.findByIdAndUpdate(hotelId, {
                $push: { rooms: savedRoom._id },
            });
        } catch (err) {
            next(err);
        }
        res.status(200).json(savedRoom);
    } catch (err) {
        next(err);
    }
};

export const updateRoom = async (req, res, next) => {
    try {
        const updatedRoom = await Room.findByIdAndUpdate(
            req.params.id,
            { $set: req.body },
            { new: true }
        );
        res.status(200).json(updatedRoom);
    } catch (err) {
        next(err);
    }
};
export const updateRoomAvailability = async (req, res, next) => {
    try {
        await Room.updateOne(
            { 'roomNumbers._id': req.params.id },
            {
                $push: {
                    'roomNumbers.$.availableDates': req.body.dates,
                },
            }
        );
        res.status(200).json('Room status has been updated.');
    } catch (err) {
        next(err);
    }
};
export const deleteRoom = async (req, res, next) => {
    const hotelId = req.params.hotelId;
    try {
        await Room.findByIdAndDelete(req.params.id);
        try {
            await Hotel.findByIdAndUpdate(hotelId, {
                $pull: { rooms: req.params.id },
            });
        } catch (err) {
            next(err);
        }
        res.status(200).json('room has been deleted!');
    } catch (err) {
        next(err);
    }
};

export const getOneRoom = async (req, res, next) => {
    try {
        const room = await Room.findById(req.params.id);
        if (!room) return next(createError(400, 'Not found this room!'));
        res.status(200).json(hotel);
    } catch (err) {
        next(err);
    }
};

export const getRooms = async (req, res, next) => {
    try {
        const rooms = await Room.find();
        res.status(200).json(rooms);
    } catch (err) {
        next(err);
    }
};

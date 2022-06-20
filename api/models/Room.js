import mongoose from 'mongoose';
const { Schema } = mongoose;

const roomShema = new Schema(
    {
        title: {
            type: String,
            required: true,
        },
        price: {
            type: Number,
            required: true,
        },
        maxPeople: {
            type: Number,
            required: true,
        },
        roomNumbers: [{ number: Number, availableDates: { type: [Date] } }],
        desc: {
            type: String,
            required: true,
        },
    },
    { timestamps: true }
);

export default mongoose.model('Room', roomShema);

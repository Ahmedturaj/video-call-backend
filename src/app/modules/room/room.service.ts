import { v4 as uuidv4 } from "uuid";
import { Room } from "./room.model";
import AppError from "../../error/appError";


const createRoom = async () => {
    const roomId = uuidv4();
    const existingRoom = await Room.findOne({ roomId });

    if (existingRoom) {
        throw new AppError(400, "Room already exists");
    }

    const room = await Room.create({
        roomId,
        participants: [],
    });

    return room;
};

const getRoom = async (roomId: string) => {
    return await Room.findOne({ roomId });
};

export const RoomService = {
    createRoom,
    getRoom,
};
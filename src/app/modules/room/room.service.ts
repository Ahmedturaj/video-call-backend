import { v4 as uuidv4 } from "uuid";
import { Room } from "./room.model";


const createRoom = async () => {
  const roomId = uuidv4();

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
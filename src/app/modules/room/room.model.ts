import { Schema, model } from "mongoose";
import { IRoom } from "./room.interface";

const roomSchema = new Schema<IRoom>(
  {
    roomId: { type: String, required: true, unique: true },
    participants: [{ type: String }],
  },
  { timestamps: true }
);

export const Room = model<IRoom>("Room", roomSchema);
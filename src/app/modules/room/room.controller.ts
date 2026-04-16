import { Request, Response } from "express";
import { RoomService } from "./room.service";
import catchAsync from "../../utils/catchAsycn";
import AppError from "../../error/appError";
import sendResponse from "../../utils/sendResponse";

const createRoom = catchAsync(async (req, res) => {
    if (!req.body) {
        throw new AppError(400, "Invalid request body");
    };
    const result = await RoomService.createRoom();
    if (!result) {
        throw new AppError(500, "Failed To Create Room");
    }
    sendResponse(res, {
        statusCode: 200,
        success: true,
        message: "Room Created successfully",
        data: result
    })
})

const getRoom = catchAsync(async(req, res)=>{
const { id } = req.params;
    if (!id) {
        throw new AppError(400, "Room ID is required");
    }
    const result = await RoomService.getRoom(id);

    if (!result) {
        throw new AppError(404, "Room Not found");
    }

    sendResponse(res, {
        statusCode: 200,
        success: true,
        message: "Room retrieved successfully",
        data: result,
    })
})

export const RoomController = {
    createRoom,
    getRoom,
};
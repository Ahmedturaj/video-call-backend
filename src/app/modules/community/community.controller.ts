import AppError from "../../error/appError";
import catchAsync from "../../utils/catchAsycn";
import sendResponse from "../../utils/sendResponse";
import { createCommunityService, joinCommunityService, leaveCommunityService } from "./community.service";

export const createCommunity = catchAsync(async(req, res)=>{
    if(!req.body.name){
        throw new AppError(400, "Community name is required");
    };
    const result = await createCommunityService(req.user.userId, req.body.name);
    if(!result){
        throw new AppError(500, "Failed to create community");
    };
    sendResponse(res, {
        statusCode: 200,
        success:true,
        message:"Community created successfully",
        data: result
    });
});

export const joinCommunity = catchAsync(async(req, res)=>{
    if(!req.user){
        throw new AppError(400, "User is required");
    };
    if(!req.params.id){
        throw new AppError(400, "Community ID is required");
    };
    const result = await joinCommunityService(req.user.userId, req.params.id);
    if(!result){
        throw new AppError(500, "Failed to join community");
    };
    sendResponse(res, {
        statusCode: 200,
        success:true,
        message:"Community joined successfully",
        data: result
    });
});

export const leaveCommunity = catchAsync(async (req, res) => {
  if(!req.user){
    throw new AppError(400, "User is required");
  };
  if(!req.params.id){
    throw new AppError(400, "Community ID is required");
  };
  const data = await leaveCommunityService(req.user.userId, req.params.id);
  sendResponse(res, {
    statusCode: 200,
    success:true,
    message:"Community left successfully",
    data: data
  });
});
import { Community } from "./community.model";

export const createCommunityService = async (userId: string, name: string) => {
  return await Community.create({
    name,
    owner: userId,
    members: [userId]
  });
};

export const joinCommunityService = async (userId: string, communityId: string) => {
  return await Community.findByIdAndUpdate(
    communityId,
    { $addToSet: { members: userId } },
    { new: true }
  );
};

export const leaveCommunityService = async (userId: string, communityId: string) => {
  return await Community.findByIdAndUpdate(
    communityId,
    { $pull: { members: userId } },
    { new: true }
  );
};
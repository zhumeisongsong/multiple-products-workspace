import { UsersService } from "./users.service";

export const toggleUserSelfCareTopicUseCase = async (topicId: string) => {
  const usersService = new UsersService();
  const result = await usersService.toggleUserSelfCareTopic(topicId);
  
  return result;
};

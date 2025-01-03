import { UsersService } from './users.service';

export const getUserSelfCareTopicsUseCase = async () => {
  const usersService = new UsersService();
  const result = await usersService.getUserSelfCareTopics();

  return result;
};

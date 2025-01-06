import { UsersService } from './users.service';

export const getUserSelfCareTopicsUseCase = async (
  usersService: UsersService,
) => {
  return await usersService.getUserSelfCareTopics();
};

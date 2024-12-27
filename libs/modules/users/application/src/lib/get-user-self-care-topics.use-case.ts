import { UsersService } from './users.service';

export const getUserSelfCareTopicsUseCase = async (userId: string) => {
  const usersService = new UsersService();
  const result = await usersService.getUserSelfCareCategories();

  return result;
};

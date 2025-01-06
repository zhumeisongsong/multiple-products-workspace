import { UsersService } from './users.service';

export const getUserSelfCareTopicsUseCase = async (
  usersService: UsersService,
) => {
  let user = await usersService.findUserById('');

  if (!user) {
    await usersService.createUser();
    user = await usersService.findUserById('');

    if (!user) {
      throw new Error('Failed to initialize user');
    }
  }

  return user.preferences.selfCareTopics;
};

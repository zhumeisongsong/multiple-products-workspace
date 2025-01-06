import { User } from '@users/domain';

import { UsersService } from './users.service';

export const getUserByIdUseCase = async (
  id: string,
  usersService: UsersService,
): Promise<User> => {
  let user = await usersService.findUserById(id);

  if (!user) {
    await usersService.createUser();
    user = await usersService.findUserById('');

    if (!user) {
      throw new Error('Failed to initialize user');
    }
  }

  return user;
};

import { SelfCareTopic } from '@self-care-topics/domain';

import { UsersService } from './users.service';

export const setUserSelfCareTopicsUseCase = async (topics: SelfCareTopic[]) => {
  const usersService = new UsersService();
  const result = await usersService.setUserSelfCareTopics(topics);

  return result;
};

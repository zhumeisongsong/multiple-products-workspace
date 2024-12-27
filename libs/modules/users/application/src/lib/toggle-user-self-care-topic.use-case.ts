import { SelfCareTopic } from "@self-care-topics/domain";

import { UsersService } from "./users.service";

export const toggleUserSelfCareTopicUseCase = async (topic: SelfCareTopic) => {
  const usersService = new UsersService();
  const result = await usersService.toggleUserSelfCareTopic(topic);
  
  return result;
};

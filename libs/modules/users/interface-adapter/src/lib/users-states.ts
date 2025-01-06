import { SelfCareTopic } from '@self-care-topics/domain';
import {
  getUserByIdUseCase,
  updateUserSelfCareTopicsUseCase,
  UsersServiceFactory,
} from '@users/application';
import { User } from '@users/domain';
import { proxy } from 'valtio';

export type UsersStates = {
  me: User | null;
};

export const usersStates = proxy<UsersStates>({
  me: null,
});

export const usersActions = {
  setUser: async () => {
    usersStates.me = await getUserByIdUseCase(
      '',
      UsersServiceFactory.getInstance(),
    );
  },
  toggleSelfCareTopic: async (selfCareTopic: SelfCareTopic) => {
    if (!usersStates.me) {
      return;
    }

    if (
      usersStates.me.preferences.selfCareTopics.some(
        (topic) => topic.id === selfCareTopic.id,
      )
    ) {
      usersStates.me.preferences.selfCareTopics =
        usersStates.me.preferences.selfCareTopics.filter(
          (topic) => topic.id !== selfCareTopic.id,
        );
    } else {
      usersStates.me.preferences.selfCareTopics.push(selfCareTopic);
    }

    await updateUserSelfCareTopicsUseCase(
      usersStates.me.preferences.selfCareTopics,
      UsersServiceFactory.getInstance(),
    );
  },
};

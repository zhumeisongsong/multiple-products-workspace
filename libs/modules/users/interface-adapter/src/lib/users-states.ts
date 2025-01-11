import { SelfCareTopic } from '@self-care-topics/domain';
import {
  getUserByIdUseCase,
  updateUserSelfCareTopicsUseCase,
  UsersServiceFactory,
} from '@users/application';
import { UserPreferences } from '@users/domain';
import { proxy } from 'valtio';

export type UsersStates = {
  userId: string | null;
  email: string | null;
  firstName: string | null;
  lastName: string | null;
  userPreferences: UserPreferences;
};

export const usersStates = proxy<UsersStates>({
  userId: null,
  email: null,
  firstName: null,
  lastName: null,
  userPreferences: {
    selfCareTopics: [],
  },
});

export const usersActions = {
  getMe: async () => {
    const me = await getUserByIdUseCase('', UsersServiceFactory.getInstance());

    if (!me) {
      return;
    }

    usersStates.userId = me.id;
    usersStates.email = me.email || null;
    usersStates.firstName = me.firstName || null;
    usersStates.lastName = me.lastName || null;
    usersStates.userPreferences.selfCareTopics = me.preferences.selfCareTopics;
  },
  toggleSelfCareTopic: async (selfCareTopic: SelfCareTopic) => {
    const currentTopics = [...usersStates.userPreferences.selfCareTopics];

    if (currentTopics.some((topic) => topic.id === selfCareTopic.id)) {
      usersStates.userPreferences.selfCareTopics = currentTopics.filter(
        (topic) => topic.id !== selfCareTopic.id,
      );
    } else {
      usersStates.userPreferences.selfCareTopics = [
        ...currentTopics,
        selfCareTopic,
      ];
    }

    await updateUserSelfCareTopicsUseCase(
      usersStates.userPreferences.selfCareTopics,
      UsersServiceFactory.getInstance(),
    );
  },
};

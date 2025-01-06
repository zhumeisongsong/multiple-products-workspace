import { SelfCareTopic } from '@self-care-topics/domain';
import {
  getUserSelfCareTopicsUseCase,
  saveUserSelfCareTopicsUseCase,
  UsersServiceFactory,
} from '@users/application';
import { User, UserPreferences } from '@users/domain';
import { proxy } from 'valtio';

export type UsersStates = {
  me: User | null;
  userPreferences: UserPreferences;
  isLoading: boolean;
};

export const usersStates = proxy<UsersStates>({
  me: null,
  userPreferences: {
    selfCareTopics: [],
  },
  isLoading: false,
});

export const usersActions = {
  setMe: (user: User) => {
    usersStates.me = user;
  },
  initialUserSelfCareTopics: async () => {
    usersStates.userPreferences.selfCareTopics =
      await getUserSelfCareTopicsUseCase(UsersServiceFactory.getInstance());
  },
  toggleSelfCareTopic: async (selfCareTopic: SelfCareTopic) => {
    if (
      usersStates.userPreferences.selfCareTopics.some(
        (topic) => topic.id === selfCareTopic.id,
      )
    ) {
      usersStates.userPreferences.selfCareTopics =
        usersStates.userPreferences.selfCareTopics.filter(
          (topic) => topic.id !== selfCareTopic.id,
        );
    } else {
      usersStates.userPreferences.selfCareTopics.push(selfCareTopic);
    }

    await saveUserSelfCareTopicsUseCase(
      usersStates.userPreferences.selfCareTopics,
      UsersServiceFactory.getInstance(),
    );
  },
  setIsLoading: () => {
    usersStates.isLoading = true;
  },
  setIsLoadingFinished: () => {
    usersStates.isLoading = false;
  },
};

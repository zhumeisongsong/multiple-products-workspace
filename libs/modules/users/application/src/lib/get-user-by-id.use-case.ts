import { User } from '@users/domain';

export const getUserByIdUseCase = async (id: string): Promise<User | null> => {
  return {
    id,
    preferences: {
      selfCareTopics: [],
    },
  };
};

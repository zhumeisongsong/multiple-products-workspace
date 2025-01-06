export const getUserByIdUseCase = async (id: string) => {
  return {
    id,
    preferences: {
      selfCareTopics: [],
    },
  };
};

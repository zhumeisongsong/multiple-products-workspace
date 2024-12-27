import { getUserSelfCareTopicsUseCase } from './get-user-self-care-topics.use-case';

describe('getUserSelfCareTopicsUseCase', () => {
  it('should return an array of self care topics', async () => {
    const userId = '123';
    const result = await getUserSelfCareTopicsUseCase(userId);
    expect(Array.isArray(result)).toBeTruthy();
  });
});

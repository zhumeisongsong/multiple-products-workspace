import { getUserSelfCareTopicsUseCase } from './get-user-self-care-topics.use-case';

describe('getUserSelfCareTopicsUseCase', () => {
  it('should return an array of self care topics', async () => {
    const result = await getUserSelfCareTopicsUseCase();
    expect(Array.isArray(result)).toBeTruthy();
  });
});

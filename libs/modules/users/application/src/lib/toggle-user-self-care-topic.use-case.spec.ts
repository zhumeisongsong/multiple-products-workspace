import { toggleUserSelfCareTopicUseCase } from './toggle-user-self-care-topic.use-case';

describe('toggleUserSelfCareTopicUseCase', () => {
  it('should toggle user self care topic successfully', async () => {
    const topicId = '123';
    const result = await toggleUserSelfCareTopicUseCase(topicId);
    expect(result).toBe('success');
  });
});

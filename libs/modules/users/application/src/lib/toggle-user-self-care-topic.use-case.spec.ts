import { SelfCareTopic } from '@self-care-topics/domain';
import { toggleUserSelfCareTopicUseCase } from './toggle-user-self-care-topic.use-case';
import { UsersService } from './users.service';

vi.mock('./users.service');

describe('toggleUserSelfCareTopicUseCase', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('should toggle self care topic using service', async () => {
    const mockTopic: SelfCareTopic = { id: '1', name: 'Exercise' };

    const toggleUserSelfCareTopicSpy = vi
      .spyOn(UsersService.prototype, 'toggleUserSelfCareTopic')
      .mockResolvedValue('success');

    const result = await toggleUserSelfCareTopicUseCase(mockTopic);

    expect(toggleUserSelfCareTopicSpy).toHaveBeenCalledWith(mockTopic);
    expect(result).toBe('success');
  });
});

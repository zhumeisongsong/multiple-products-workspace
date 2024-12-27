import { SelfCareTopic } from '@self-care-topics/domain';

import { setUserSelfCareTopicsUseCase } from './set-user-self-care-topics.use-case';
import { UsersService } from './users.service';

vi.mock('./users.service');

describe('toggleUserSelfCareTopicUseCase', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('should toggle self care topic using service', async () => {
    const mockTopics: SelfCareTopic[] = [
      { id: '1', name: 'Exercise' },
      { id: '2', name: 'Sleep' },
    ];

    const setUserSelfCareTopicsSpy = vi
      .spyOn(UsersService.prototype, 'setUserSelfCareTopics')
      .mockResolvedValue('success');

    const result = await setUserSelfCareTopicsUseCase(mockTopics);

    expect(setUserSelfCareTopicsSpy).toHaveBeenCalledWith(mockTopics);
    expect(result).toBe('success');
  });
});

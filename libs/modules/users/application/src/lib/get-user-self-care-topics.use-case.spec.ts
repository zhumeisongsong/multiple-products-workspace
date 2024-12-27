import { SelfCareTopic } from '@self-care-topics/domain';
import { getUserSelfCareTopicsUseCase } from './get-user-self-care-topics.use-case';
import { UsersService } from './users.service';

vi.mock('./users.service');

describe('getUserSelfCareTopicsUseCase', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('should return self care topics from service', async () => {
    const mockTopics: SelfCareTopic[] = [
      { id: '1', name: 'Exercise' },
      { id: '2', name: 'Meditation' }
    ];

    const getUserSelfCareTopicsSpy = vi
      .spyOn(UsersService.prototype, 'getUserSelfCareTopics')
      .mockResolvedValue(mockTopics);

    const result = await getUserSelfCareTopicsUseCase();

    expect(getUserSelfCareTopicsSpy).toHaveBeenCalled();
    expect(result).toEqual(mockTopics);
  });
});

import { SelfCareTopic } from '@self-care-topics/domain';
import { IUsersRepository, LocalStorageRepository } from '@shared/infrastructure-storage';
import { UsersService } from './users.service';

describe('UsersService', () => {
  let service: UsersService;
  let usersRepository: IUsersRepository;

  beforeEach(() => {
    service = new UsersService();
    usersRepository = new IUsersRepository(new LocalStorageRepository());
  });

  describe('getUserSelfCareTopics', () => {
    it('should return topics from repository', async () => {
      const mockTopics: SelfCareTopic[] = [
        { id: '1', name: 'Exercise' },
        { id: '2', name: 'Meditation' }
      ];

      vi.spyOn(usersRepository, 'getUserSelfCareTopics').mockResolvedValue(mockTopics);

      const result = await service.getUserSelfCareTopics();
      expect(result).toEqual(mockTopics);
    });
  });

  describe('toggleUserSelfCareTopic', () => {
    it('should add topic when it does not exist', async () => {
      const topic: SelfCareTopic = { id: '1', name: 'Exercise' };
      
      vi.spyOn(usersRepository, 'getUserSelfCareTopics').mockResolvedValue([]);
      const addSpy = vi.spyOn(usersRepository, 'addUserSelfCareTopic');

      const result = await service.toggleUserSelfCareTopic(topic);

      expect(addSpy).toHaveBeenCalledWith(topic);
      expect(result).toBe('success');
    });

    it('should remove topic when it exists', async () => {
      const topic: SelfCareTopic = { id: '1', name: 'Exercise' };
      
      vi.spyOn(usersRepository, 'getUserSelfCareTopics').mockResolvedValue([topic]);
      const deleteSpy = vi.spyOn(usersRepository, 'deleteUserSelfCareTopic');

      const result = await service.toggleUserSelfCareTopic(topic);

      expect(deleteSpy).toHaveBeenCalledWith(topic);
      expect(result).toBe('success');
    });
  });
});

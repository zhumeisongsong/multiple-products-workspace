import { SelfCareTopic } from '@self-care-topics/domain';
import { UsersRepositoryImpl } from './users.repository';
import { LocalStorageRepository } from './local-storage.repository';

describe('IUsersRepository', () => {
  let usersRepository: UsersRepositoryImpl;
  let localStorageRepository: LocalStorageRepository;

  beforeAll(() => {
    global.localStorage = {
      getItem: vi.fn(),
      setItem: vi.fn(),
      removeItem: vi.fn(),
      clear: vi.fn(),
      length: 0,
      key: vi.fn(),
    };
  });

  beforeEach(() => {
    localStorageRepository = new LocalStorageRepository();
    usersRepository = new UsersRepositoryImpl(localStorageRepository);
  });

  afterEach(() => {
    localStorage.clear();
  });

  describe('getUserSelfCareTopics', () => {
    it('should return empty array when no topics exist', async () => {
      const topics = await usersRepository.getUserSelfCareTopics();
      expect(topics).toEqual([]);
    });

    it('should return stored topics', async () => {
      const mockTopics: SelfCareTopic[] = [
        { id: '1', name: 'Exercise' },
        { id: '2', name: 'Meditation' },
      ];

      vi.spyOn(localStorage, 'getItem').mockReturnValueOnce(
        JSON.stringify(mockTopics),
      );

      localStorageRepository.set('user-self-care-topics', mockTopics);

      const topics = await usersRepository.getUserSelfCareTopics();
      expect(topics).toEqual(mockTopics);
    });
  });

  describe('setUserSelfCareTopics', () => {
    it('should set the user self care topics', async () => {
      const topics: SelfCareTopic[] = [{ id: '1', name: 'Exercise' }];
      vi.spyOn(localStorage, 'getItem').mockReturnValueOnce(
        JSON.stringify(topics),
      );
      await usersRepository.setUserSelfCareTopics(topics);
      expect(localStorage.setItem).toHaveBeenCalledWith('user-self-care-topics', JSON.stringify(topics));
    });
  });
});

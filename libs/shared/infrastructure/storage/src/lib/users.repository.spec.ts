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

  it('should create a user', () => {
    usersRepository.createUser();

    expect(localStorage.getItem('user')).toBeDefined();
  });

  it('should find a user by id', () => {
    usersRepository.createUser();
    const user = usersRepository.findUserById('1');
    expect(user).toBeDefined();
  });

  it('should update the user self care topics', () => {
    usersRepository.createUser();
    const topics: SelfCareTopic[] = [{ id: '1', name: 'Exercise' }];
    usersRepository.updateUserSelfCareTopics(topics);
    expect(localStorage.getItem('user-self-care-topics')).toEqual(
      JSON.stringify(topics),
    );
  });
});

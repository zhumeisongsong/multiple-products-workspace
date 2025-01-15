import { UserTask, UserTaskStatusEnum } from '@user-tasks/domain';
import { UserTasksRepositoryImpl } from './user-tasks.repository';
import { LocalStorageRepository } from './local-storage.repository';

describe('UserTasksRepository', () => {
  let userTasksRepository: UserTasksRepositoryImpl;
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
    userTasksRepository = new UserTasksRepositoryImpl(localStorageRepository);
  });

  afterEach(() => {
    localStorage.clear();
  });

  describe('findManyUserTasks', () => {
    it('should return empty array when no tasks exist', async () => {
      const tasks = await userTasksRepository.findManyUserTasks('');
      expect(tasks).toEqual([]);
    });

    it('should return all stored tasks when no filter provided', async () => {
      const mockTasks: UserTask[] = [
        {
          id: '1',
          name: 'Task 1',
          status: UserTaskStatusEnum.TODO,
          createdAt: '2025-01-03T05:53:51.462Z',
          categories: [],
          updatedAt: '2025-01-03T05:53:51.462Z',
          userId: '1',
        },
        {
          id: '2',
          name: 'Task 2',
          status: UserTaskStatusEnum.IN_PROGRESS,
          createdAt: '2025-01-04T05:53:51.462Z',
          categories: [],
          updatedAt: '2025-01-04T05:53:51.462Z',
          userId: '1',
        },
      ];

      vi.spyOn(localStorage, 'getItem').mockReturnValueOnce(
        JSON.stringify(mockTasks),
      );
      localStorageRepository.set('user-tasks', mockTasks);

      const tasks = await userTasksRepository.findManyUserTasks('');
      expect(tasks).toEqual(mockTasks);
    });

    it('should return filtered tasks when date filter provided', async () => {
      const mockTasks: UserTask[] = [
        {
          id: '1',
          name: 'Task 1',
          status: UserTaskStatusEnum.TODO,
          createdAt: '2025-01-03T05:53:51.462Z',
          categories: [],
          updatedAt: '2025-01-03T05:53:51.462Z',
          userId: '1',
        },
        {
          id: '2',
          name: 'Task 2',
          status: UserTaskStatusEnum.IN_PROGRESS,
          createdAt: '2025-01-04T05:53:51.462Z',
          categories: [],
          updatedAt: '2025-01-04T05:53:51.462Z',
          userId: '1',
        },
        {
          id: '3',
          name: 'Task 3',
          status: UserTaskStatusEnum.TODO,
          createdAt: '2025-01-05T05:53:51.462Z',
          categories: [],
          updatedAt: '2025-01-05T05:53:51.462Z',
          userId: '1',
        },
      ];

      vi.spyOn(localStorage, 'getItem').mockReturnValueOnce(
        JSON.stringify(mockTasks),
      );
      localStorageRepository.set('user-tasks', mockTasks);

      const filter = {
        dateRange: {
          startedAt: '2025-01-03T00:00:00.000Z',
          endedAt: '2025-01-04T23:59:59.999Z',
        },
      };

      const tasks = await userTasksRepository.findManyUserTasks('', filter);
      expect(tasks).toEqual([mockTasks[0], mockTasks[1]]);
    });
  });

  describe('createUserTasks', () => {
    it('should store tasks in localStorage', async () => {
      const mockTasks: UserTask[] = [
        {
          id: '1',
          name: 'Task 1',
          status: UserTaskStatusEnum.TODO,
          categories: [],
          userId: '1',
        },
      ];

      vi.spyOn(localStorage, 'getItem').mockReturnValueOnce(
        JSON.stringify(mockTasks),
      );

      await userTasksRepository.createUserTasks(mockTasks);

      vi.spyOn(localStorage, 'getItem').mockReturnValueOnce(
        JSON.stringify(mockTasks),
      );
      const storedTasks = localStorageRepository.get('user-tasks');
      expect(storedTasks).toEqual(mockTasks);
    });
  });
});

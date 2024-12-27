import { Mock } from 'vitest';
import { LocalStorageRepository } from './local-storage.repository';

describe('LocalStorageRepository', () => {
  let repository: LocalStorageRepository;

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
    repository = new LocalStorageRepository();
    localStorage.clear();
    vi.clearAllMocks();
  });

  it('should set value to localStorage', () => {
    const key = 'test-key';
    const value = { data: 'test-value' };

    repository.set(key, value);

    expect(localStorage.setItem).toHaveBeenCalledWith(
      key,
      JSON.stringify(value),
    );
  });

  it('should get value from localStorage', () => {
    const key = 'test-key';
    const value = { data: 'test-value' };
    const stringifiedValue = JSON.stringify(value);

    vi.spyOn(localStorage, 'getItem').mockReturnValue(stringifiedValue);

    const result = repository.get(key);

    expect(result).toEqual(value);
  });

  it('should remove value from localStorage', () => {
    const key = 'test-key';

    repository.remove(key);

    expect(localStorage.removeItem).toHaveBeenCalledWith(key);
  });
});

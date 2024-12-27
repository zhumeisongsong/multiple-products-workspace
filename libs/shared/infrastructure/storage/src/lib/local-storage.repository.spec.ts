import { LocalStorageRepository } from './local-storage.repository';

describe('LocalStorageRepository', () => {
  let repository: LocalStorageRepository;

  beforeEach(() => {
    repository = new LocalStorageRepository();
    localStorage.clear();
  });

  it('should save value to localStorage', () => {
    const key = 'test-key';
    const value = { data: 'test-value' };

    repository.save(key, value);

    expect(localStorage.getItem(key)).toBe(JSON.stringify(value));
  });

  it('should get value from localStorage', () => {
    const key = 'test-key';
    const value = 'test-value';
    localStorage.setItem(key, value);

    const result = repository.get(key);

    expect(result).toBe(value);
  });

  it('should remove value from localStorage', () => {
    const key = 'test-key';
    localStorage.setItem(key, 'test-value');

    repository.remove(key);

    expect(localStorage.getItem(key)).toBeNull();
  });
});

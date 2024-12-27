export class LocalStorageRepository {
  save(key: string, value: unknown) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  get(key: string) {
    return localStorage.getItem(key);
  }

  remove(key: string) {
    localStorage.removeItem(key);
  }
}

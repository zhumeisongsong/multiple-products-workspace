import { User } from './user.entity';

describe('User', () => {
  it('should create a User with the given id and name', () => {
    const user: User = {
      id: '1',
      email: 'test@example.com',
    };

    expect(user.id).toBe('1');
    expect(user.email).toBe('test@example.com');
  });
});

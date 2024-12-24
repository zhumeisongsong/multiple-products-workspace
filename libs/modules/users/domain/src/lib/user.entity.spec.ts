import { UserEntity } from './user.entity';

describe('UserEntity', () => {
  it('should create a UserEntity with the given id and name', () => {
    const user: UserEntity = {
      id: '1',
      email: 'test@example.com',
      firstName: 'John',
      lastName: 'Doe',
    };

    expect(user.id).toBe('1');
    expect(user.email).toBe('test@example.com');
    expect(user.firstName).toBe('John');
    expect(user.lastName).toBe('Doe');
  });
});

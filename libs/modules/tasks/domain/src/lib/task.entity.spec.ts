import { Task } from './task.entity';

describe('Task', () => {
  it('should create a task entity with required fields', () => {
    const task: Task = {
      id: '123',
      name: 'Test Task',
      categories: []
    };

    expect(task.id).toBe('123');
    expect(task.name).toBe('Test Task');
    expect(task.categories).toEqual([]);
  });

  it('should create a task entity with optional fields', () => {
    const task: Task = {
      id: '123',
      name: 'Test Task', 
      description: 'Test Description',
      categories: [
        {
          id: '456',
          name: 'Test Category'
        }
      ]
    };

    expect(task.id).toBe('123');
    expect(task.name).toBe('Test Task');
    expect(task.description).toBe('Test Description');
    expect(task.categories).toHaveLength(1);
    expect(task.categories[0].id).toBe('456');
    expect(task.categories[0].name).toBe('Test Category');
  });
});

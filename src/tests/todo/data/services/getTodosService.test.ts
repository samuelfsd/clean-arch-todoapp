import { describe, expect, it } from 'vitest';
import { GetTodosService } from '../../../../todo/data/services/getTodosService';
import { App } from './app.tsx';
describe('get todos list service', () => {
  it('should be get result of todos', () => {
    const getTodosService = new GetTodosService();

    const result = getTodosService.getTodos();

    expect(result).toHaveLength(result.length);
  });
});

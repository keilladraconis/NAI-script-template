import { describe, expect, it } from 'vitest';

describe('api mock', () => {
  it('is registered on globalThis', () => {
    expect(api).toBeDefined();
    expect(api.v1).toBeDefined();
  });

  it('exposes log and error as callable mocks', () => {
    api.v1.log('hello');
    api.v1.error('boom');
    expect(api.v1.log).toHaveBeenCalledWith('hello');
    expect(api.v1.error).toHaveBeenCalledWith('boom');
  });
});

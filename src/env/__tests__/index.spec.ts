import { isBrowser } from '../index';

describe('env', () => {
  it('test isBrowser', () => {
    expect(isBrowser()).toBe(!!window);
  });
});

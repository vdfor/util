import { validEmailRegx, validPhoneRegx } from '../index';

describe('check', () => {
  it('test validEmailRegx', () => {
    expect(validEmailRegx.test('example@example.com')).toBe(true);
    expect(validEmailRegx.test('example@examplecom')).toBe(false);
  });

  it('test validPhoneRegx', () => {
    expect(validPhoneRegx.test('13013012345')).toBe(true);
    expect(validPhoneRegx.test('10013012345')).toBe(false);
  });
});

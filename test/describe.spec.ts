import { describe, it, expect, assert } from 'vitest';

const person = {
  isActive: true,
  age: 32
}

describe('person', () => {
  it('person is defined', () => {
    expect(person).toBeDefined();
  })

  it('person is active', () => {
    expect(person.isActive).toBeTruthy();
    expect(person.isActive).toBe(true);
  })

  it('person age', () => {
    expect(person.age).toBe(32);
    expect(person.age).toBeGreaterThan(30);
    expect(person.age).toBeLessThan(40);
    expect(person.age).toBeLessThanOrEqual(56);
  })
})

describe.only('test only', () => {
  it('only one', () => {
    const str = 'hello';
    expect(str).toBe('hello');
  })
  it('only two', () => {
    expect(Math.sqrt(4)).toBe(2);
    assert(Math.sqrt(4) === 2);
    assert.equal(Math.sqrt(4), 2);
  })
})

describe.skip('test skip', () => {
  it('test only one', () => {
    expect(true).toBe(false);
  })
})

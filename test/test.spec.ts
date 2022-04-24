import { test, expect, it } from 'vitest'

test('happy path', () => {
    expect(true).toBe(true);
})

it('happy path', () => {
    expect(true).toBe(true);
})

it.skip('test skip', () => {
    expect(true).toBe(false);
})

// 只test这个，调试作用大
// it.only('test only', () => {
//     expect(true).toBe(true);
// })

it.todo('test todo', () => {
    expect(true).toBe(false);
})

// const myAsyncFunc = () => new Promise(resolve => resolve(1))
// it.fails("fail test", () => {
//     expect(myAsyncFunc()).rejects.toBe(1);
// })

it.each([
    [1,2,3],
    [3,4,7]
])('test add', (a, b, sum) => {
    expect(a + b).toBe(sum);
})






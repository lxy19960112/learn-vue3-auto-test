//expect 创建断言 not否定断言
it('test', () => {
  expect(8).not.toBe(2) // jest API
  expect(0.2 + 0.1).not.toBe(0.3)
  expect(0.2 + 0.1).toBeCloseTo(0.3)
})

it.fails('test fail', () => {
  expect(0.1+0.2).toBe(0.3)
})

const func = () => void 0
it('func to be return undefined', () => {
  expect(func()).toBeUndefined()
  expect(func()).not.toBeDefined()
})

it('test truthy falsy', () => {
  expect(true).toBeTruthy()
  expect(false).toBeFalsy()
})

it('test null', () => {
  expect(null).toBeNull()
  expect(undefined).not.toBeNull()
  expect(undefined).not.toBe(null)
})

it('test typeof', () => {
  const  str = 'aa'
  expect(str).toBeTypeOf('string')
  const obj = {}
  expect(obj).toBeTypeOf('object')
})

it('test equal', () => {
  expect(1).toEqual(1)
  expect(1).not.toEqual(2)
  expect({}).toEqual({})
  expect({}).not.toEqual({a: 1})
})


it('test contain', () => {
  const arr = [1,2,3]
  expect(arr).not.toContain(4)
  const str = '12aaaaa'
  expect(str).toContain('12')
})

it('test toHaveLength', () => {
  expect([1,2,3]).toHaveLength(3)
  expect('12').toHaveLength(2)
  expect({length: 3}).toHaveLength(3)
})

const invoice = {
  isActive: true,
  customer: {
    first_name: 'John',
    last_name: 'Doe',
    location: 'China',
  },
  total_amount: 5000,
  items: [
    {
      type: 'apples',
      quantity: 10,
    },
    {
      type: 'oranges',
      quantity: 5,
    },
  ]
}

it('test haveProperty', () => {
  expect(invoice).toHaveProperty('isActive')
  expect(invoice).toHaveProperty('customer.first_name')
  expect(invoice).toHaveProperty('customer.location', 'China')
  expect(invoice).toHaveProperty('total_amount', 5000)
  expect(invoice).toHaveProperty('items[0].type', 'apples')
  expect(invoice).toHaveProperty('items[1].quantity', 5)
})

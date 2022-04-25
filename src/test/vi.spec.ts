// let i = 0
// const timer = setInterval(() => console.log(++i), 50)
// vi.useFakeTimers()
// vi.advanceTimersByTime(150)

it('fn', () => {
  const fn = vi.fn(() => {
    console.log('12345678 :>> ', 12345678);
  })
  fn()
  expect(fn).toHaveBeenCalled()
})

it('advanceTimersByTime', () => {
  // let i = 0
  // setInterval(() => {
  //   console.log('121212121 :>> ', 121212121);
  // }, 50);
  vi.useFakeTimers()
  // vi.advanceTimersByTime(50)

  let i = 0
  setInterval(() => console.log(++i), 50)

  vi.advanceTimersToNextTimer() // 输出 1
    .advanceTimersToNextTimer() // 输出 2
    .advanceTimersToNextTimer() // 输出 3
  vi.clearAllTimers()
})

it('getMockedSystemTime', () => {
  const time = vi.getMockedSystemTime()
  console.log('time :>> ', time);
})

it('getRealSystemTime', () => {
  const time = vi.getRealSystemTime()
  console.log('time :>> ', time);
})


describe('dom test', () => {
  it.concurrent('testing-dom', () => {
    const div = document.createElement('div');
    div.id = 'testing-dom';
    expect(div).toBeDefined()
    expect(div).toBeTypeOf('object')
    expect(div).toBeInstanceOf(HTMLDivElement)

    document.body.appendChild(div);
    const mask: HTMLDivElement = document.getElementById('testing-dom');
    expect(mask).toBeInTheDocument()

    div.remove()
    expect(mask).not.toBeInTheDocument()
  })
})

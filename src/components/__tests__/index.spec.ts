import {render, fireEvent} from '@testing-library/vue'
import Component from '../HelloWorld.vue'

it('increments value on click', async () => {
  const {getByText} = render(Component)
  getByText('Times clicked: 1')

  const button = getByText('click')
  await fireEvent.click(button)
  getByText('Times clicked: 2')

})

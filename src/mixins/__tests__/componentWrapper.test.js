import { createLocalVue, mount } from '@vue/test-utils'

import { DruxtCommonComponentWrapperMixin } from '../..'

// Setup local vue instance.
const localVue = createLocalVue()

const component = {
  name: 'DruxtCommonTestComponent',
  mixins: [DruxtCommonComponentWrapperMixin],
  render: () => ({})
}

describe('DruxtCommonComponentWrapper', () => {
  test('defaults', () => {
    const wrapper = mount(component, { localVue })
    expect(wrapper.vm.wrapper.component).toBe('div')
    expect(wrapper.vm.wrapper.props).toStrictEqual({})
  })

  test('wrapper', () => {
    const propsData = {
      wrapper: {
        component: 'span',
        props: {
          class: 'class'
        }
      }
    }
    const wrapper = mount(component, { localVue, propsData })
    expect(wrapper.vm.wrapper.component).toBe('span')
    expect(wrapper.vm.wrapper.props).toStrictEqual({
      class: 'class'
    })
  })
})

/**
 * @mixin
 */
const DruxtCommonComponentWrapperMixin = {
  props: {
    /**
     * Wrapper component and props.
     *
     * @type {object}
     * @default { component: 'div', props: {} }
     */
    wrapper: {
      type: Object,
      default: () => ({
        component: 'div',
        props: {}
      })
    }
  }
}

export { DruxtCommonComponentWrapperMixin }

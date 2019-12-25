import Vue from 'vue'
import Button from './button'
import ButtonGroup from './buttonGroup'
import chai from 'chai'
import spies from 'chai-spies'

chai.use(spies)
const expect = chai.expect

new Vue({
  el: '#app',
  data: {
    loading1: true,
    loading2: false
  },
  components: {
    'm-button': Button,
    'm-button-group': ButtonGroup
  }
});

// 单元测试
{
  const Constructor = Vue.extend(Button)

  const vm = new Constructor({
    propsData: {
      icon: 'setting'
    }
  })

  vm.$mount()

  let useElement = vm.$el.querySelector('use')
  let href = useElement.getAttribute('xlink:href')

  expect(href).to.eq('#i-setting')

  vm.$destroy()
}

{
  const Constructor = Vue.extend(Button)

  const vm = new Constructor({
    propsData: {
      loading: true
    }
  })

  vm.$mount()

  let useElement = vm.$el.querySelector('use')
  let href = useElement.getAttribute('xlink:href')

  expect(href).to.eq('#i-loading')

  vm.$destroy()
}

{
  const Constructor = Vue.extend(Button)

  const vm = new Constructor({
    propsData: {
      loading: true
    }
  })

  vm.$mount()

  let useElement = vm.$el.querySelector('use')
  let href = useElement.getAttribute('xlink:href')

  expect(href).to.eq('#i-loading')

  vm.$destroy()
}

{
  const Constructor = Vue.extend(Button)

  const vm = new Constructor({
    propsData: {
      icon: 'setting',
      iconPosition: 'left'
    }
  })

  const div = document.createElement('div')
  document.body.appendChild(div)

  vm.$mount(div)

  vm.$nextTick(() => {
    let svgElement = vm.$el.querySelector('svg')
    let {order} = getComputedStyle(svgElement)

    expect(order).to.eq('1')

    document.body.removeChild(vm.$el)
    vm.$destroy()
  })
}

{
  const Constructor = Vue.extend(Button)

  const vm = new Constructor({
    propsData: {
      icon: 'setting',
      iconPosition: 'right'
    }
  })

  const div = document.createElement('div')
  document.body.appendChild(div)

  vm.$mount(div)

  vm.$nextTick(() => {
    let svgElement = vm.$el.querySelector('svg')
    let {order} = getComputedStyle(svgElement)

    expect(order).to.eq('2')

    document.body.removeChild(vm.$el)
    vm.$destroy()
  })
}

{
  const Constructor = Vue.extend(Button)

  const vm = new Constructor({
    propsData: {
      loading: true
    }
  })

  vm.$mount()

  let spy = chai.spy(function () {})

  vm.$on('click', spy)

  const button = vm.$el

  button.click()

  expect(spy).to.have.been.called()

  vm.$destroy()
}

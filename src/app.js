import Vue from 'vue'
import Button from './button'

new Vue({
  el: '#app',
  data: {
    loading1: true,
    loading2: false
  },
  components: {
    'm-button': Button
  }
});
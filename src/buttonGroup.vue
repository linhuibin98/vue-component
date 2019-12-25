<template>
  <div class="m-button-group">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'buttonGroup',
    mounted() {
      Array.from(this.$el.children).forEach(node => {
        let name =node.nodeName.toLowerCase()
        if (name !== 'button') {
          console.warn(`m-button-group组件中只能包含m-button组件, 你写入了${name}标签或组件`)
        }
      })
    }
  }
</script>

<style lang="scss">
  .m-button-group {
    display: inline-flex;
    vertical-align: middle;

    .m-button {
      border-radius: 0;
      &:first-child {
        border-top-left-radius: 4px;
        border-bottom-left-radius: 4px;
      }
      &:last-child {
        border-top-right-radius: 4px;
        border-bottom-right-radius: 4px;
      }
      &:not(:first-child) {
        margin-left: -1px;
      }

      &:hover {
        position: relative;
        z-index: 1;
      }
    }
  }
</style>
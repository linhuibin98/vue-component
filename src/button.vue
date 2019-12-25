<template>
  <button class="m-button" :class="{[`icon-${iconPosition}`]: true}">
    <svg v-if="icon" class="icon">
      <use :xlink:href="`#i-${icon}`"></use>
    </svg>
    <span class="content">
      <slot></slot>
    </span>
  </button>
</template>

<script>
  export default {
    name: "button",
    props: {
      icon: String,
      iconPosition: {
        type: String,
        default: 'left',
        validator(value) {
          return value === 'left' || value === 'right';
        }
      }
    }
  }
</script>

<style scoped lang="scss">
  .m-button {
    padding: 0 1em;
    height: var(--button-height);
    font-size: var(--font-size);
    border: 1px solid var(--border-color);
    border-radius: var(--border-radius);
    background-color: var(--button-bg);
    color: var(--color);
    line-height: var(--button-height);
    display: inline-flex;
    justify-content: center;
    align-items: center;
    vertical-align: middle;

    &:hover {
      background-color: var(--button-active-bg);
      border-color: var(--border-hover-color);
      color: var(--color-hover);
    }

    > .icon {
      order: 1;
      width: 1em;
      height: 1em;
    }
    > .content {
      order: 2;
    }

    &.icon-right {
      > .icon {
        order: 2;
      }

      > .content {
        order: 1;
      }

    }
  }
</style>
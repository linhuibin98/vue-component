<template>
  <button class="m-button" :class="{[`icon-${iconPosition}`]: true}"
    @click="$emit('click')"
  >
    <m-icon class="loading" v-if="loading" name="loading"></m-icon>
    <m-icon class="icon" v-if="icon && !loading" :name="icon"></m-icon>
    <span class="content">
      <slot></slot>
    </span>
  </button>
</template>

<script>
  import Icon from './icon'

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
      },
      loading: {
        type: Boolean,
        default: false
      }
    },
    components: {
      'm-icon': Icon
    }
  }
</script>

<style scoped lang="scss">
  @keyframes loading {

    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }

  }
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

    > .loading {
      animation: loading 1s infinite;
    }
  }
</style>
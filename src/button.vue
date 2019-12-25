<template>
  <button class="m-button">提交</button>
</template>

<script>
  export default {
    name: "button"
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

    &:hover {
      background-color: var(--button-active-bg);
      border-color: var(--border-hover-color);
      color: var(--color-hover);
    }
  }
</style>
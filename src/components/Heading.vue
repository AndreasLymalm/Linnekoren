<template>
  <div class="heading">
    <svg height="10" width="500">
      <line x1="0" y1="0" x2="499" y2="0" style="stroke:#282828; stroke-width:7" />
    </svg>
    <h2>{{ title }}</h2>
    <svg height="10" width="500">
      <line x1="0" y1="0" x2="499" y2="0" style="stroke:#282828; stroke-width:7" />
    </svg>
  </div>
</template>

<script>
export default {
  props: {
    title: {
        type: String,
        required: true
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../settings.scss";

.heading {
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    filter: drop-shadow(0px 0px 3px map-get($color-defs, heading-background));
  }

  h2 {
    flex-shrink: 0;
    text-align: center;
    margin: 1em;
  }
}
</style>
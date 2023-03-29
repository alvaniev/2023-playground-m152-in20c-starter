<template>
  <div id="container">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const msg = ref("Hello World");

    return { msg };
  },
};
</script>

<style scoped>
h1 {
  color: blue;
}
#container {
  margin-left: 24px;
}
</style>

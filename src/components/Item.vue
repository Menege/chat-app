<template>
  <br />
  <input type="checkbox" :id="idx" v-model="checked" @click="check" />
  <label :for="idx">
    {{ task }}
  </label>
</template>

<script>
import { methods, ref } from "vue";
export default {
  setup(props, emit) {
    let checked = ref(false);

    const check = methods(() => {
      setTimeout(() => {
        if (checked.value) {
          emit("delite-item", props.idx);
          checked.value = false;
        }
      }, 150);
    });
    return {
      checked,
      check
    };
  },

  props: ["task", "idx"],
  emits: ["delite-item"],
};
</script>

<style>
</style>
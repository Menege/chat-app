<template>
  <br />
  <input type="checkbox" :id="idx" v-model="checked" @click="check" />
  <label :for="idx">
    {{ task }}
  </label>
</template>

<script>
export default {
  data() {
    return {
      checked: false,
    };
  },

  props: ["task", "idx"],
  emits: ["delite-item"],
  methods: {
    check() {
     setTimeout(() => {
        if (this.checked) {
          this.$emit("delite-item", this.idx);
          this.checked = false;
        }
      }, 150);
    },
  },
};
</script>

<style>
</style>
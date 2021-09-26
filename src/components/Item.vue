<template>
  <br />
  <input type="checkbox" :id="idx" v-model="checked" @click="check" />
  <label :for="idx">
    {{ task }}
  </label>
</template>

<script>
import { ref,computed} from "vue";
export default {
   props: ["task", "idx"],
  emits: ["delite-item"],
  setup(props, { emit }) {
    let checked = ref(false);


    let check = computed(() => {
       setTimeout(() => {
        if  (checked.value) {
          emit("delite-item", props.idx);
          checked = ref(false);
        }
      }, 3000)
    })
    return {
       checked,
      check,
    };
  }
};
</script>

<style>
</style>
<template>
  <div class="container">
    <div class="form-control">
      <input
        @keyup.enter="prov"
        placeholder="Введите название задачи"
        type="text"
        v-model="nameTask"
      />
    </div>
    <button class="btn primary" @click="prov">Добавить задачу</button>
    <h3>Список задач:</h3>
    <h4 v-if="!tasks.length">Добавьте первую задачу...</h4>
    <div else v-for="(task, idx) in tasks" :key="task.id">
      <Item :task="task" :idx="idx" @delite-item="delite(idx)"></Item>
      <br />
    </div>
  </div>
</template>

<script>
import { computed } from "vue";
import Item from "./Item.vue";
import { useStore } from "vuex";
// import { mapGetters, mapMutations } from "vuex";
export default {
  setup() {
    const store = useStore();

    const delite = computed((idx) => store.commit("delite",idx));

    const nameTask = computed({
  get: () => store.state.nameTask,
  set: (val) => store.commit('updateNameTask', val)
})

const tasks=computed(()=>store.state.tasks)

const prov=computed(() => store.commit("prov"))

    return {
      nameTask,
      tasks,
      prov,
      delite,
    };
  },

  // computed: {
  //   ...mapGetters(["nameTask"]),
  //   nameTask: {
  //     get() {
  //       return this.$store.state.nameTask;
  //     },
  //     set(value) {
  //       this.$store.commit("updateNameTask", value);
  //     },
  //   },
  //   ...mapGetters(["tasks"]),
  // },
  // methods: {
  //   ...mapMutations(["prov"]),
  //   ...mapMutations(["delite"], 'idx'),
  // },
  components: { Item },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

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
    <button class="btn primary" @click.prevent="prov">Добавить задачу</button>
    <h3>Список задач:</h3>
    <h4 v-if="!tasks.length">Добавьте первую задачу...</h4>
    <div else v-for="(task, idx) in tasks" :key="task.id">
      <Item :task="task" :idx="idx" @delite-item="delite(idx)"></Item>
      <br />
    </div>
  </div>
</template>

<script>
import Item from "./Item.vue";
export default {
  data() {
    return {
      nameTask: "",
      tasks: JSON.parse(localStorage.getItem("my-tasks")) ?? [],
      da: null,
    };
  },
  computed: {
    label() {
      return this.nameTask;
    },
  },

  methods: {
    delite(idx) {
      this.tasks.splice(idx, 1);
      localStorage.setItem("my-tasks", JSON.stringify(this.tasks));
      console.log(this.tasks);
    },
    prov() {
      if (this.nameTask) {
        this.tasks.push(this.nameTask);
        localStorage.setItem("my-tasks", JSON.stringify(this.tasks));
        this.nameTask = "";
      }
    },
  },
  name: "HelloWorld",
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

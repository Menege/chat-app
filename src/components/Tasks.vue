<template>
  <div class="container">
    <div class="form-control">
      <input placeholder="Введите название задачи" type="text" v-model="nameTask" />
    </div>
    <button class="btn primary" @click.prevent="prov">Добавить задачу</button>
    <h3>Список задач:</h3>
    <div v-for="(task, idx) in tasks" :key="task.id">
      <br />
      {{ task }}
      <button class="btn danger" @click="delite(idx)">Удалить</button>
      <br />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nameTask: "",
      tasks: [],
    };
  },
  methods: {
    delite(idx) {
      this.tasks.splice(idx, 1);
    },
    prov() {
      if (this.nameTask) {this.tasks.push(this.nameTask);
      this.nameTask='';}
      
    },
  },
  name: "HelloWorld",
  props: {
    msg: String,
  },
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

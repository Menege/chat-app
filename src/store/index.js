import { createStore } from "vuex";

// Create a new store instance.
export default createStore({
  state() {
    return {
      nameTask: "",
      tasks: JSON.parse(localStorage.getItem("my-tasks")) ?? [],
      da: null,
    };
  },
  getters:{
nameTask(state){
    return state.nameTask
  },
  tasks(state){
      return state.tasks
  }},
  mutations: {
    updateNameTask(state,payload){
        state.nameTask = payload
    },
    delite(state, payload) {
      state.tasks.splice(payload, 1);
      localStorage.setItem("my-tasks", JSON.stringify(this.tasks));
      console.log(state.tasks);
    },
    prov(state) {
      if (state.nameTask) {
        state.tasks.push(state.nameTask);
        localStorage.setItem("my-tasks", JSON.stringify(state.tasks));
        state.nameTask = "";
      }
    },
  },
});

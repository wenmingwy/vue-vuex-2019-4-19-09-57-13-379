<template>
<body>
  <div id="app" class="container">
        <div>
            <h2>Jquery To Do List</h2>
            <p>
                <em>Simple Todo List with adding and filter by diff status.</em>
            </p>
        </div>
        <div>
            <input class="input-text" type="text" v-model="ListItem" />
            <button @click="$store.commit('addList', ListItem)">Add</button>
        </div>
        <br/>
        <ol>
          <todolist v-for="n in this.$store.getters.getListLen" v-bind:key="n" v-bind:length="n"></todolist>
        </ol>
        <div>
            <ul id="filters">
                <li>
                    <button @click="$store.getters.getAllList">ALL</button>
                </li>
                <li>
                    <button @click="$store.getters.getActiveList">Active</button>
                </li>
                <li>
                    <button @click="$store.getters.getCompleteList">Complete</button>
                </li>
            </ul>
        </div>
    </div>
</body>
</template>


<script>
import ToDoList from './components/ToDoList.vue'

export default {
  name: 'app',
  components:{
    ToDoList
  },
  data() {
    return {
      ListItem: '',
    }
  }
}
</script>

<style>
#button {
  display: inline-block;
  background-color: #fc999b;
  color: #ffffff;
  border-radius: 5px;
  text-align: center;
  margin-top: 2px;
  padding: 5px 15px;
}

#button:hover {
  cursor: pointer;
  opacity: 0.8;
}
</style>

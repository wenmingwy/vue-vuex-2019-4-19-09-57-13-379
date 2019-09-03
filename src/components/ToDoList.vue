<template>
  <div class="todolist">
    <li>
      <input type="checkbox" v-model="checked" @click="button"/>
      {{ $store.getters.getList(length-1) }}
    </li>
  </div>
</template>

<script>
import { METHODS } from 'http';
export default {
  name: 'todolist',
  data() {
    return {
      checked: false
    }
  },
  props: {
    length: Number
  },
//   这个传值有问题
  METHODS:{
     this.$store.commit('changeStatus',{})
  }
//   "$store.commit('changeStatus',{length,checked})"
}
</script>


 
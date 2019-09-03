import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

// const initState = {
//     messages:[],
//     buttons:[]
// };

const store = new Vuex.Store({
    state: {
            messages:[],
            buttons:[],
        },
    // 获取数据，与课堂练习一样
    getters: {
        getMessages(state){
            return function () {
                return state.messages;
            };
        },
        getMessagesByIndex: function (state) {
            return function (index) {
                return state.messages[index - 1];
            };
        },
        getAllList: function(state){
            return function(){
                
                }
        },
        getActiveList: function(state){
            return function(){
               
                }
        },
        getCompleteList: function(state){
            return function(){
                
                }
            }
        }  ,  
   
    // 通过ToDoList进行数据调用更新
    mutations:{
        pushMessages(state,message){
            state.messages.push(message);
        },
        clearMessages(state){
            state.messages = [];
        },
        changeStatus(){

        },
        pushButtons(state,button){
            state.buttons.push(button);
        },
        clearButtons(state){
            state.buttons = [];
        }
    }
});

export default store;

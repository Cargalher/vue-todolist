const app = new Vue({
    el: '#root',
   
    data:{
        newTask: '',
        myTasks: ['Learn HTML', 'Learn CSS', 'Learn JS', 'Learn Vue'],
    },
    methods:{
        addTask(){
            this.myTasks.push(this.newTask)
        }
    }
})
const app = new Vue({
    el: '#root',
   
    data:{
        logo:'./img/logo.png',
        title: 'Todo List',
        newTask: '',
        myTasks: ['Learn HTML', 'Learn CSS', 'Learn JS', 'Learn Vue'],
    },
    methods:{
        addTask(){
            this.myTasks.push(this.newTask)
            this.newTask = ''
        },
        binTask(index){
            // console.log('Bin task n.' + index);
            this.myTasks.splice(index,1)
        },
        editTask(){
            this.myTasks.replace(this.newTask)
        }
    }
});
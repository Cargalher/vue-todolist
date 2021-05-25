const app = new Vue({
    el: '#root',
   
    data:{
        logo:'./img/logo.png',
        title: 'Todo List',
        title2: 'Completed',
        newTask: '',
        error:'',
        myTasks: ['Learn HTML', 'Learn CSS', 'Learn JS', 'Learn Vue'],
        myCompletedTasks: [],
        bin: []
    },
    methods:{
        addTask(){
            if(this.newTask.length > 3){
            this.myTasks.unshift(this.newTask)
            this.newTask = ''
            this.error = '' 
            } else {
                this.error = 'you must insert at least 3 caracters'
            }
        },
        binTask(index,task){
            // console.log('Bin task n.' + index);
            this.myTasks.splice(index,1)
            this.bin.unshift(task)
        },
        updateTask(){
            alert('Task updated')
        },
        addFinishedTask(index, task){
            this.myCompletedTasks.unshift(task)
            this.myTasks.splice(index,1)
        },
        restoringTask(index,task){
            // moving task inside the todo list
            this.myTasks.unshift(task)
            // remove the task
            this.myCompletedTasks.splice(index,1)
        }
    }
});
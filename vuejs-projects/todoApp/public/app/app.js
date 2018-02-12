new Vue ({
  el:"#todo-app",

  data: {

    tasks: [],
    newTask : { name:"" , done: false }

  },

  methods: {

    addTask () {

       if ( this.newTask.name.length > 0 ) {
         this.$http.post('http://localhost:4000/api/task/add', this.newTask ).then((response) => {
                this.tasks.push(response.data);
         });
       }
       this.newTask = { name:"" , done: false };
    },

    taskDone (task) {
       task.done = !task.done;
       this.$http.put('http://localhost:4000/api/task/' + task._id, task).then((response) => {});  
    },

    modifyTask (){
      console.log('modified');
    },

    removeTask (task) {
      this.$http.delete('http://localhost:4000/api/task/' + task._id).then((response) => {
            this.tasks = this.tasks.filter(function(eachTask){
                return task !== eachTask;
            });
      });
    }

  },

  created () {
      this.$http.get('http://localhost:4000/api/tasks').then((response) => {
        this.tasks = response.data;
      });
  }

});
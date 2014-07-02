Taskmanagement.TasksRoute = Ember.Route.extend({
    model: function(){
        return Taskmanagement.Tasks;
    }
});
Taskmanagement.Tasks = [{id:1,summary: 'Create a signup form',priority:'Major',dueDate:'03/20/2014',description:'',estimateTime:'1h'},{id:2,summary: 'Create a login page',priority:'Major',dueDate:'03/20/2014',description:'',estimateTime:'1h'},
    {id:3,summary: 'Display tasks in list view',priority:'Major',dueDate:'03/20/2014',description:'',estimateTime:'1h'},{id:4,summary: 'Display task details',priority:'Major',dueDate:'03/20/2014',description:'',estimateTime:'1h'},
    {id:5,summary: 'Create a form to create a new task',priority:'Major',dueDate:'03/20/2014',description:'',estimateTime:'1h'}];
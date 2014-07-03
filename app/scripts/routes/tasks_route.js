Taskmanagement.TasksRoute = Ember.Route.extend({
    model: function(){
        return Taskmanagement.Tasks;
    }
});
Taskmanagement.Tasks = [
    {id:1,summary: 'Create a signup form',priority:'Major',dueDate:'03/20/2014',description:'for login purpose',estimateTime:'1h'},
    {id:2,summary: 'Create a login page',priority:'Major',dueDate:'03/20/2014',description:'to do some action',estimateTime:'1h'},
    {id:3,summary: 'Display tasks in list view',priority:'Major',dueDate:'03/20/2014',description:'to came to know that some tasks are available',estimateTime:'1h'},
    {id:4,summary: 'Show task details',priority:'Major',dueDate:'03/20/2014',description:'information of a task',estimateTime:'1h'},
    {id:5,summary: 'Create a form for a new task',priority:'Major',dueDate:'03/20/2014',description:'for add on tasks',estimateTime:'1h'}
];
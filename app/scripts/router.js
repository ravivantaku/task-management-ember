Taskmanagement.Router.map(function () {
  // Add your routes here
    this.route('signup');
    this.resource('tasks', function() {
//        this.route('new');
//        this.resource('task', {path: '/:id'});
//        this.route('edit', {path: '/:id/edit'})
    });
    this.route('new', {path:'/tasks/new'});
    this.resource('show', {path: '/tasks/:id'});
    this.route('edit', {path:'/tasks/:id/edit'});
});

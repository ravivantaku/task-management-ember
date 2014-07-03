Taskmanagement.IndexController = Ember.Controller.extend({
    actions: {
        tasks: function(data) {
            console.log(data);
            console.log(this.getProperties('username', 'password'));
            this.transitionToRoute('tasks');
        }
    }
});

Taskmanagement.NewController = Ember.Controller.extend({
    actions: {
        tasks: function() {
            this.transitionToRoute('tasks');
        }
    }
});

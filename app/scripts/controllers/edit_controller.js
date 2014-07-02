Taskmanagement.EditController = Ember.ObjectController.extend({
    actions: {
        update: function(data){
            console.log(data);
            this.transitionToRoute('tasks');
        }
    }
});
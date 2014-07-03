Taskmanagement.EditController = Ember.ObjectController.extend({
    date: null,
    time: function() {
        return this.get(date).toDateString();
    }.property(),
    actions: {
        update: function(data){
            console.log(data);
            this.transitionToRoute('tasks');
        }
    }
});
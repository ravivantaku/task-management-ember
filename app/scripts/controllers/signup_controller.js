Taskmanagement.SignupController = Ember.Controller.extend({
    actions: {
        index: function(data) {
            console.log(data);
            this.transitionToRoute('index');
        }
    }
});


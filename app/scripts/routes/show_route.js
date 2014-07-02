Taskmanagement.ShowRoute = Ember.Route.extend({
    model: function(params){
        return Taskmanagement.Tasks.findBy(params.id);
    }
})
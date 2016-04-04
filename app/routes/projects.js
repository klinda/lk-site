import Ember from 'ember';

export default Ember.Route.extend({

	resetController: function (controller) {
		controller.set('rarwe', false);
		controller.set('project2', false);
		controller.set('project3', false);
	}
});

import Ember from 'ember';

export default Ember.Controller.extend({

	showModal: false,

	rarwe: false,

	array: false,

	seedpaths: false,

	library: false,

	actions: {
		showModal: function(params) {
			this.set(params, true);
			this.set('showModal', true);
		},

		closeModal: function() {
			this.set('showModal', false);
			this.setProperties({
				'rarwe' : false,
				'library': false,
				'array': false,
				'seedpaths': false
			});
		}
	}
});
